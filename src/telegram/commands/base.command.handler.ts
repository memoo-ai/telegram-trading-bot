import { Markup } from 'telegraf';
import { MyContext } from '../type';
import { CommandHandler } from './command.handler.interface';

/**
 * 基础指令处理器
 */
export abstract class BaseCommandHandler implements CommandHandler {
  abstract getCommand(): string;

  abstract handle(ctx: MyContext, edit?: boolean): Promise<void>;

  /**
   * 发送或编辑消息
   * @param ctx 上下文对象
   * @param text 消息文本
   * @param keyboard 键盘
   * @param edit 是否为编辑消息
   * @param parseMode 解析模式
   */
  protected async sendOrEditMessage(
    ctx: MyContext,
    text: string,
    keyboard: Markup.Markup<any>,
    edit: boolean = false,
    parseMode?: 'HTML' | 'MarkdownV2'
  ): Promise<void> {
    const options: any = { reply_markup: keyboard.reply_markup };
    if (parseMode) {
      options.parse_mode = parseMode;
      if (parseMode === 'HTML') {
        options.link_preview_options = { is_disabled: true };
      }
    }

    if (edit && 'editMessageText' in ctx) {
      await ctx.editMessageText(text, options);
    } else {
      await ctx.reply(text, options);
    }
  }
}