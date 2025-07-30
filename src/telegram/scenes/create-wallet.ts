import { Scenes, Markup } from 'telegraf';
import { TelegramScenes, TelegramKey } from 'src/common/constants/telegram';
import { UserService } from 'src/user/user.service';
import { WalletService } from 'src/wallet/wallet.service';
import { WalletUtils } from 'src/utils/wallet';
import { MyContext } from '../type';
import { WALLET_PRIVATE_KEY_DELETE_DELAY } from 'src/common/constants/time.constants';
import { User } from 'src/user/entities/user.entity';
import { Wallet } from 'src/wallet/entities/wallet.entity';
import { MessageManager } from '../utils/message-manager';
import { WalletsCommandHandler } from '../commands/wallets.command.handler';

// 创建场景
export const createWalletScene = new Scenes.BaseScene<MyContext>(TelegramScenes.CreateWallet);

// 注入服务
let userService: UserService;
let walletService: WalletService;
let walletUtils: WalletUtils;
let walletsCommandHandler: WalletsCommandHandler;

export function setCreateWalletSceneServices(
  _userService: UserService,
  _walletService: WalletService,
  _walletUtils: WalletUtils,
  _walletsCommandHandler: WalletsCommandHandler
) {
  userService = _userService;
  walletService = _walletService;
  walletUtils = _walletUtils;
  walletsCommandHandler = _walletsCommandHandler;
}

// 进入场景
createWalletScene.enter(async (ctx) => {
  const text = `✨ Create a New Wallet\n\nPlease enter a label for your new wallet:\nExample: "My Trading Wallet"`;
  const keyboard = Markup.inlineKeyboard([
    [Markup.button.callback('<< Back to Wallets', TelegramKey.Wallets)],
  ]);
  
  await MessageManager.sendOrEditMessage(ctx, text, keyboard);
});

// 处理 Back to Wallets 按钮
createWalletScene.action(TelegramKey.Wallets, async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.scene.leave();
  // 返回到钱包列表
  await walletsCommandHandler.handle(ctx);
});

// 处理文本输入
createWalletScene.on('text', async (ctx) => {
  const walletName = ctx.message.text.trim();
  const tgId = ctx.from.id;

  // 过滤指令消息
  if (walletName.startsWith('/')) {
    await ctx.scene.leave();
    return;
  }

  // 检查钱包名称是否为空
  if (!walletName) {
    await ctx.reply('❌ Wallet name cannot be empty. Please enter a valid wallet name.');
    return;
  }

  let user: User | null = null;
  let existingWallets: Wallet[] = [];
  let isDuplicate = false;
  
  try {
    user = await userService.findByTgId(tgId);
  } catch (e) {
    await ctx.reply('❌ User not found. Please start the bot first.');
    return;
  }

  try {
    existingWallets = await walletService.findWalletsByUserId(user.id);
    isDuplicate = existingWallets.some(wallet => wallet.walletName === walletName);
  } catch (e) {
    await ctx.reply('❌ Failed to check existing wallets. Please try again.');
    return;
  }

  // 检查是否存在重复的钱包名称
  if (isDuplicate) {
    await ctx.reply('❌ A wallet with this name already exists. Please choose a different name.');
    return;
  }

  // 创建钱包
  const { publicKey, secretKey } = walletUtils.createSolanaWallet();
  const isDefaultWallet = existingWallets.length === 0;
  
  try {
    await walletService.createWallet(
      user,
      { walletName, isDefaultWallet, walletAddress: publicKey, walletPrivateKey: secretKey }
    );
  } catch (e) {
    await ctx.reply('❌ Failed to create wallet. Please try again.');
    return;
  }

  // 发送私钥安全提示
  const sent = await ctx.reply(
    `🔐 IMPORTANT: SAVE THIS PRIVATE KEY NOW

` +
    `This is the only time you will see this private key. The bot cannot recover or resend it.

` +
    `Private Key: ${secretKey}

` +
    `⚠️ Security Warnings:
` +
    `• Save this key in a secure location
` +
    `• Never share it with anyone
` +
    `• The bot will delete this message in ${WALLET_PRIVATE_KEY_DELETE_DELAY / (60 * 1000)} minutes
` +
    `• Delete this message after saving the key`
  );

  // 删除用户输入的钱包名消息
  setTimeout(async () => {
    try {
      await ctx.deleteMessage(ctx.message.message_id);
    } catch (e) {}
  }, 500);

  // 删除私钥提示消息
  setTimeout(async () => {
    try {
      await ctx.deleteMessage(sent.message_id);
    } catch (e) {}
  }, WALLET_PRIVATE_KEY_DELETE_DELAY);

  // 成功创建钱包后离开场景
  await ctx.scene.leave();
});