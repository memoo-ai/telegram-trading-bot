import { Markup } from 'telegraf';
import { MyContext } from '../type';
import { TelegramKey } from 'src/common/constants/telegram';
import { BaseCommandHandler } from './base.command.handler';
import { UserService } from 'src/user/user.service';
import { WalletService } from 'src/wallet/wallet.service';
import { Wallet } from 'src/wallet/entities/wallet.entity';
import { Injectable } from '@nestjs/common';
import { WalletUtils } from 'src/utils/wallet';

/**
 * 钱包指令处理器
 */
@Injectable()
export class BuyCommandHandler extends BaseCommandHandler {
  constructor(
    private readonly userService: UserService,
    private readonly walletService: WalletService,
    private readonly walletUtils: WalletUtils
  ) {
    super();
    console.log('BuyCommandHandler constructor:', { userService, walletService, walletUtils });
    if (!this.userService) {
      throw new Error('UserService not injected');
    }
    if (!this.walletService) {
      throw new Error('WalletService not injected');
    }
    if (!this.walletUtils) {
      throw new Error('WalletUtils not injected');
    }
  }

  getCommand(): string {
    return TelegramKey.Buy;
  }

  async handle(ctx: MyContext, edit: boolean = false): Promise<void> {
    try {
      const userId = ctx.from?.id;
      if (!userId) {
        await ctx.reply('❌ Unable to get user ID');
        return;
      }

      // 检查用户是否已创建钱包
      const hasWallet = await this.walletUtils.hasUserCreatedWallet(userId);

      if (!hasWallet) {
        await ctx.reply('💼 You need to create a wallet first before using this feature.');
        return;
      }

      // 如果用户已有钱包，显示购买相关内容
      await ctx.reply('🛒 Welcome to the buy section!');
      // 这里可以添加更多购买相关的逻辑
    } catch (error) {
      console.error('Error handling buy command:', error);
      await ctx.reply('❌ An error occurred while processing your request');
    }
  }
}