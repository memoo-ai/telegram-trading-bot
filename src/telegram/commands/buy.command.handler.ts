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

  async handle(ctx: MyContext): Promise<void> {
    try {
      const userId = ctx.from?.id;
      if (!userId) {
        await ctx.reply('❌ Unable to get user ID');
        return;
      }

      // 检查用户是否已创建钱包
      const hasWallet = await this.walletUtils.hasUserCreatedWallet(userId);

      if (!hasWallet) {
        const text = '💼 You need to create a wallet first before using this feature.';
        const keyboard = Markup.inlineKeyboard([
          [Markup.button.callback('Create Wallet', TelegramKey.CreateWallet)],
        ]);
        await this.sendOrEditMessage(ctx, text, keyboard);
        return;
      }

      // 如果用户已有钱包，显示购买相关内容
      const text = '🛒 Welcome to the buy section!\n\nPlease enter the token address you want to buy:';
      await this.sendOrEditMessage(ctx, text);
    } catch (error) {
      console.error('Error handling buy command:', error);
      await ctx.reply('❌ An error occurred while processing your request');
    }
  }
}