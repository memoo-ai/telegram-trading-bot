import { Markup } from 'telegraf';
import { MyContext } from '../type';
import { TelegramKey } from 'src/common/constants/telegram';
import { BaseCommandHandler } from './base.command.handler';

/**
 * 设置指令处理器
 */
export class SettingsCommandHandler extends BaseCommandHandler {
  getCommand(): string {
    return TelegramKey.Settings;
  }

  async handle(ctx: MyContext, edit: boolean = false): Promise<void> {
    const text = 
      `⚙️ Settings Configuration

` +
      `Choose which settings to configure:

` +
      `• Manual Trade: Configure buy/sell amounts, slippage, and priority fees
` +
      `• Auto Trade: Configure automated trading parameters`;

    const keyboard = Markup.inlineKeyboard([
      [
        Markup.button.callback('Manual Trade', TelegramKey.ManualTrade),
        Markup.button.callback('Auto Trade', TelegramKey.AutoTradeAction),
      ],
      [
        Markup.button.callback('Main menu', TelegramKey.MainMenu),
      ],
    ]);

    await this.sendOrEditMessage(ctx, text, keyboard, edit);
  }
}