import { Injectable, OnModuleInit } from '@nestjs/common';
import { TELEGRAM_BOT_COMMANDS, TelegramKey, TelegramScenes } from 'src/common/constants/telegram';
import { HELP_MESSAGE } from 'src/common/constants/messages';
import { createWalletScene, setCreateWalletSceneServices } from './scenes/create-wallet';
import { termsScene, setTermsSceneServices } from './scenes/terms';
import { editWalletScene, setEditWalletSceneServices } from './scenes/edit-wallet';
import { Telegraf, Markup, Scenes, session } from 'telegraf';
import { UserService } from '../user/user.service';
import { Wallet } from 'src/wallet/entities/wallet.entity';
import { WalletService } from 'src/wallet/wallet.service';
import { PLATFORM_NAME } from 'src/common/constants';
import { ConfigService } from '@nestjs/config';
import { ENV } from 'src/common/config/env';
import { EditWalletSceneState, MyContext } from './type';
import { WalletsCommandHandler } from './commands/wallets.command.handler';
import { SettingsCommandHandler } from './commands/settings.command.handler';
import { WalletUtils } from 'src/utils/wallet';
import { USER_CHECK_INTERVAL } from 'src/common/constants/time.constants';
import { BuyCommandHandler } from './commands/buy.command.handler';


@Injectable()
export class TelegramService implements OnModuleInit {
  private bot: Telegraf<MyContext>;
  constructor(
    private readonly userService: UserService,
    private readonly walletService: WalletService,
    private readonly walletUtils: WalletUtils,
    private readonly config: ConfigService,
    private readonly walletsCommandHandler: WalletsCommandHandler,
    private readonly settingsCommandHandler: SettingsCommandHandler,
    private readonly buyCommandHandler: BuyCommandHandler,
  ) { }


  private userCheckCache = new Map<number, number>();
  private readonly userCheckInterval = USER_CHECK_INTERVAL;


  onModuleInit() {

    const token = this.config.get(ENV.TELEGRAM_BOT_TOKEN);
    if (!token) {
      throw new Error('TELEGRAM_BOT_TOKEN is not set in environment variables');
    }
    this.bot = new Telegraf<MyContext>(token);

    // 注入服务到条款场景
    setTermsSceneServices(this.userService, this.bot);
    // 注入服务到场景
    setCreateWalletSceneServices(this.userService, this.walletService, this.walletUtils);
    // 注入编辑钱包场景服务
    setEditWalletSceneServices(this.userService, this.walletService, this.walletsCommandHandler);
    // 注入购买/卖出场景服务 TODO

    const stage = new Scenes.Stage<MyContext>([createWalletScene, termsScene, editWalletScene]);
    this.bot.use(session());
    this.bot.use(stage.middleware());
    // --- End Scenes ---

    this.setupListeners();
    this.setBotMenu();
    this.bot.launch();
    // console.log('Telegraf bot is running', token);
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
    // this.bot.use(async (ctx, next) => {
    //   await this.checkUserIfNeeded(ctx);
    //   await next();
    // });
    this.bot.use(async (ctx, next) => {
      const tgId = ctx.from?.id;
      if (!tgId) return;
      const user = await this.userService.findByTgId(tgId);
      if (!user || !user.agreedToTerms) {
        // 保存邀请码（如果有）
        if (ctx.message && 'text' in ctx.message && ctx.message.text.startsWith('/start')) {
          const args = ctx.message.text.split(' ').slice(1);
          ctx.session = ctx.session || {};
          ctx.session.inviteCode = args[0] || null;
        }
        await ctx.scene.enter(TelegramScenes.Terms);
        return;
      } else {

      }
      await next();
    });

    // this.bot.start((ctx) => ctx.reply('Welcome to the Telegram Bot!'));
    this.bot.start(async (ctx) => {
      const text = ctx.message.text;
      const args = text.split(' ').slice(1); // ["xxxx"]
      const inviteCode = args[0] || null;
      const tgId = ctx.from?.id;
      if (!tgId) return;
      const user = await this.userService.findByTgId(tgId);
      // 未注册或未同意协议，进入隐私协议场景
      if (!user || !user.agreedToTerms) {
        ctx.session = ctx.session || {};
        ctx.session.inviteCode = inviteCode;
        await ctx.scene.enter(TelegramScenes.Terms);
        return;
      }
      // 已注册且同意协议，正常进入主菜单
      await this.sendMainMenu(ctx);
    });
    this.bot.help((ctx) => ctx.replyWithMarkdownV2(HELP_MESSAGE));

    // Buy 指令
    this.bot.command(TelegramKey.Buy, async (ctx) => {
      await this.sendBuyMessage(ctx, false);
    });

    // 监听 /wallets 指令（新消息）
    this.bot.command(TelegramKey.Wallets, async (ctx) => {
      await this.walletsCommandHandler.handle(ctx);
    });
    // 监听 /settings 指令（新消息）
    this.bot.command(TelegramKey.Settings, async (ctx) => {
      await this.settingsCommandHandler.handle(ctx, false);
    });

    // 监听 wallets action（编辑消息）
    this.bot.action(TelegramKey.Wallets, async (ctx) => {
      const tgId = ctx.from?.id;
      if (!tgId) return;
      await this.walletsCommandHandler.handle(ctx, true);
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

    // 监听编辑钱包动作
    this.bot.action(new RegExp(`^${TelegramKey.EditWallet}:(.+)$`), async (ctx) => {
      const walletId = ctx.match[1];
      await ctx.scene.enter(TelegramScenes.EditWallet, { walletId });
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

  private async sendBuyMessage(ctx: MyContext, edit = false) {

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

  // 主菜单消息生成与发送，带钱包校验
  private async sendMainMenu(ctx: MyContext) {
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


  private async checkUserIfNeeded(ctx: MyContext) {
    const tgId = ctx.from?.id;
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