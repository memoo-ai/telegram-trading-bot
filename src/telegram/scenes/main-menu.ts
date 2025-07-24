// src/telegram/utils/main-menu.ts
import { Markup } from 'telegraf';
import { TelegramKey } from 'src/common/constants/telegram';
import { platformName } from 'src/common/constants';

export async function MainMenu(ctx, user, defaultWallet, config) {
  let walletInfo = '';
  if (defaultWallet) {
    walletInfo =
      `💰 Wallet: ${defaultWallet.walletName}\n` +
      `🔑 Public Key: ${defaultWallet.walletAddress} <a href="https://solscan.io/account/${defaultWallet.walletAddress}" target="_blank">( E )</a>\n` +
      `💸 Balance: 0.0000 SOL ($0.00)\n`;
  }
  const msg =
    `👋 Welcome to ${platformName}\n` +
    `You're now in the command center for trading new launches on Solana.\n\n` +
    walletInfo + '\n' +
    `🔹 Start Feed - Launch a real-time stream of new PumpSwap token listings, based on your Feed Filters.\n` +
    `🔹 Auto Trade - The bot automatically executes trades on tokens that appear in your custom feed, using your preset trade settings.\n` +
    `🔹 Feed Filters - Control which types of launches appear in your feed.\n` +
    `🔹 Trade Settings - Adjust your trading parameters for both manual and auto-trade strategies.\n\n` +
    `👥 Referral Link - https://t.me/${config.get('TELEGRAM_BOT_NAME')}?start=${user.inviteCode} (Tap to copy)\n` +
    `👥 Total Invites - ${user.totalInvites}\n\n` +
    `📖 For advanced guidance and strategies, check out our GitBook.`;
  const keyboard = Markup.inlineKeyboard([
    [
      Markup.button.callback('➕ StartFeed', TelegramKey.Feed),
      Markup.button.callback('👛 Auto Trade', TelegramKey.ImportWallet),
    ],
    [
      Markup.button.callback('🔐 Security Tips', TelegramKey.SecurityTips),
      Markup.button.callback('🏠 Main Menu', TelegramKey.MainMenu),
    ],
    [
      Markup.button.callback('🔐 Security Tips', TelegramKey.SecurityTips),
      Markup.button.callback('🏠 Main Menu', TelegramKey.MainMenu),
    ],
    [
      Markup.button.callback('🔐 Security Tips', TelegramKey.SecurityTips),
      Markup.button.callback('🏠 Main Menu', TelegramKey.MainMenu),
    ],
  ]);
  await ctx.reply(msg, { parse_mode: 'HTML', link_preview_options: { is_disabled: true }, reply_markup: keyboard.reply_markup });
}