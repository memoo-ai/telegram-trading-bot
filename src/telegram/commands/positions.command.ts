import { Markup } from 'telegraf';
import { MyContext } from '../type';
import { TelegramKey } from 'src/common/constants/telegram';
import { BaseCommandHandler } from './base.command.handler';

/**
 * 持仓指令处理器
 */
export class PositionsCommandHandler extends BaseCommandHandler {
  async handle(ctx: MyContext): Promise<void> {
    const text = 
      `No token positions found in your wallet.`;

    const keyboard = Markup.inlineKeyboard([
      [
        Markup.button.callback('Manual Trade', TelegramKey.ManualTrade),
        Markup.button.callback('Auto Trade', TelegramKey.AutoTradeAction),
      ],
      [
        Markup.button.callback('Main menu', TelegramKey.MainMenu),
      ],
    ]);

    await this.sendOrEditMessage(ctx, text, keyboard);
  }
}