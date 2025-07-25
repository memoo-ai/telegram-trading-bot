import { Module } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { UserModule } from 'src/user/user.module';
import { WalletModule } from 'src/wallet/wallet.module';
import { UtilsModule } from 'src/utils/utils.module';
import { WalletsCommandHandler } from './commands/wallets.command.handler';
import { SettingsCommandHandler } from './commands/settings.command.handler';
import { BuyCommandHandler } from './commands/buy.command.handler';

@Module({
  imports: [UserModule, WalletModule, UtilsModule],
  providers: [TelegramService, WalletsCommandHandler, SettingsCommandHandler, BuyCommandHandler],
})
export class TelegramModule { }