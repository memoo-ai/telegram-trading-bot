/* eslint-disable no-debugger */
/* eslint-disable max-params */
import { ApiV3PoolInfoStandardItemCpmm, CpmmKeys, CpmmRpcData, CurveCalculator } from '@raydium-io/raydium-sdk-v2';
import { initSdk } from './config';
import { isValidCpmm } from './utils';
import { NATIVE_MINT } from '@solana/spl-token';
import { PublicKey } from '@solana/web3.js';
import { BN } from '@coral-xyz/anchor';
import BigNumber from 'bignumber.js';

const FEE_ACCOUNT = process.env.RAYDIUM_FEE_ACCOUNT;
export const swapToken = async (
  publickey: PublicKey,
  isGetSwapResult: boolean,
  // amount: number | string | BigNumber,
  inputAmount: BN,
  poolId: string,
  inputMint: string,
  feeAmount?: BN,
  slippage?: number,
) => {
  const raydium = await initSdk({ publickey });
  // SOL - USDC pool
  // const poolId = 'BfTNHnAxm91JwtzaZwzersofz919bvvmBCQ1n42qmNYx';
  // const bigNumberAmount = new BigNumber(amount?.toString() ?? 0).multipliedBy(new BigNumber(10).pow(9));
  // console.log('bigNumberAmount-amount: ', amount?.toString());
  // console.log('bigNumberAmount: ', bigNumberAmount);
  // const inputAmount = new BN(23);
  // const inputMint = NATIVE_MINT.toBase58();

  let poolInfo: ApiV3PoolInfoStandardItemCpmm;
  let poolKeys: CpmmKeys | undefined;
  let rpcData: CpmmRpcData;

  if (raydium.cluster === 'mainnet') {
    // note: api doesn't support get devnet pool info, so in devnet else we go rpc method
    // if you wish to get pool info from rpc, also can modify logic to go rpc method directly
    const data = await raydium.api.fetchPoolById({ ids: poolId });
    poolInfo = data[0] as ApiV3PoolInfoStandardItemCpmm;
    console.log('poolID:', poolId);
    console.log('poolInfo: ', poolInfo);
    if (!isValidCpmm(poolInfo.programId)) throw new Error('target pool is not CPMM pool');
    rpcData = await raydium.cpmm.getRpcPoolInfo(poolInfo.id, true);
  } else {
    const data = await raydium.cpmm.getPoolInfoFromRpc(poolId);
    poolInfo = data.poolInfo;
    poolKeys = data.poolKeys;
    rpcData = data.rpcData;
  }

  if (inputMint !== poolInfo.mintA.address && inputMint !== poolInfo.mintB.address)
    throw new Error('input mint does not match pool');

  const baseIn = inputMint === poolInfo.mintA.address;
  console.log('baseIn: ', baseIn);
  // swap pool mintA for mintB

  const swapResult = CurveCalculator.swap(
    inputAmount,
    baseIn ? rpcData.baseReserve : rpcData.quoteReserve,
    baseIn ? rpcData.quoteReserve : rpcData.baseReserve,
    rpcData.configInfo!.tradeFeeRate,
  );
  console.log('swapResult: ', swapResult);
  // console.log('swapResult-destinationAmountSwapped: ', swapResult.destinationAmountSwapped?.toString());
  // console.log('swapResult-sourceAmountSwapped: ', swapResult.sourceAmountSwapped.toString());
  // console.log('swapResult-newSwapDestinationAmount: ', swapResult.newSwapDestinationAmount.toString());
  console.log('isGetSwapResult: ', isGetSwapResult);

  if (isGetSwapResult) return swapResult;
  console.log('swapResult-tradeFee: ', swapResult.tradeFee.toString());
  /**
   * swapResult.sourceAmountSwapped -> input amount
   * swapResult.destinationAmountSwapped -> output amount
   * swapResult.tradeFee -> this swap fee, charge input mint
   */

  const { transaction } = await raydium.cpmm.swap({
    poolInfo,
    poolKeys,
    inputAmount,
    swapResult,
    slippage: slippage ?? 0.02, // range: 1 ~ 0.0001, means 100% ~ 0.01%
    baseIn,
    payer: publickey,
    // optional: set up priority fee here
    computeBudgetConfig: {
      units: 400_000,
      microLamports: 100000,
    },

    // optional: add transfer sol to tip account instruction. e.g sent tip to jito
    txTipConfig: {
      // address: new PublicKey('3seJ99foJRXh17sEBQvZYshzMnoiCGmtwZ46x4TrZPny'),
      address: new PublicKey(FEE_ACCOUNT),
      amount: feeAmount ?? new BN(100), // 0.0000001 sol
    },
  });
  // const { signedTx, txId } = await execute({ sendAndConfirm: false });
  // console.log('swapped-txid: ', `https://explorer.solana.com/tx/${txId}`);
  return transaction;
  // don't want to wait confirm, set sendAndConfirm to false or don't pass any params to execute
  // const { txId } = await execute({ sendAndConfirm: true });
  // console.log(`swapped: ${poolInfo.mintA.symbol} to ${poolInfo.mintB.symbol}:`, {
  //   txId: `https://explorer.solana.com/tx/${txId}`,
  // });
  // process.exit(); // if you don't want to end up node execution, comment this line
};

/** uncomment code below to execute */
// swap()
