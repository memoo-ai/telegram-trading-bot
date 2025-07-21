import { Injectable, OnModuleInit } from '@nestjs/common';
import { TELEGRAM_BOT_COMMANDS, TelegramKey } from 'src/common/constants/telegram';
import { Telegraf, Markup, Scenes, session } from 'telegraf';

function escapeMarkdownV2(text: string): string {
  return text.replace(/([_\*\[\]()~`>#+\-=|{}.!\\])/g, '\\$1');
}

type MyContext = Scenes.SceneContext;

@Injectable()
export class TelegramService implements OnModuleInit {
  private bot: Telegraf<MyContext>;
  

  onModuleInit() {
    
    const token = process.env.TELEGRAM_BOT_TOKEN;
    if (!token) {
      throw new Error('TELEGRAM_BOT_TOKEN is not set in environment variables');
    }
    this.bot = new Telegraf<MyContext>(token);

    // --- 集成 Scenes ---
    const createWalletScene = new Scenes.BaseScene<MyContext>(TelegramKey.CreateWallet);
    createWalletScene.enter((ctx) => ctx.reply('Please enter a label for your new wallet:'));
    createWalletScene.on('text', async (ctx) => {
      const walletName = ctx.message.text.trim();
      await ctx.reply(`✅ Wallet name received: ${walletName}`);
      await ctx.scene.leave();
    });
    const stage = new Scenes.Stage<MyContext>([createWalletScene]);
    this.bot.use(session());
    this.bot.use(stage.middleware());
    // --- End Scenes ---

    this.setupListeners();
    this.setBotMenu();
    this.bot.launch();
    console.log('Telegraf bot is running', token);
  }

  // 通用检查钱包方法
  private async checkWalletOrTip(ctx: MyContext, next: () => Promise<void>) {
    const userId = ctx.from?.id;
    if (!userId) return;
    const walletExists = await this.hasWallet(userId);
    if (!walletExists) {
      await ctx.reply('❌ No default wallet set. Use /wallets to set up a wallet first.');
      return;
    }
    await next();
  }

  private setupListeners() {
    this.bot.start((ctx) => ctx.reply('Welcome to the Telegram Bot!'));
    this.bot.help((ctx) => ctx.replyWithMarkdownV2(
      escapeMarkdownV2(`
🤖 Bot Commands

Trading Commands
/buy - Buy a token with SOL
/sell - Sell a token for SOL
/stats <pool_address> - View detailed pool statistics

Wallet Management
/wallets - Manage your wallets
• Create new wallets
• Import existing wallets
• Set default wallet
• View wallet balances
/withdraw - Withdraw SOL from default wallet

Portfolio Management
/positions - View your token holdings
• Token balances and USD values
• One-click selling options
• Token details and links
/unhide - Unhide tokens you previously hid

Automated Trading
/autotrade - Configure auto trading
• Enable/disable automation
• Set buy/sell parameters
• Configure risk management
• Set priority fees

Configuration
/filters - Configure trading filters
• Set volume/marketcap requirements
• Configure holder requirements
• Set pool duration limits
/settings - Configure trade settings
• Set buy/sell amounts
• Configure slippage tolerance
• Set priority fees
• Enable/disable protection

/start - Quick actions menu
/help - Show this command list

Security Tips
• Never share your private keys
• Store backup keys securely
• Use small amounts for testing
• Monitor your transactions regularly
`)
    ));

    // 监听 /wallets 指令（新消息）
    this.bot.command(TelegramKey.Wallets, async (ctx) => {
      const userId = ctx.from?.id;
      if (!userId) return;
      const walletExists = await this.hasWallet(userId);
      if (!walletExists) {
        await this.sendNoWalletMessage(ctx, false);
      } else {
        // TODO
        await ctx.reply('You already have a wallet!');
      }
    });
    // 监听 /settings 指令（新消息）
    this.bot.command(TelegramKey.Settings, async (ctx) => {
      await this.sendSettingsMessage(ctx, false);
    });

    // 监听 wallets action（编辑消息）
    this.bot.action(TelegramKey.Wallets, async (ctx) => {
      const userId = ctx.from?.id;
      if (!userId) return;
      const walletExists = await this.hasWallet(userId);
      if (!walletExists) {
        await this.sendNoWalletMessage(ctx, true);
      } else {
        await ctx.editMessageText('You already have a wallet!');
      }
      await ctx.answerCbQuery();
    });

    this.bot.action(TelegramKey.SecurityTips, async (ctx) => {
      await this.sendSecurityTips(ctx, true);
      await ctx.answerCbQuery();
    });
    this.bot.action(TelegramKey.ImportWallet, async (ctx) => {
      await this.sendImportWalletMessage(ctx, true);
      await ctx.answerCbQuery();
    });
    this.bot.action(TelegramKey.CreateWallet, async (ctx) => {
      await ctx.scene.enter(TelegramKey.CreateWallet);
      await ctx.answerCbQuery();
    });

    // 示例：需要钱包的指令
    this.bot.command(TelegramKey.Positions, async (ctx) => {
      await this.checkWalletOrTip(ctx, async () => {
        await ctx.reply('Here are your positions...');
      });
    });
    // 你可以用同样方式包裹其他需要钱包的指令
  }


  private async setBotMenu() {
    await this.bot.telegram.setMyCommands(TELEGRAM_BOT_COMMANDS);
  }


  // 检查用户是否有钱包（实际业务应查询数据库或缓存）
  private async hasWallet(userId: number): Promise<boolean> {
    // TODO: 替换为真实业务逻辑
    return false;
  }

  // 封装无钱包时的提示和按钮
  private async sendNoWalletMessage(ctx: MyContext, edit = false) {
    const text = `💼 No wallets found. Use the buttons below to create or import a wallet.`;
    const keyboard = Markup.inlineKeyboard([
      [
        Markup.button.callback('➕ Create Wallet', TelegramKey.CreateWallet),
        Markup.button.callback('👛 Import Wallet', TelegramKey.ImportWallet),
      ],
      [
        Markup.button.callback('🔐 Security Tips', TelegramKey.SecurityTips),
        Markup.button.callback('🏠 Main Menu', TelegramKey.MainMenu),
      ],
    ]);
    if (edit && 'editMessageText' in ctx) {
      await ctx.editMessageText(text, keyboard);
    } else {
      await ctx.reply(text, keyboard);
    }
  }

  // 获取当前时间（如 22:09）
  private getCurrentTime(): string {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
  // SecurityTips
  private async sendSecurityTips(ctx: MyContext, edit = false) {
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
    if (edit && 'editMessageText' in ctx) {
      await ctx.editMessageText(text, keyboard);
    } else {
      await ctx.reply(text, keyboard);
    }
  }
   // Import wallet
  private async sendImportWalletMessage(ctx: MyContext, edit = false) {
    const text =
      `📥 Import Existing Wallet\n\n` +
      `Step 1 of 2: Name Your Wallet\n` +
      `Please enter a name for this wallet\n` +
      `Examples: "Trading Wallet", "Main Wallet", "DeFi Wallet"\n\n` +
      `✏️ Send your wallet name in the next message`;
    const keyboard = Markup.inlineKeyboard([
      [Markup.button.callback('<< Back', TelegramKey.Wallets)],
    ]);
    if (edit && 'editMessageText' in ctx) {
      await ctx.editMessageText(text, keyboard);
    } else {
      await ctx.reply(text, keyboard);
    }
  }

  // Create wallet message
  private async sendCreateWalletMessage(ctx: MyContext, edit = false) {
    const text =
      `✨ Create a New Wallet\n\n` +
      `Please enter a label for your new wallet:\n` +
      `Example: "My Trading Wallet"\n`;
    
    const keyboard = Markup.inlineKeyboard([
      [Markup.button.callback('<< Back', TelegramKey.Wallets)],
    ]);
    if (edit && 'editMessageText' in ctx) {
      await ctx.editMessageText(text, keyboard);
    } else {
      await ctx.reply(text, keyboard);
    }
  }


  // Settings Message
  private async sendSettingsMessage(ctx: MyContext, edit = false) {
    const text =
      `⚙️ Settings Configuration\n\n` +
      `Choose which settings to configure:\n\n` +
      `• Manual Trade: Configure buy/sell amounts, slippage, and priority fees\n` +
      `• Auto Trade: Configure automated trading parameters`;
    const keyboard = Markup.inlineKeyboard([
      [
        Markup.button.callback('Manual Trade', TelegramKey.ManualTrade),
        Markup.button.callback('Auto Trade', TelegramKey.AutoTradeAction),
      ],
      [
        Markup.button.callback('Main menu', TelegramKey.MainMenu),
      ],
    ]);

    if (edit && 'editMessageText' in ctx) {
      await ctx.editMessageText(text, keyboard);
    } else {
      await ctx.reply(text, keyboard);
    }
  }

}