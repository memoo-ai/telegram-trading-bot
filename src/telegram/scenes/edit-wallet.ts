import { Scenes, Markup } from 'telegraf';
import { TelegramScenes, TelegramKey } from 'src/common/constants/telegram';
import { UserService } from 'src/user/user.service';
import { WalletService } from 'src/wallet/wallet.service';
import { MyContext } from '../type';
import { Wallet } from 'src/wallet/entities/wallet.entity';
import { formatWalletLink } from 'src/utils/wallet';
import { BackText } from 'src/common/constants';
import { Emoji } from 'src/common/constants/emoji';
import { WalletsCommandHandler } from '../commands/wallets.command.handler'; // 假设你已导出 walletsCommandHandler

// 创建场景
export const editWalletScene = new Scenes.BaseScene<MyContext>(TelegramScenes.EditWallet);

// 注入服务
let userService: UserService;
let walletService: WalletService;
let walletsCommandHandler: WalletsCommandHandler;

export function setEditWalletSceneServices(
  _userService: UserService,
  _walletService: WalletService,
  _walletsCommandHandler: WalletsCommandHandler
) {
  userService = _userService;
  walletService = _walletService;
  walletsCommandHandler = _walletsCommandHandler;
}

// 进入场景
editWalletScene.enter(async (ctx) => {
  // 从回调数据中获取钱包ID
  const walletId = (ctx.scene.state as any).walletId;
  // console.log("editWalletScene: walletId", walletId);
  if (!walletId) {
    await ctx.reply(`${Emoji.Error} Invalid wallet ID`);
    return ctx.scene.leave();
  }

  // 获取钱包信息
  const wallet = await walletService.findWalletById(walletId);
  if (!wallet) {
    await ctx.reply(`${Emoji.Error} Wallet not found`);
    return ctx.scene.leave();
  }

  // 存储钱包信息到场景状态
  (ctx.scene.state as any).wallet = wallet;

  const walletText = `${Emoji.Wallet} Wallet Details\n\n` +
    `Label: ${wallet.walletName}\n` +
    `${formatWalletLink('Public Key:', wallet.walletAddress)} \n` +
    `Balance: 0.0000 SOL ($0.00)\n` +
    `Status: ${wallet.isDefaultWallet ? 'Default Wallet' : 'Additional Wallet'}`;

  // 显示编辑菜单
  const keyboard = Markup.inlineKeyboard([
    [Markup.button.callback(wallet.isDefaultWallet ? `${Emoji.Default} Default Wallet` : `${Emoji.SetDefault} Set as Default`, `${TelegramKey.SetDefaultWallet}`)],
    [Markup.button.callback(`${Emoji.Withdraw} Withdraw SOL`, `${TelegramKey.SetDefaultWallet}:${walletId}`)],
    [Markup.button.callback(`${Emoji.Delete} Remove Wallet`, `${TelegramKey.DeleteWallet}:${walletId}`)],
    [Markup.button.callback(BackText, `${TelegramKey.Back}`)],
  ]);

  const options = {
    parse_mode: 'HTML' as const, // 明确为字面量类型
    reply_markup: keyboard.reply_markup
  };
  // if ('editMessageText' in ctx) {
  //   await ctx.editMessageText(walletText, options);
  //   return;
  // }
  await ctx.reply(walletText, { ...options, link_preview_options: { is_disabled: true } });
});

// 处理重命名钱包
// editWalletScene.action(new RegExp(`^${TelegramKey.RenameWallet}$`), async (ctx) => {
//   await ctx.answerCbQuery();
//   await ctx.reply('Please enter a new name for your wallet:');
//   (ctx.scene.state as any).action = 'rename';
// });

// 处理设置默认钱包
editWalletScene.action(new RegExp(`^${TelegramKey.SetDefaultWallet}:(.+)$`), async (ctx) => {
  await ctx.answerCbQuery();
  console.log("SetDefaultWallet")
  const walletId = ctx.match[1];
  const user = await userService.findByTgId(ctx.from.id);

  // 先将所有钱包的默认状态设为 false
  const wallets = await walletService.findWalletsByUserId(user.id);
  for (const w of wallets) {
    if (w.id !== walletId) {
      w.isDefaultWallet = false;
      await walletService.saveWallet(w);
    }
  }

  // 将选中的钱包设为默认
  const wallet = await walletService.findWalletById(walletId);
  if (wallet) {
    wallet.isDefaultWallet = true;
    await walletService.saveWallet(wallet);
  }

  await ctx.reply(`${Emoji.Default} Wallet has been set as default`);
  return ctx.scene.leave();
});

// 处理删除钱包
editWalletScene.action(new RegExp(`^${TelegramKey.DeleteWallet}:(.+)$`), async (ctx) => {
  await ctx.answerCbQuery();
  const walletId = ctx.match[1];
  const wallet = await walletService.findWalletById(walletId);

  const msg = `${Emoji.Warning} DANGER ZONE - Wallet Removal

You are about to remove this wallet:

Label: ${wallet.walletName}
Public Key: ${wallet.walletAddress} ( E )
Balance: 0.0000 SOL ($0.00)
Status: ${wallet.isDefaultWallet ? 'Default Wallet' : 'Additional Wallet'}

${Emoji.Warning} WARNING
• This action cannot be undone
• Make sure you have backed up the private key
• The wallet will be removed from auto-trading
${wallet.isDefaultWallet ? '• This is your default wallet, removing it will affect auto-trading\n' : ''}
Are you absolutely sure?`;

  const keyboard = Markup.inlineKeyboard([
    [
      Markup.button.callback('NO, Keep Wallet', `${TelegramKey.CancelDeleteWallet}:${wallet.id}`),
      Markup.button.callback('Yes, Remove', `${TelegramKey.ConfirmDeleteWallet}:${wallet.id}`)
    ]
  ]);

  await ctx.reply(msg, { parse_mode: 'HTML', link_preview_options: { is_disabled: true }, reply_markup: keyboard.reply_markup });
});

// 删除钱包二次确认
editWalletScene.action(new RegExp(`^${TelegramKey.CancelDeleteWallet}:(.+)$`), async (ctx) => {
  await ctx.answerCbQuery();
  // 直接返回上一步（重新进入当前 scene，刷新信息）
  await ctx.scene.reenter();
});

editWalletScene.action(new RegExp(`^${TelegramKey.ConfirmDeleteWallet}:(.+)$`), async (ctx) => {
  await ctx.answerCbQuery();
  const walletId = ctx.match[1];
  await walletService.deleteWallet(walletId);
  await ctx.scene.leave();
  // 删除后直接刷新原消息为钱包列表
  if ('editMessageText' in ctx) {
    await walletsCommandHandler.handle(ctx, true);
  } else {
    await walletsCommandHandler.handle(ctx, false);
  }
});

// 处理返回
editWalletScene.action(new RegExp(`^${TelegramKey.Back}$`), async (ctx) => {
  await ctx.answerCbQuery();
  return ctx.scene.leave();
});

// 处理文本输入
editWalletScene.on('text', async (ctx) => {
  const text = ctx.message.text.trim();
  const action = (ctx.scene.state as any).action;
  const wallet = (ctx.scene.state as any).wallet as Wallet;

  if (text.startsWith('/')) {
    await ctx.scene.leave();
    return;
  }

  if (action === 'rename') {
    const newName = ctx.message.text.trim();

    // 过滤指令消息
    if (newName.startsWith('/')) {
      await ctx.reply(`${Emoji.Error} Wallet name cannot start with "/". Please enter a valid wallet name.`);
      return;
    }

    // 检查钱包名称是否为空
    if (!newName) {
      await ctx.reply(`${Emoji.Error} Wallet name cannot be empty. Please enter a valid wallet name.`);
      return;
    }

    // 更新钱包名称
    wallet.walletName = newName;
    await walletService.saveWallet(wallet);
    await ctx.reply(`${Emoji.Rename} Wallet renamed to: ${newName}`);
    return ctx.scene.leave();
  }

  // 如果不是重命名操作，忽略文本输入
  await ctx.scene.leave();
});