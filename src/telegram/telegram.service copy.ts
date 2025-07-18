import { Injectable, OnModuleInit } from '@nestjs/common';
import { Telegraf } from 'telegraf';

@Injectable()
export class TelegramService implements OnModuleInit {
  private bot: Telegraf;

  onModuleInit() {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    if (!token) {
      throw new Error('TELEGRAM_BOT_TOKEN is not set in environment variables');
    }
    this.bot = new Telegraf(token);
    this.setupListeners();
    this.setBotMenu();
    this.bot.launch();
    console.log('Telegraf bot is running', token);
  }

  private setupListeners() {
    this.bot.start((ctx) => ctx.reply('Welcome to the Telegram Bot!'));
    this.bot.help((ctx) => ctx.replyWithMarkdownV2(
`🤖 *Bot Commands*

*Trading Commands*
/buy \- Buy a token with SOL
/sell \- Sell a token for SOL
/stats <pool\_address> \- View detailed pool statistics

*Wallet Management*
/wallets \- Manage your wallets
• Create new wallets
• Import existing wallets
• Set default wallet
• View wallet balances
/withdraw \- Withdraw SOL from your default wallet

*Portfolio Management*
/positions \- View your token holdings
• Token balances and USD values
• One\-click selling options
• Token details and links
/unhide \- Unhide tokens you previously hid

*Automated Trading*
/autotrade \- Configure auto trading
• Enable/disable automation
• Set buy/sell parameters
• Configure risk management
• Set priority fees

*Configuration*
/filters \- Configure trading filters
• Set volume/marketcap requirements
• Configure holder requirements
• Set pool duration limits
/settings \- Configure trade settings
• Set buy/sell amounts
• Configure slippage tolerance
• Set priority fees
• Enable/disable protection

/start \- Quick actions menu
/help \- Show this command list

*Security Tips*
• Never share your private keys
• Store backup keys securely
• Use small amounts for testing
• Monitor your transactions regularly`
    ));
    // You can add more command handlers here
  }

  private async setBotMenu() {
    await this.bot.telegram.setMyCommands([
      { command: 'start', description: 'Main Menu for quick actions' },
      { command: 'feed', description: 'Manage your feed' },
      { command: 'autotrade', description: 'Configure auto trading' },
      { command: 'wallets', description: 'Manage wallets (create, import, withdraw)' },
      { command: 'positions', description: 'View token positions' },
      { command: 'buy', description: 'Buy a token' },
      { command: 'sell', description: 'Sell a token' },
      { command: 'withdraw', description: 'Withdraw SOL from default wallet' },
      { command: 'filters', description: 'Configure trading filters' },
      { command: 'settings', description: 'Configure manual and auto trade settings' },
      { command: 'help', description: 'Show available commands and usage' },
      // You can continue to add your custom commands here
      // { command: 'yourcmd', description: 'Your custom command description' },
    ]);
  }
} 