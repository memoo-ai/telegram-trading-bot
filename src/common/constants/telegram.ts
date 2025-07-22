export enum TelegramKey {
  // commands
  Start = 'start',
  Feed = 'feed',
  AutoTrade = 'autotrade',
  Positions = 'positions',
  Buy = 'buy',
  Sell = 'sell',
  Filters = 'filters',
  Withdraw = 'withdraw',
  Help = 'help',
  // other
  History = 'history',
  Deposit = 'deposit',
  // actions
  CreateWallet = 'create_wallet',
  ImportWallet = 'import_wallet',
  SecurityTips = 'security_tips',
  MainMenu = 'main_menu',
  Wallets = 'wallets',
  Settings = 'wallets',
  AutoTradeAction = 'auto_trade',
  ManualTrade = 'manual_trade',
  // ... 其他 key
}

export const TELEGRAM_BOT_COMMANDS = [
  { command: TelegramKey.Start, description: 'Main Menu for quick actions' },
  { command: TelegramKey.Feed, description: 'Manage your feed' },
  { command: TelegramKey.AutoTrade, description: 'Configure auto trading' },
  { command: TelegramKey.Wallets, description: 'Manage wallets (create, import, withdraw)' },
  { command: TelegramKey.AutoTrade, description: 'View token positions' },
  { command: TelegramKey.Buy, description: 'Buy a token' },
  { command: TelegramKey.Sell, description: 'Sell a token' },
  { command: TelegramKey.Withdraw, description: 'Withdraw SOL from default wallet' },
  { command: TelegramKey.Filters, description: 'Configure trading filters' },
  { command: TelegramKey.Settings, description: 'Configure manual and auto trade settings' },
  { command: TelegramKey.Help, description: 'Show available commands and usage' },
  // 你可以继续添加自定义命令
];
export const TELEGRAM_BOT_ACTIONS = [
  { label: TelegramKey.Start, description: 'Main Menu for quick actions' },
  { command: TelegramKey.Feed, description: 'Manage your feed' },
  { command: TelegramKey.AutoTrade, description: 'Configure auto trading' },
  { command: TelegramKey.Wallets, description: 'Manage wallets (create, import, withdraw)' },
  { command: TelegramKey.AutoTrade, description: 'View token positions' },
  { command: TelegramKey.Buy, description: 'Buy a token' },
  { command: TelegramKey.Sell, description: 'Sell a token' },
  { command: TelegramKey.Withdraw, description: 'Withdraw SOL from default wallet' },
  { command: TelegramKey.Filters, description: 'Configure trading filters' },
  { command: TelegramKey.Settings, description: 'Configure manual and auto trade settings' },
  { command: TelegramKey.Help, description: 'Show available commands and usage' },
  // 你可以继续添加自定义命令
];

export enum TelegramScenes {
  CreateWallet = 'create_wallet'
} 

// export const USER_CHECK_INTERVAL = 30 * 60 * 1000;
export const USER_CHECK_INTERVAL = 30 * 60 * 1000;
export const WALLET_PRIVATE_KEY_DELETE_DELAY = 3 * 60 * 1000; // 3分钟