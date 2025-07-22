import { Module } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { UserModule } from 'src/user/user.module';
import { WalletModule } from 'src/wallet/wallet.module';

@Module({
  imports: [UserModule, WalletModule],
  providers: [TelegramService],
})
export class TelegramModule {} 