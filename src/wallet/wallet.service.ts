import { Injectable } from '@nestjs/common';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Wallet } from './entities/wallet.entity';
import { Repository } from 'typeorm';
import { createSolanaWallet } from 'src/utils/wallet';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class WalletService {
  constructor(
    @InjectRepository(Wallet)
    private walletRepo: Repository<Wallet>,
  ) {}

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
    walletName: string,
    isDefaultWallet: boolean,
    walletAddress: string,
    walletPrivateKey: string
  ): Promise<Wallet> {
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
}
