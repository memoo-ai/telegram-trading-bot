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
  await ctx.answerCbQuery();
  
  // 标记用户已同意并注册
  const tgId = ctx.from.id;
  // 获取 session 中的邀请码
  const inviteCode = ctx.session?.inviteCode || '';
  
  try {
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
    
    // 发送主菜单
    await ctx.reply('Use /start to access the main menu.');
  } catch (error) {
    console.error('Error in AgreeTerms action:', error);
    await ctx.reply('❌ An error occurred. Please try again.');
  }
});

// 不同意条款
termsScene.action(TelegramKey.DisagreeTerms, async (ctx) => {
  await ctx.reply('You must accept the terms and conditions to use the bot. Please start over with /start command.');
  await ctx.answerCbQuery();
});