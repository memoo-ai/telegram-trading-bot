import { Scenes, Markup } from 'telegraf';
import { TelegramScenes } from 'src/common/constants/telegram';
import { UserService } from 'src/user/user.service';
import { WalletService } from 'src/wallet/wallet.service';
import { WalletUtils } from 'src/utils/wallet';
import { MyContext } from '../type';
import { WALLET_PRIVATE_KEY_DELETE_DELAY } from 'src/common/constants/time.constants';

// 创建场景
export const createWalletScene = new Scenes.BaseScene<MyContext>(TelegramScenes.CreateWallet);

// 注入服务
let userService: UserService;
let walletService: WalletService;
let walletUtils: WalletUtils;

export function setCreateWalletSceneServices(
  _userService: UserService,
  _walletService: WalletService,
  _walletUtils: WalletUtils
) {
  userService = _userService;
  walletService = _walletService;
  walletUtils = _walletUtils;
}

// 进入场景
createWalletScene.enter((ctx) => ctx.reply('Please enter a label for your new wallet:'));

// 处理文本输入
createWalletScene.on('text', async (ctx) => {
  const walletName = ctx.message.text.trim();
  const tgId = ctx.from.id;

  // 过滤指令消息
  if (walletName.startsWith('/')) {
    // await ctx.reply('❌ Wallet name cannot start with "/". Please enter a valid wallet name.');
    await ctx.scene.leave();
    return;
  }

  // 检查钱包名称是否为空
  if (!walletName) {
    await ctx.reply('❌ Wallet name cannot be empty. Please enter a valid wallet name.');
    return;
  }

  const user = await userService.findByTgId(tgId);
  const existingWallets = await walletService.findWalletsByUserId(user.id);

  // 检查是否存在重复的钱包名称
  const isDuplicate = existingWallets.some(wallet => wallet.walletName === walletName);
  if (isDuplicate) {
    await ctx.reply('❌ A wallet with this name already exists. Please choose a different name.');
    return;
  }

  await ctx.scene.leave();
  const { publicKey, secretKey } = walletUtils.createSolanaWallet();
  const isDefaultWallet = existingWallets.length === 0;
  await walletService.createWallet(
    user,
    { walletName, isDefaultWallet, walletAddress: publicKey, walletPrivateKey: secretKey }
  );

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
});