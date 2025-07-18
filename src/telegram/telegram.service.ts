import { Injectable, OnModuleInit } from '@nestjs/common';
import * as TelegramBot from 'node-telegram-bot-api';

@Injectable()
export class TelegramService implements OnModuleInit {
  private bot: any;

  onModuleInit() {
    console.log('TelegramService onModuleInit called');
    const token = process.env.TELEGRAM_BOT_TOKEN;
    console.log(token);
    if (!token) {
      throw new Error('TELEGRAM_BOT_TOKEN is not set in environment variables');
    }
    this.bot = new (TelegramBot as any)(token, { polling: true });
    this.setupListeners();
    console.log(this.bot);
    console.log("Bot is running", token);

    // // 设置 Bot 菜单
    this.bot.setMyCommands([
      { command: 'start', description: 'Main Menu for quick' },
      { command: 'feed', description: 'Manage your feed' },
      { command: 'autotrade', description: 'Configure auto trading' },
      { command: 'wallets', description: 'Manage wallets (create, import, withdraw)' },
      { command: 'positions', description: 'View token positions' },
      { command: 'buy', description: 'Buy a token' },
      { command: 'sell', description: 'Sell a token' },
      { command: 'withdraw', description: 'Withdraw SOL from default wallet' },
      { command: 'filters', description: 'Configure trading filters' },
      { command: 'settings', description: 'Configure manual and auto trade settings' },
      { command: 'help', description: 'Show available commands and usage' },
      // 可以继续添加你想要的指令
      // { command: 'yourcmd', description: '你的自定义指令描述' },
    ]);
  }

  private setupListeners() {
    this.bot.onText(/\/start/, (msg) => {
      this.bot.sendMessage(msg.chat.id, '欢迎使用本 Telegram Bot!');
    });
    this.bot.onText(/\/help/, (msg) => {
      this.bot.sendMessage(msg.chat.id, '可用指令:\n/start - 启动机器人\n/help - 获取帮助信息');
    });
  }
} 