import { TelegramScenes } from 'src/common/constants/telegram';
import { Scenes } from 'telegraf';

export const createWalletScene = new Scenes.BaseScene<Scenes.SceneContext>(TelegramScenes.CreateWallet);

createWalletScene.enter((ctx) => ctx.reply('Please enter a label for your new wallet:'));
createWalletScene.on('text', async (ctx) => {
  const walletName = ctx.message.text.trim();
  await ctx.reply(`✅ Wallet name received: ${walletName}`);
  await ctx.scene.leave();
});