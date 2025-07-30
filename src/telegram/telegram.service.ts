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
import { MainMenuCommandHandler } from './commands/main-menu.command.handler';
import { AutoTradeCommandHandler } from './commands/auto-trade.command.handler';


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
    private readonly mainMenuCommandHandler: MainMenuCommandHandler,
    private readonly autoTradeCommandHandler: AutoTradeCommandHandler,
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
    setCreateWalletSceneServices(this.userService, this.walletService, this.walletUtils, this.walletsCommandHandler);
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
      
      // 如果用户已经在场景中，不要重复检查
      if (ctx.scene?.current) {
        await next();
        return;
      }
      
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
      await this.mainMenuCommandHandler.handle(ctx);
    });
    this.bot.help((ctx) => ctx.replyWithMarkdownV2(HELP_MESSAGE));

    // Buy 指令
    this.bot.command(TelegramKey.Buy, async (ctx) => {
      await this.buyCommandHandler.handle(ctx);
    });

    // 监听自动交易命令
    this.bot.command(TelegramKey.AutoTrade, async (ctx) => {
      await this.autoTradeCommandHandler.handle(ctx);
    });

    // Sell 指令  TODO
    this.bot.command(TelegramKey.Sell, async (ctx) => {
      await this.buyCommandHandler.handle(ctx);
    });

    // 监听 /wallets 指令（新消息）
    this.bot.command(TelegramKey.Wallets, async (ctx) => {
      await this.walletsCommandHandler.handle(ctx);
    });
    // 监听 /settings 指令（新消息）
    this.bot.command(TelegramKey.Settings, async (ctx) => {
      await this.settingsCommandHandler.handle(ctx);
    });

    // 监听 wallets action（编辑消息）
    this.bot.action(TelegramKey.Wallets, async (ctx) => {
      const tgId = ctx.from?.id;
      if (!tgId) return;
      await this.walletsCommandHandler.handle(ctx);
      await ctx.answerCbQuery();
    });

    this.bot.action(TelegramKey.SecurityTips, async (ctx) => {
      await this.walletsCommandHandler.sendSecurityTips(ctx);
      await ctx.answerCbQuery();
    });
    // 监听创建钱包动作
    this.bot.action(TelegramKey.CreateWallet, async (ctx) => {
      await this.walletsCommandHandler.handleCreateWallet(ctx);
      await ctx.answerCbQuery();
    });

    // 监听导入钱包动作
    this.bot.action(TelegramKey.ImportWallet, async (ctx) => {
      await this.walletsCommandHandler.handleImportWallet(ctx);
      await ctx.answerCbQuery();
    });

    // 监听主菜单动作
    this.bot.action(TelegramKey.MainMenu, async (ctx) => {
      await this.mainMenuCommandHandler.handle(ctx);
      await ctx.answerCbQuery();
    });

    // 监听自动交易动作
    this.bot.action(TelegramKey.AutoTradeAction, async (ctx) => {
      await this.autoTradeCommandHandler.handle(ctx);
      await ctx.answerCbQuery();
    });

    // 监听自动交易配置动作
    this.bot.action(new RegExp(`^${TelegramKey.AutoTradeBuyAmount}:(.+)$`), async (ctx) => {
      const walletId = ctx.match[1];
      await this.autoTradeCommandHandler.handleBuyAmount(ctx, walletId);
      await ctx.answerCbQuery();
    });

    this.bot.action(new RegExp(`^${TelegramKey.AutoTradeSlippage}:(.+)$`), async (ctx) => {
      const walletId = ctx.match[1];
      await this.autoTradeCommandHandler.handleSlippage(ctx, walletId);
      await ctx.answerCbQuery();
    });

    this.bot.action(new RegExp(`^${TelegramKey.AutoTradePriorityFee}:(.+)$`), async (ctx) => {
      const walletId = ctx.match[1];
      await this.autoTradeCommandHandler.handlePriorityFee(ctx, walletId);
      await ctx.answerCbQuery();
    });

    this.bot.action(new RegExp(`^${TelegramKey.AutoTradeTakeProfit}:(.+)$`), async (ctx) => {
      const walletId = ctx.match[1];
      await this.autoTradeCommandHandler.handleTakeProfit(ctx, walletId);
      await ctx.answerCbQuery();
    });

    this.bot.action(new RegExp(`^${TelegramKey.AutoTradeStopLoss}:(.+)$`), async (ctx) => {
      const walletId = ctx.match[1];
      await this.autoTradeCommandHandler.handleStopLoss(ctx, walletId);
      await ctx.answerCbQuery();
    });

    this.bot.action(new RegExp(`^${TelegramKey.AutoTradeAutoSell}:(.+)$`), async (ctx) => {
      const walletId = ctx.match[1];
      await this.autoTradeCommandHandler.handleAutoSell(ctx, walletId);
      await ctx.answerCbQuery();
    });

    this.bot.action(new RegExp(`^${TelegramKey.StartAutoTrade}:(.+)$`), async (ctx) => {
      const walletId = ctx.match[1];
      await this.autoTradeCommandHandler.handleStartAutoTrade(ctx, walletId);
      await ctx.answerCbQuery();
    });

    this.bot.action(new RegExp(`^${TelegramKey.StopAutoTrade}:(.+)$`), async (ctx) => {
      const walletId = ctx.match[1];
      await this.autoTradeCommandHandler.handleStopAutoTrade(ctx, walletId);
      await ctx.answerCbQuery();
    });

    this.bot.action(TelegramKey.AutoTradeHistory, async (ctx) => {
      await this.autoTradeCommandHandler.handleHistory(ctx);
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