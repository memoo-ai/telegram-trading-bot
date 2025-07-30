import { Injectable } from '@nestjs/common';
import { Markup } from 'telegraf';
import { TelegramKey } from 'src/common/constants/telegram';
import { MyContext } from '../type';
import { BaseCommandHandler } from './base.command.handler';
import { UserService } from 'src/user/user.service';
import { WalletService } from 'src/wallet/wallet.service';

@Injectable()
export class AutoTradeCommandHandler extends BaseCommandHandler {
  constructor(
    private readonly userService: UserService,
    private readonly walletService: WalletService,
  ) {
    super();
  }

  async handle(ctx: MyContext): Promise<void> {
    const tgId = ctx.from?.id;
    if (!tgId) return;

    const user = await this.userService.findByTgId(tgId);
    if (!user) {
      await ctx.reply('❌ User not found. Please start the bot first.');
      return;
    }

    const wallets = await this.walletService.findWalletsByUserId(user.id);
    if (wallets.length === 0) {
      await ctx.reply('❌ No wallet found. Use /wallets to create one first.');
      return;
    }

    const defaultWallet = await this.walletService.findDefaultWalletByUserId(user.id);
    if (!defaultWallet) {
      await ctx.reply('❌ No default wallet set. Please set a default wallet first.');
      return;
    }

    const text = 
      `🤖 Auto Trade Configuration

💰 Default Wallet: ${defaultWallet.walletName}
🔑 Address: ${defaultWallet.walletAddress}
💸 Balance: 0.0000 SOL ($0.00)

📊 Current Settings:
• Buy Amount: 0.1 SOL
• Max Slippage: 5%
• Priority Fee: 0.000005 SOL
• Auto Sell: Enabled
• Take Profit: 20%
• Stop Loss: 10%

🎯 Auto Trade Status: ${this.getAutoTradeStatus()}

Choose an option to configure:`;

    const keyboard = Markup.inlineKeyboard([
      [
        Markup.button.callback('💰 Buy Amount', `${TelegramKey.AutoTradeBuyAmount}:${defaultWallet.id}`),
        Markup.button.callback('📊 Slippage', `${TelegramKey.AutoTradeSlippage}:${defaultWallet.id}`),
      ],
      [
        Markup.button.callback('⚡ Priority Fee', `${TelegramKey.AutoTradePriorityFee}:${defaultWallet.id}`),
        Markup.button.callback('🎯 Take Profit', `${TelegramKey.AutoTradeTakeProfit}:${defaultWallet.id}`),
      ],
      [
        Markup.button.callback('🛑 Stop Loss', `${TelegramKey.AutoTradeStopLoss}:${defaultWallet.id}`),
        Markup.button.callback('🔄 Auto Sell', `${TelegramKey.AutoTradeAutoSell}:${defaultWallet.id}`),
      ],
      [
        Markup.button.callback('🚀 Start Auto Trade', `${TelegramKey.StartAutoTrade}:${defaultWallet.id}`),
        Markup.button.callback('⏹️ Stop Auto Trade', `${TelegramKey.StopAutoTrade}:${defaultWallet.id}`),
      ],
      [
        Markup.button.callback('📈 View History', TelegramKey.AutoTradeHistory),
        Markup.button.callback('🏠 Main Menu', TelegramKey.MainMenu),
      ],
    ]);

    await this.sendOrEditMessage(ctx, text, keyboard);
  }

  private getAutoTradeStatus(): string {
    // 这里可以根据实际状态返回
    return '🟢 Active';
  }

  async handleBuyAmount(ctx: MyContext, walletId: string): Promise<void> {
    const text = 
      `💰 Configure Buy Amount

Current: 0.1 SOL

Enter the amount of SOL you want to spend on each auto trade:

Examples:
• 0.05 - Small trades
• 0.1 - Medium trades  
• 0.5 - Large trades
• 1.0 - High risk trades

⚠️ Warning: Higher amounts increase risk`;

    const keyboard = Markup.inlineKeyboard([
      [Markup.button.callback('🔙 Back to Auto Trade', TelegramKey.AutoTrade)],
      [Markup.button.callback('🏠 Main Menu', TelegramKey.MainMenu)],
    ]);

    await this.sendOrEditMessage(ctx, text, keyboard);
  }

  async handleSlippage(ctx: MyContext, walletId: string): Promise<void> {
    const text = 
      `📊 Configure Max Slippage

Current: 5%

Slippage is the maximum price change you'll accept:
• 1-3%: Conservative (lower success rate)
• 3-5%: Balanced (recommended)
• 5-10%: Aggressive (higher success rate)
• 10%+: High risk

Enter percentage (1-20):`;

    const keyboard = Markup.inlineKeyboard([
      [Markup.button.callback('🔙 Back to Auto Trade', TelegramKey.AutoTrade)],
      [Markup.button.callback('🏠 Main Menu', TelegramKey.MainMenu)],
    ]);

    await this.sendOrEditMessage(ctx, text, keyboard);
  }

  async handlePriorityFee(ctx: MyContext, walletId: string): Promise<void> {
    const text = 
      `⚡ Configure Priority Fee

Current: 0.000005 SOL

Priority fee helps your transaction get processed faster:
• 0.000001: Low priority
• 0.000005: Medium priority (recommended)
• 0.00001: High priority
• 0.00005: Very high priority

Enter fee in SOL:`;

    const keyboard = Markup.inlineKeyboard([
      [Markup.button.callback('🔙 Back to Auto Trade', TelegramKey.AutoTrade)],
      [Markup.button.callback('🏠 Main Menu', TelegramKey.MainMenu)],
    ]);

    await this.sendOrEditMessage(ctx, text, keyboard);
  }

  async handleTakeProfit(ctx: MyContext, walletId: string): Promise<void> {
    const text = 
      `🎯 Configure Take Profit

Current: 20%

Take profit percentage for auto selling:
• 10%: Conservative
• 20%: Balanced (recommended)
• 30%: Aggressive
• 50%: High risk

Enter percentage (5-100):`;

    const keyboard = Markup.inlineKeyboard([
      [Markup.button.callback('🔙 Back to Auto Trade', TelegramKey.AutoTrade)],
      [Markup.button.callback('🏠 Main Menu', TelegramKey.MainMenu)],
    ]);

    await this.sendOrEditMessage(ctx, text, keyboard);
  }

  async handleStopLoss(ctx: MyContext, walletId: string): Promise<void> {
    const text = 
      `🛑 Configure Stop Loss

Current: 10%

Stop loss percentage to limit losses:
• 5%: Conservative
• 10%: Balanced (recommended)
• 15%: Aggressive
• 20%: High risk

Enter percentage (1-50):`;

    const keyboard = Markup.inlineKeyboard([
      [Markup.button.callback('🔙 Back to Auto Trade', TelegramKey.AutoTrade)],
      [Markup.button.callback('🏠 Main Menu', TelegramKey.MainMenu)],
    ]);

    await this.sendOrEditMessage(ctx, text, keyboard);
  }

  async handleAutoSell(ctx: MyContext, walletId: string): Promise<void> {
    const text = 
      `🔄 Configure Auto Sell

Current: Enabled

Auto sell options:
• Enabled: Automatically sell based on take profit/stop loss
• Disabled: Manual selling only
• Partial: Sell 50% at take profit, keep rest

Choose an option:`;

    const keyboard = Markup.inlineKeyboard([
      [
        Markup.button.callback('✅ Enable', `${TelegramKey.EnableAutoSell}:${walletId}`),
        Markup.button.callback('❌ Disable', `${TelegramKey.DisableAutoSell}:${walletId}`),
      ],
      [
        Markup.button.callback('📊 Partial', `${TelegramKey.PartialAutoSell}:${walletId}`),
      ],
      [
        Markup.button.callback('🔙 Back to Auto Trade', TelegramKey.AutoTrade)],
      [Markup.button.callback('🏠 Main Menu', TelegramKey.MainMenu)],
    ]);

    await this.sendOrEditMessage(ctx, text, keyboard);
  }

  async handleStartAutoTrade(ctx: MyContext, walletId: string): Promise<void> {
    const text = 
      `🚀 Starting Auto Trade...

✅ Auto trade is now active!
🤖 Bot will automatically:
• Monitor new token launches
• Execute trades based on your settings
• Apply take profit/stop loss rules
• Send notifications for all actions

📊 You can monitor progress in the history section.

⚠️ Remember: Auto trading involves risk. Monitor regularly!`;

    const keyboard = Markup.inlineKeyboard([
      [
        Markup.button.callback('📈 View History', TelegramKey.AutoTradeHistory),
        Markup.button.callback('⏹️ Stop Auto Trade', `${TelegramKey.StopAutoTrade}:${walletId}`),
      ],
      [
        Markup.button.callback('🔙 Back to Auto Trade', TelegramKey.AutoTrade)],
      [Markup.button.callback('🏠 Main Menu', TelegramKey.MainMenu)],
    ]);

    await this.sendOrEditMessage(ctx, text, keyboard);
  }

  async handleStopAutoTrade(ctx: MyContext, walletId: string): Promise<void> {
    const text = 
      `⏹️ Stopping Auto Trade...

✅ Auto trade has been stopped!
🤖 Bot will no longer:
• Execute automatic trades
• Monitor new launches
• Apply auto sell rules

📊 Your trading history is preserved.

🔙 You can restart auto trade anytime.`;

    const keyboard = Markup.inlineKeyboard([
      [
        Markup.button.callback('🚀 Start Auto Trade', `${TelegramKey.StartAutoTrade}:${walletId}`),
        Markup.button.callback('📈 View History', TelegramKey.AutoTradeHistory),
      ],
      [
        Markup.button.callback('🔙 Back to Auto Trade', TelegramKey.AutoTrade)],
      [Markup.button.callback('🏠 Main Menu', TelegramKey.MainMenu)],
    ]);

    await this.sendOrEditMessage(ctx, text, keyboard);
  }

  async handleHistory(ctx: MyContext): Promise<void> {
    const text = 
      `📈 Auto Trade History

Recent trades:
• 🟢 Bought TOKEN1 +15% profit
• 🔴 Bought TOKEN2 -8% loss
• 🟢 Bought TOKEN3 +25% profit
• ⚪ Bought TOKEN4 0% (pending)

📊 Statistics:
• Total Trades: 15
• Winning Trades: 10 (67%)
• Total Profit: +2.5 SOL
• Average Profit: +0.17 SOL per trade

🕐 Last 24 hours: +0.8 SOL`;

    const keyboard = Markup.inlineKeyboard([
      [
        Markup.button.callback('📊 Detailed Stats', TelegramKey.AutoTradeStats),
        Markup.button.callback('📋 Export Data', TelegramKey.ExportAutoTradeData),
      ],
      [
        Markup.button.callback('🔙 Back to Auto Trade', TelegramKey.AutoTrade)],
      [Markup.button.callback('🏠 Main Menu', TelegramKey.MainMenu)],
    ]);

    await this.sendOrEditMessage(ctx, text, keyboard);
  }
}
