import { MyContext } from '../type';
import { Markup } from 'telegraf';

export interface MessageOptions {
  parse_mode?: 'HTML' | 'MarkdownV2';
  disable_web_page_preview?: boolean;
}

export class MessageManager {
  /**
   * 智能发送或编辑消息
   * @param ctx 上下文
   * @param text 消息文本
   * @param keyboard 键盘
   * @param options 选项
   */
  static async sendOrEditMessage(
    ctx: MyContext,
    text: string,
    keyboard?: Markup.Markup<any>,
    options: MessageOptions = {}
  ): Promise<void> {
    const messageOptions = {
      parse_mode: options.parse_mode || 'HTML',
      disable_web_page_preview: options.disable_web_page_preview ?? true,
      ...(keyboard && { reply_markup: keyboard.reply_markup }),
    };

    // 检查是否可以编辑消息
    if (this.canEditMessage(ctx)) {
      try {
        await ctx.editMessageText(text, messageOptions);
        return;
      } catch (error) {
        console.log('Failed to edit message, sending new one:', error);
      }
    }

    // 发送新消息
    await ctx.reply(text, messageOptions);
  }

  /**
   * 检查是否可以编辑消息
   */
  static canEditMessage(ctx: MyContext): boolean {
    return 'editMessageText' in ctx && ctx.callbackQuery !== undefined;
  }

  /**
   * 进入场景前编辑消息
   */
  static async editMessageBeforeScene(
    ctx: MyContext,
    text: string,
    keyboard?: Markup.Markup<any>,
    options: MessageOptions = {}
  ): Promise<void> {
    if (this.canEditMessage(ctx)) {
      await this.sendOrEditMessage(ctx, text, keyboard, options);
    }
  }

  /**
   * 从场景返回时恢复消息
   */
  static async restoreMessageAfterScene(
    ctx: MyContext,
    text: string,
    keyboard?: Markup.Markup<any>,
    options: MessageOptions = {}
  ): Promise<void> {
    await this.sendOrEditMessage(ctx, text, keyboard, options);
  }
} 