import { Scenes, Markup } from 'telegraf';
import { TelegramKey, TelegramScenes, TERMS_OF_SERVICE } from 'src/common/constants/telegram';
import { UserService } from 'src/user/user.service';
import { Telegraf } from 'telegraf';
import { MyContext } from '../type';


export const termsScene = new Scenes.BaseScene<MyContext>(TelegramScenes.Terms);

// 注入服务
let userService: UserService;
let bot: Telegraf<MyContext>;

export function setTermsSceneServices(
  _userService: UserService,
  _bot: Telegraf<MyContext>
) {
  userService = _userService;
  bot = _bot;
}

// 进入场景
termsScene.enter((ctx) => {
  const keyboard = Markup.inlineKeyboard([
    [Markup.button.callback('✅ I Accept', TelegramKey.AgreeTerms)],
    [Markup.button.callback('❌ Decline', TelegramKey.DisagreeTerms)],
  ]);
  ctx.reply(TERMS_OF_SERVICE, keyboard);
});

// 同意条款
termsScene.action(TelegramKey.AgreeTerms, async (ctx) => {
  // 标记用户已同意并注册
  const tgId = ctx.from.id;
  // 获取 session 中的邀请码
  const inviteCode = ctx.session?.inviteCode || null;
  // 注册用户（带邀请码）
  await userService.checkOrCreateAndUpdateUser({
    tgId,
    username: ctx.from.username,
    firstName: ctx.from.first_name,
    lastName: ctx.from.last_name,
    isBot: ctx.from.is_bot,
    referralCode: inviteCode,
  });
  await userService.setAgreedToTerms(tgId, true);
  await ctx.reply('Thank you for accepting the terms. Welcome!');
  await ctx.scene.leave();
  await ctx.answerCbQuery();
  // 注册完成后可直接进入主菜单（可选：自动触发 /start）
  await bot.handleUpdate({
    message: {
      ...(ctx.message || {}),
      text: '/start',
    },
    from: ctx.from,
  } as any);
});

// 不同意条款
termsScene.action(TelegramKey.DisagreeTerms, async (ctx) => {
  await ctx.reply('You must accept the terms and conditions to use the bot. Please start over with /start command.');
  await ctx.answerCbQuery();
});