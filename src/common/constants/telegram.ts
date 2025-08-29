import { PLATFORM_NAME } from ".";

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
  Settings = 'settings',
  AutoTradeAction = 'auto_trade',
  ManualTrade = 'manual_trade',
  TradeSetting = 'trade_setting',
  FeedFilters = 'feed_filters',
  // ... 其他 key
  AgreeTerms = 'agree_terms',
  DisagreeTerms = 'disagree_terms',
  EditWallet = 'edit_wallet',
  RenameWallet = 'rename_wallet',
  SetDefaultWallet = 'set_default_wallet',
  DeleteWallet = 'delete_wallet',
  CancelDeleteWallet = 'cancel_delete_wallet',
  ConfirmDeleteWallet = 'confirm_delete_wallet',
  Back = 'back',
  // Auto Trade related keys
  AutoTradeBuyAmount = 'auto_trade_buy_amount',
  AutoTradeSlippage = 'auto_trade_slippage',
  AutoTradePriorityFee = 'auto_trade_priority_fee',
  AutoTradeTakeProfit = 'auto_trade_take_profit',
  AutoTradeStopLoss = 'auto_trade_stop_loss',
  AutoTradeAutoSell = 'auto_trade_auto_sell',
  StartAutoTrade = 'start_auto_trade',
  StopAutoTrade = 'stop_auto_trade',
  AutoTradeHistory = 'auto_trade_history',
  EnableAutoSell = 'enable_auto_sell',
  DisableAutoSell = 'disable_auto_sell',
  PartialAutoSell = 'partial_auto_sell',
  AutoTradeStats = 'auto_trade_stats',
  ExportAutoTradeData = 'export_auto_trade_data',
}

export const TELEGRAM_BOT_COMMANDS = [
  { command: TelegramKey.Start, description: 'Main Menu for quick actions' },
  { command: TelegramKey.Feed, description: 'Manage your feed' },
  { command: TelegramKey.AutoTrade, description: 'Configure auto trading' },
  { command: TelegramKey.Wallets, description: 'Manage wallets (create, import, withdraw)' },
  { command: TelegramKey.Positions, description: 'View token positions' },
  { command: TelegramKey.Buy, description: 'Buy a token' },
  { command: TelegramKey.Sell, description: 'Sell a token' },
  { command: TelegramKey.Withdraw, description: 'Withdraw SOL from default wallet' },
  { command: TelegramKey.Filters, description: 'Configure trading filters' },
  { command: TelegramKey.Settings, description: 'Configure manual and auto trade settings' },
  { command: TelegramKey.Help, description: 'Show available commands and usage' },
  // 你可以继续添加自定义命令
];

export enum TelegramScenes {
  CreateWallet = 'create_wallet',
  Terms = 'terms',
  EditWallet = 'edit_wallet',
  Buy = 'buy',
} 

export const TERMS_OF_SERVICE = `
📜 Terms of Service & Privacy Policy
By using ${PLATFORM_NAME} Trading Bot, you agree to our Terms of Service and Privacy Policy.

🔹 Risk Disclosure
Cryptocurrency trading involves significant risk of loss and is not suitable for all investors. You should carefully consider whether trading is appropriate for you in light of your financial condition. Past performance is not indicative of future results.

🔹 Service Description
Valkyr Trading Bot provides automated trading strategies and early project detection tools for cryptocurrency trading. The bot is designed to help users identify and trade new projects on the Solana blockchain.

🔹 User Responsibilities
• You are responsible for all trading decisions and actions
• Never share your private keys or sensitive information
• Monitor your automated trading strategies regularly
• Keep your wallet secure and backup your keys
• Use appropriate risk management practices

🔹 Limitations
• The bot is not financial advice
• We do not guarantee profits or specific results
• Trading automation may be subject to technical issues
• Market conditions may affect trading performance

📖 Read the full Terms of Service
📖 Read the full Terms of Use
📖 Read the full Privacy Policy
`;