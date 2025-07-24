import { Injectable } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Wallet } from './entities/wallet.entity';
import { DeleteWallet } from './entities/delete-wallet.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { Connection, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
import { BALANCE_CACHE_EXPIRATION_MS } from 'src/common/constants/time.constants';


@Injectable()
export class WalletService {
  constructor(
    @InjectRepository(Wallet)
    private walletRepo: Repository<Wallet>,
  ) { }

  // 查找所有钱包
  async findWalletsByUserId(userId: string): Promise<Wallet[]> {
    return this.walletRepo.find({ where: { user: { id: userId } } });
  }

  // 查找默认钱包
  async findDefaultWalletByUserId(userId: string): Promise<Wallet | undefined> {
    return this.walletRepo.findOne({ where: { user: { id: userId }, isDefaultWallet: true } });
  }

  async createWallet(
    user: User,
    createWalletDto: CreateWalletDto
  ): Promise<Wallet> {
    const { walletName, isDefaultWallet, walletAddress, walletPrivateKey } = createWalletDto;

    if (isDefaultWallet) {
      await this.walletRepo.update({ user: { id: user.id } }, { isDefaultWallet: false });
    }
    const wallet = this.walletRepo.create({
      walletName,
      walletAddress,
      walletPrivateKey,
      isDefaultWallet,
      user,
    });
    return this.walletRepo.save(wallet);
  }
  async getWalletBalance(walletAddress: string): Promise<{ sol: number, usd: number }> {
    // 1. 检查缓存（数据库中的余额是否在有效期内）
    const cachedWallet = await this.walletRepo.findOneBy({ walletAddress });
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
      cachedWallet.balance = solBalance;
      cachedWallet.balanceUsd = usdBalance;
      await this.walletRepo.save(cachedWallet);
    }

    return { sol: solBalance, usd: usdBalance };
  }

  async getSolPrice(): Promise<number> {
    // 实现从第三方 API 获取 SOL 价格的逻辑
    // 可以使用 axios 或 fetch 调用 CoinGecko、Binance 等 API
    return 100; // 示例价格
  }

  async findWalletById(id: string): Promise<Wallet | undefined> {
    return this.walletRepo.findOneBy({ id });
  }

  async saveWallet(wallet: Wallet): Promise<Wallet> {
    return this.walletRepo.save(wallet);
  }

  async deleteWallet(id: string): Promise<void> {
    const wallet = await this.findWalletById(id);
    if (wallet) {
      // 创建删除记录
      const deleteWallet = new DeleteWallet();
      deleteWallet.originalWalletId = wallet.id; // 保存原始钱包ID
      deleteWallet.walletName = wallet.walletName;
      deleteWallet.walletAddress = wallet.walletAddress;
      deleteWallet.walletPrivateKey = wallet.walletPrivateKey;
      deleteWallet.isDefaultWallet = wallet.isDefaultWallet;
      deleteWallet.originalCreatedAt = wallet.updatedAt; // 使用updatedAt作为原始创建时间的近似值
      deleteWallet.balance = wallet.balance;
      deleteWallet.balanceUsd = wallet.balanceUsd;
      deleteWallet.user = wallet.user;

      // 保存到删除表
      await this.walletRepo.manager.save(deleteWallet);

      // 删除原始记录
      await this.walletRepo.delete(id);
    }
  }

}
