import { Markup } from 'telegraf';
import { MyContext } from '../type';
import { TelegramKey, TelegramScenes } from 'src/common/constants/telegram';
import { BaseCommandHandler } from './base.command.handler';
import { UserService } from 'src/user/user.service';
import { WalletService } from 'src/wallet/wallet.service';
import { Wallet } from 'src/wallet/entities/wallet.entity';
import { Injectable } from '@nestjs/common';
import { formatWalletLink } from 'src/utils/wallet';
import { NO_WALLET_MESSAGE } from 'src/common/constants/messages';

/**
 * 钱包指令处理器
 */
@Injectable()
export class WalletsCommandHandler extends BaseCommandHandler {
  constructor(
    private readonly userService: UserService,
    private readonly walletService: WalletService
  ) {
    super();
    if (!this.userService) {
      throw new Error('UserService not injected');
    }
    if (!this.walletService) {
      throw new Error('WalletService not injected');
    }
  }

  getCommand(): string {
    return TelegramKey.Wallets;
  }

  private async getUserWallets(tgId: number): Promise<Wallet[]> {
    const user = await this.userService.findByTgId(tgId);
    if (!user) return [];
    return this.walletService.findWalletsByUserId(user.id);
  }

  async handle(ctx: MyContext, edit: boolean = false): Promise<void> {
    try {
      const userId = ctx.from?.id;
      if (!userId) {
        await ctx.reply('❌ Unable to get user ID');
        return;
      }
      const wallets = await this.getUserWallets(userId);
      // console.log(wallets);
      let msg = '';
      if (wallets.length === 0) {
        msg = NO_WALLET_MESSAGE;
      } else {
        msg = '💼 Your Wallets\n\n';
        for (const w of wallets) {
          const isDefault = w.isDefaultWallet;
          msg += `${isDefault ? '✅' : '◽️'} ${w.walletName}\n`;
          msg += `${formatWalletLink('Public Key: ', w.walletAddress)} \n`;
          msg += `Balance: 0.0000 SOL ($0.00)\n\n`;
        }
        msg += '✅ - Default wallet\n◽️ - Additional wallet';
      }
      // 创建钱包按钮数组
      const buttons = [
        [
          Markup.button.callback('➕ Create Wallet', TelegramKey.CreateWallet),
          Markup.button.callback('👛 Import Wallet', TelegramKey.ImportWallet),
        ],
      ];

      // 如果该用户钱包数量大于1，则显示出所有钱包, 并标记默认钱包
      if (wallets.length > 1) {
        for (const w of wallets) {
          const isDefault = w.isDefaultWallet;
          // 每个钱包按钮独占一行
          buttons.push([
            Markup.button.callback(
              `${w.walletName} ${isDefault ? '(Default)' : ''}`,
              `${TelegramKey.EditWallet}:${w.id}`
            )
          ]);
        }
      }

      // 添加底部按钮
      buttons.push([
        Markup.button.callback('🔐 Security Tips', TelegramKey.SecurityTips),
        Markup.button.callback('🏠 Main Menu', TelegramKey.MainMenu),
      ]);

      const keyboard = Markup.inlineKeyboard(buttons);

      await this.sendOrEditMessage(ctx, msg, keyboard);

      // if (edit && 'editMessageText' in ctx) {
      //   await ctx.editMessageText(msg, { parse_mode: 'HTML', link_preview_options: { is_disabled: true }, reply_markup: keyboard.reply_markup });
      // } else {
      //   await ctx.reply(msg, { parse_mode: 'HTML', link_preview_options: { is_disabled: true }, reply_markup: keyboard.reply_markup });
      // }

    } catch (error) {
      console.error('Error handling wallets command:', error);
      await ctx.reply('❌ An error occurred while processing your request');
    }
  }

  /**
   * 处理创建钱包按钮
   */
  async handleCreateWallet(ctx: MyContext): Promise<void> {
    await ctx.scene.enter(TelegramScenes.CreateWallet);
  }
  
  /**
   * 处理导入钱包按钮
   */
  async handleImportWallet(ctx: MyContext): Promise<void> {
    const text =
    `📥 Import Existing Wallet\n\n` +
    `Step 1 of 2: Name Your Wallet\n` +
    `Please enter a name for this wallet\n` +
    `Examples: "Trading Wallet", "Main Wallet", "DeFi Wallet"\n\n` +
    `✏️ Send your wallet name in the next message`;
  const keyboard = Markup.inlineKeyboard([
    [Markup.button.callback('<< Back', TelegramKey.Wallets)],
  ]);
    await this.sendOrEditMessage(ctx, text, keyboard);
  }

  /**
   * 发送安全提示
   */
  async sendSecurityTips(ctx: MyContext): Promise<void> {
    const text =
      `🔐 Wallet Security Tips\n\n` +
      `1. Never share your private key with anyone\n` +
      `2. Store your backup information securely\n` +
      `3. Keep your backup in a safe place\n` +
      `4. Don't store large amounts in trading wallet\n` +
      `5. Always verify transactions before signing\n` +
      `6. Be cautious of phishing attempts\n` +
      `7. Use hardware wallets for large holdings`;
    const keyboard = Markup.inlineKeyboard([
      [Markup.button.callback('<< Back to Wallets', TelegramKey.Wallets)],
    ]);
    
    await this.sendOrEditMessage(ctx, text, keyboard);
  }
}