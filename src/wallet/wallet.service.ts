import { Injectable } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { WalletUtils } from 'src/utils/wallet';
import { Connection, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
import { BALANCE_CACHE_EXPIRATION_MS } from 'src/common/constants/time.constants';
import { encryptPrivateKey } from 'src/utils';
import { PrismaService } from '../prisma/prisma.service';

  
@Injectable()
export class WalletService {
  constructor(
    private prisma: PrismaService,
  ) { }

  // 查找所有钱包
  async findWalletsByUserId(userId: string) {
    return this.prisma.wallet.findMany({ where: { userId } });
  }

  // 查找默认钱包
  async findDefaultWalletByUserId(userId: string) {
    return this.prisma.wallet.findFirst({ where: { userId, isDefaultWallet: true } });
  }

  async createWallet(
    user,
    createWalletDto: CreateWalletDto
  ) {
    const { walletName, isDefaultWallet, walletAddress, walletPrivateKey } = createWalletDto;

    if (isDefaultWallet) {
      await this.prisma.wallet.updateMany({
        where: { userId: user.id },
        data: { isDefaultWallet: false }
      });
    }
    // 使用WalletUtils加密私钥
    const encryptedPrivateKey = encryptPrivateKey(walletPrivateKey);
    
    return this.prisma.wallet.create({
      data: {
        walletName,
        walletAddress,
        walletPrivateKey: encryptedPrivateKey,
        isDefaultWallet,
        userId: user.id,
      },
    });
  }
  async getWalletBalance(walletAddress: string) {
    // 1. 检查缓存（数据库中的余额是否在有效期内）
    const cachedWallet = await this.prisma.wallet.findUnique({ where: { walletAddress } });
    // 假设在常量文件中定义了 BALANCE_CACHE_EXPIRATION_MS 常量
    if (cachedWallet && Date.now() - new Date(cachedWallet.updatedAt).getTime() < BALANCE_CACHE_EXPIRATION_MS) {
      return { sol: cachedWallet.balance, usd: cachedWallet.balanceUsd };
    }

    // 2. 实时查询
    const connection = new Connection('https://api.mainnet-beta.solana.com');
    const publicKey = new PublicKey(walletAddress);
    const balance = await connection.getBalance(publicKey);
    const solBalance = balance / LAMPORTS_PER_SOL;

    // 3. 获取 SOL 价格（可以从 CoinGecko 等 API 获取）
    const usdPrice = await this.getSolPrice();
    const usdBalance = solBalance * usdPrice;

    // 4. 更新数据库
    if (cachedWallet) {
      await this.prisma.wallet.update({
        where: { id: cachedWallet.id },
        data: {
          balance: solBalance,
          balanceUsd: usdBalance
        }
      });
    }

    return { sol: solBalance, usd: usdBalance };
  }

  async getSolPrice(): Promise<number> {
    // 实现从第三方 API 获取 SOL 价格的逻辑
    // 可以使用 axios 或 fetch 调用 CoinGecko、Binance 等 API
    return 100; // 示例价格
  }

  async findWalletById(id: string) {
    return this.prisma.wallet.findUnique({ where: { id } });
  }

  async saveWallet(wallet) {
    return this.prisma.wallet.update({
      where: { id: wallet.id },
      data: wallet
    });
  }

  async deleteWallet(id: string): Promise<void> {
    const wallet = await this.findWalletById(id);
    if (wallet) {
      // 创建删除记录
      await this.prisma.deleteWallet.create({
        data: {
          originalWalletId: wallet.id, // 保存原始钱包ID
          walletName: wallet.walletName,
          walletAddress: wallet.walletAddress,
          walletPrivateKey: wallet.walletPrivateKey,
          isDefaultWallet: wallet.isDefaultWallet,
          originalCreatedAt: wallet.updatedAt, // 使用updatedAt作为原始创建时间的近似值
          balance: wallet.balance,
          balanceUsd: wallet.balanceUsd,
          userId: wallet.userId,
        }
      });

      // 删除原始记录
      await this.prisma.wallet.delete({ where: { id } });
    }
  }

}
