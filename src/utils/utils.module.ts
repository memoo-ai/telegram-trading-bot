import { Module } from '@nestjs/common';
import { forwardRef } from '@nestjs/common';
import { WalletUtils } from './wallet';
import { ExchangeRateService } from './exchange-rate.service';
import { ExchangeRateScheduler } from './exchange-rate.scheduler';
import { ExchangeRate } from './exchange-rate.entity';
import { UserModule } from 'src/user/user.module';
import { WalletModule } from 'src/wallet/wallet.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { RaydiumSwapService } from './Raydium/swap';

@Module({
  imports: [UserModule, forwardRef(() => WalletModule), TypeOrmModule.forFeature([ExchangeRate])],
  providers: [WalletUtils, ExchangeRateService, ExchangeRateScheduler],
  exports: [WalletUtils, ExchangeRateService],
})
export class UtilsModule {}