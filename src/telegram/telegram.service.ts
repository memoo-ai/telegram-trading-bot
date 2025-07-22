import { Injectable, OnModuleInit } from '@nestjs/common';
import { TELEGRAM_BOT_COMMANDS, TelegramKey, USER_CHECK_INTERVAL, WALLET_PRIVATE_KEY_DELETE_DELAY } from 'src/common/constants/telegram';
import { Telegraf, Markup, Scenes, session } from 'telegraf';
import { UserService } from '../user/user.service';
import { Wallet } from 'src/wallet/entities/wallet.entity';
import { WalletService } from 'src/wallet/wallet.service';
import { createSolanaWallet } from 'src/utils/wallet';
import { platformName } from 'src/common/constants';

function escapeMarkdownV2(text: string): string {
  return text.replace(/([_\*\[\]()~`>#+\-=|{}.!\\])/g, '\\$1');
}

type MyContext = Scenes.SceneContext;

@Injectable()
export class TelegramService implements OnModuleInit {
  private bot: Telegraf<MyContext>;
  constructor(
    private readonly userService: UserService,
    private readonly walletService: WalletService,
  ) {}
  

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
      const tgId = ctx.from.id;
      // await ctx.reply(`✅ Wallet name received: ${walletName}`);
      await ctx.scene.leave();
      const { publicKey, secretKey } = createSolanaWallet();
      const user = await this.userService.findByTgId(tgId);
      const existingWallets = await this.walletService.findWalletsByUserId(user.id);
      const isDefaultWallet = existingWallets.length === 0;
      await this.walletService.createWallet(
        user,
        walletName,
        isDefaultWallet,
        publicKey,
        secretKey
      );
      // 发送私钥安全提示，并5分钟后删除
      const sent = await ctx.reply(
        `🔐 IMPORTANT: SAVE THIS PRIVATE KEY NOW\n\n` +
        `This is the only time you will see this private key. The bot cannot recover or resend it.\n\n` +
        `Private Key: ${secretKey}\n\n` +
        `⚠️ Security Warnings:\n` +
        `• Save this key in a secure location\n` +
        `• Never share it with anyone\n` +
        `• The bot will delete this message in 5 minutes\n` +
        `• Delete this message after saving the key`
      );
      // 删除用户输入的钱包名消息和私钥提示消息
      setTimeout(async () => {
        try {
          await ctx.deleteMessage(ctx.message.message_id); // 删除用户输入的钱包名
          // await ctx.deleteMessage(sent.message_id); // 删除私钥提示
        } catch (e) {}
      }, 500);
      // 删除用户输入的钱包名消息和私钥提示消息
      setTimeout(async () => {
        try {
          await ctx.deleteMessage(sent.message_id); // 删除私钥提示
        } catch (e) {}
      }, WALLET_PRIVATE_KEY_DELETE_DELAY);
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
    const walletExists = (await this.getUserWallets(userId)).length > 0;
    if (!walletExists) {
      await ctx.reply('❌ No default wallet set. Use /wallets to set up a wallet first.');
      return;
    }
    await next();
  }

  private setupListeners() {
    // 统一加一层中间件
    this.bot.use(async (ctx, next) => {
      await this.checkUserIfNeeded(ctx);
      await next();
    });

    // this.bot.start((ctx) => ctx.reply('Welcome to the Telegram Bot!'));
    this.bot.start(async (ctx) => {

      const text = ctx.message.text;
  const args = text.split(' ').slice(1); // ["xxxx"]
  const startParam = args[0] || null;
  // 现在 startParam 就是启动参数
  ctx.reply(`启动参数: ${startParam}`);
  const tgId = ctx.from?.id;
  if (!tgId) return;
  const user = await this.userService.findByTgId(tgId);
  let walletInfo = 'No wallet found. Use /wallets to create one.';
  if (user) {
    const defaultWallet = await this.walletService.findDefaultWalletByUserId(user.id);
    if (defaultWallet) {
      walletInfo =
        `💰 Wallet: ${defaultWallet.walletName}\n` +
        `🔑 Public Key: ${defaultWallet.walletAddress} <a href="https://solscan.io/account/${defaultWallet.walletAddress}" target="_blank">( E )</a>\n` +
        `💸 Balance: 0.0000 SOL ($0.00)\n`;
    }
  }
  const msg =
    `👋 Welcome to ${platformName}\n` +
    `You're now in the command center for trading new launches on Solana.\n\n` +
    walletInfo + '\n' +
    `🔹 Start Feed - Launch a real-time stream of new PumpSwap token listings, based on your Feed Filters.\n` +
    `🔹 Auto Trade - The bot automatically executes trades on tokens that appear in your custom feed, using your preset trade settings.\n` +
    `🔹 Feed Filters - Control which types of launches appear in your feed.\n` +
    `🔹 Trade Settings - Adjust your trading parameters for both manual and auto-trade strategies.\n\n` +
    `👥 Referral Link - https://t.me/Valkyr_Bot?start=r-8KEXC76AFG (Tap to copy)\n` +
    `👥 Total Invites - 0\n\n` +
    `📖 For advanced guidance and strategies, check out our GitBook.`;

  await ctx.reply(msg, { parse_mode: 'HTML', link_preview_options: { is_disabled: true } });
});
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
/autoTrade - Configure auto trading
• Enable/disable automation
• Set buy/sell parameters
• Configure risk management
• Set priority fees

Configuration
/filters - Configure trading filters
• Set volume/marketCap requirements
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
      const wallets = await this.getUserWallets(userId);
      let msg = '';
      if (wallets.length === 0) {
        msg = '💼 You have no wallets yet.';
      } else {
        msg = '💼 Your Wallets\n\n';
        for (const w of wallets) {
          const isDefault = w.isDefaultWallet;
          msg += `${isDefault ? '✅' : '◽️'} ${w.walletName}\n`;
          msg += `Public Key: ${w.walletAddress} <a href="https://solscan.io/account/${w.walletAddress}" target="_blank">( E )</a> \n`;
          msg += `Balance: 0.0000 SOL ($0.00)\n\n`;
        }
        msg += '✅ - Default wallet\n◽️ - Additional wallet';
      }
      // 统一按钮
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
      await ctx.reply(msg, { parse_mode: 'HTML', link_preview_options: { is_disabled: true }, reply_markup: keyboard.reply_markup });
    });
    // 监听 /settings 指令（新消息）
    this.bot.command(TelegramKey.Settings, async (ctx) => {
      await this.sendSettingsMessage(ctx, false);
    });

    // 监听 wallets action（编辑消息）
    this.bot.action(TelegramKey.Wallets, async (ctx) => {
      const tgId = ctx.from?.id;
      if (!tgId) return;
      const walletExists = (await this.getUserWallets(tgId)).length > 0;
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


  private async getUserWallets(tgId: number): Promise<Wallet[]> {
    const user = await this.userService.findByTgId(tgId);
    if (!user) return [];
    return this.walletService.findWalletsByUserId(user.id);
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

  private userCheckCache = new Map<number, number>();
  private readonly userCheckInterval = USER_CHECK_INTERVAL;

  private async checkUserIfNeeded(ctx: MyContext) {
    const tgId = ctx.from?.id;
    console.log("checkUserIfNeeded", tgId)
    if (!tgId) return;
    const now = Date.now();
    const lastCheck = this.userCheckCache.get(tgId) || 0;
    if (now - lastCheck > this.userCheckInterval) {
      // 只要超过间隔就校验
      await this.userService.checkOrCreateAndUpdateUser({
        tgId,
        username: ctx.from.username,
        firstName: ctx.from.first_name,
        lastName: ctx.from.last_name,
        isBot: ctx.from.is_bot,
      });
      this.userCheckCache.set(tgId, now);
    }
  }

}