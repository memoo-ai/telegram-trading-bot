import { escapeMarkdownV2 } from 'src/utils';
// 帮助命令消息
const HELP_MESSAGE = escapeMarkdownV2(`
  🤖 Bot Commands

Trading Commands
/buy - Buy a token with SOL
/sell - Sell a token for SOL
/stats <pool_address> - View detailed pool statistics

Wallet Management
/wallets - Manage your wallets
• Create new wallets
• Import existing wallets
• Set default wallet
• View wallet balances
/withdraw - Withdraw SOL from default wallet

Portfolio Management
/positions - View your token holdings
• Token balances and USD values
• One-click selling options
• Token details and links
/unhide - Unhide tokens you previously hid

Automated Trading
/autoTrade - Configure auto trading
• Enable/disable automation
• Set buy/sell parameters
• Configure risk management
• Set priority fees

Configuration
/filters - Configure trading filters
• Set volume/marketCap requirements
• Configure holder requirements
• Set pool duration limits
/settings - Configure trade settings
• Set buy/sell amounts
• Configure slippage tolerance
• Set priority fees
• Enable/disable protection

/start - Quick actions menu
/help - Show this command list

Security Tips
• Never share your private keys
• Store backup keys securely
• Use small amounts for testing
• Monitor your transactions regularly
`);

export { HELP_MESSAGE };