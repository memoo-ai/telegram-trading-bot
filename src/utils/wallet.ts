import { Keypair } from '@solana/web3.js';
import { WalletService } from 'src/wallet/wallet.service';
import { UserService } from 'src/user/user.service';
import { Injectable } from '@nestjs/common';
import { Chain } from 'src/common/constants/chain';


@Injectable()
export class WalletUtils {
  constructor(
    private readonly walletService: WalletService,
    private readonly userService: UserService
  ) {}



  /**
   * 创建Solana钱包
   */
  createSolanaWallet() {
    const keypair = Keypair.generate();
    return {
      publicKey: keypair.publicKey.toBase58(),
      secretKey: Buffer.from(keypair.secretKey).toString('base64'),
    };
  }

  /**
   * 检查用户是否已创建钱包
   * @param tgId - Telegram用户ID
   * @returns 用户是否已创建钱包
   */
  async hasUserCreatedWallet(tgId: number): Promise<boolean> {
    try {
      const user = await this.userService.findByTgId(tgId);
      if (!user) return false;

      const wallets = await this.walletService.findWalletsByUserId(user.id);
      return wallets.length > 0;
    } catch (error) {
      console.error('Error checking user wallets:', error);
      return false;
    }
  }
}

/**
 * 根据链类型生成区块链浏览器地址
 * @param chain 链名（如 'solana', 'eth', 'bsc'）
 * @param address 钱包地址
 */
export function formatExplorerLink(chain: Chain, address: string): string {
  switch (chain) {
    case Chain.SOL:
      return `https://solscan.io/account/${address}`;
    case Chain.BNB:
      return `https://bscscan.com/address/${address}`;
    // 可扩展更多链
    default:
      return '';
  }
}

/**
 * 格式化钱包地址和区块链浏览器链接
 * @param prefix 前缀文本（如 'Public Key: '）
 * @param address 钱包地址
 * @param chain 链名，默认 solana
 */
export function formatWalletLink(prefix: string, address: string, chain: Chain = Chain.SOL): string {
  const explorerUrl = formatExplorerLink(chain, address);
  return `${prefix}${address} <a href="${explorerUrl}" target="_blank">( E )</a>`;
}
