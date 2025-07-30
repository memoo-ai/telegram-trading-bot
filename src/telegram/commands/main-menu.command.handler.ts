import { Injectable } from '@nestjs/common';
import { Markup } from 'telegraf';
import { TelegramKey } from 'src/common/constants/telegram';
import { MyContext } from '../type';
import { BaseCommandHandler } from './base.command.handler';
import { UserService } from 'src/user/user.service';
import { WalletService } from 'src/wallet/wallet.service';
import { ConfigService } from '@nestjs/config';
import { ENV } from 'src/common/config/env';
import { PLATFORM_NAME } from 'src/common/constants';

@Injectable()
export class MainMenuCommandHandler extends BaseCommandHandler {
  constructor(
    private readonly userService: UserService,
    private readonly walletService: WalletService,
    private readonly config: ConfigService,
  ) {
    super();
  }

  async handle(ctx: MyContext): Promise<void> {
    const tgId = ctx.from?.id;
    if (!tgId) return;

    const user = await this.userService.findByTgId(tgId);
    if (!user || !user.agreedToTerms) {
      await ctx.reply('❌ You must agree to the terms to use the bot.');
      return;
    }

    const wallets = await this.walletService.findWalletsByUserId(user.id);
    let walletInfo = '';
    
    if (wallets.length === 0) {
      await ctx.reply('❌ No wallet found. Use /wallets to create one.');
      return;
    }

    const defaultWallet = await this.walletService.findDefaultWalletByUserId(user.id);
    if (defaultWallet) {
      walletInfo =
        `💰 Wallet: ${defaultWallet.walletName}\n` +
        `🔑 Public Key: ${defaultWallet.walletAddress} <a href="https://solscan.io/account/${defaultWallet.walletAddress}" target="_blank">( E )</a>\n` +
        `💸 Balance: 0.0000 SOL ($0.00)\n`;
    }

    const msg =
      `👋 Welcome to ${PLATFORM_NAME}\n` +
      `You're now in the command center for trading new launches on Solana.\n\n` +
      walletInfo + '\n' +
      `🔹 Start Feed - Launch a real-time stream of new PumpSwap token listings, based on your Feed Filters.\n` +
      `🔹 Auto Trade - The bot automatically executes trades on tokens that appear in your custom feed, using your preset trade settings.\n` +
      `🔹 Feed Filters - Control which types of launches appear in your feed.\n` +
      `🔹 Trade Settings - Adjust your trading parameters for both manual and auto-trade strategies.\n\n` +
      `👥 Referral Link - https://t.me/${this.config.get(ENV.TELEGRAM_BOT_NAME)}?start=${user.inviteCode} (Tap to copy)\n` +
      `👥 Total Invites - ${user.totalInvites}\n\n` +
      `📖 For advanced guidance and strategies, check out our GitBook.`;

    const keyboard = Markup.inlineKeyboard([
      [
        Markup.button.callback('➕ StartFeed', TelegramKey.Feed),
        Markup.button.callback('👛 Auto Trade', TelegramKey.AutoTradeAction),
      ],
      [
        Markup.button.callback('💼 Wallets', TelegramKey.Wallets),
        Markup.button.callback('⚙️ Settings', TelegramKey.Settings),
      ],
      [
        Markup.button.callback('📊 Positions', TelegramKey.Positions),
        Markup.button.callback('🛒 Buy', TelegramKey.Buy),
      ],
      [
        Markup.button.callback('🔐 Security Tips', TelegramKey.SecurityTips),
        Markup.button.callback('❓ Help', TelegramKey.Help),
      ],
    ]);

    await this.sendOrEditMessage(ctx, msg, keyboard);
  }
} 