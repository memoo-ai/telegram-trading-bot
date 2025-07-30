import { MyContext } from '../type';
import { Markup } from 'telegraf';
import { MessageManager } from '../utils/message-manager';

export abstract class BaseCommandHandler {
  /**
   * 发送或编辑消息
   */
  protected async sendOrEditMessage(
    ctx: MyContext,
    text: string,
    keyboard?: Markup.Markup<any>,
    parseMode: 'HTML' | 'MarkdownV2' = 'HTML'
  ): Promise<void> {
    await MessageManager.sendOrEditMessage(ctx, text, keyboard, {
      parse_mode: parseMode,
    });
  }

  /**
   * 返回上一级菜单
   */
  protected async goBack(
    ctx: MyContext,
    text: string,
    keyboard: Markup.Markup<any>,
    parseMode: 'HTML' | 'MarkdownV2' = 'HTML'
  ): Promise<void> {
    await this.sendOrEditMessage(ctx, text, keyboard, parseMode);
  }

  /**
   * 进入场景前编辑消息
   */
  protected async enterSceneWithMessage(
    ctx: MyContext,
    sceneName: string,
    text: string,
    keyboard?: Markup.Markup<any>,
    sceneData?: any
  ): Promise<void> {
    // 先编辑消息
    await MessageManager.editMessageBeforeScene(ctx, text, keyboard);
    
    // 然后进入场景
    if (sceneData) {
      await ctx.scene.enter(sceneName, sceneData);
    } else {
      await ctx.scene.enter(sceneName);
    }
  }

  /**
   * 从场景返回
   */
  protected async returnFromScene(
    ctx: MyContext,
    text: string,
    keyboard: Markup.Markup<any>,
    parseMode: 'HTML' | 'MarkdownV2' = 'HTML'
  ): Promise<void> {
    await ctx.scene.leave();
    await MessageManager.restoreMessageAfterScene(ctx, text, keyboard, {
      parse_mode: parseMode,
    });
  }
}