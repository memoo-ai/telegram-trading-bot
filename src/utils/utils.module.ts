import { Module, forwardRef } from '@nestjs/common';
import { WalletUtils } from './wallet';
import { ExchangeRateService } from './exchange-rate.service';
import { ExchangeRateScheduler } from './exchange-rate.scheduler';
import { UserModule } from 'src/user/user.module';
import { WalletModule } from 'src/wallet/wallet.module';
// import { RaydiumSwapService } from './Raydium/swap';

@Module({
  imports: [UserModule, forwardRef(() => WalletModule)],
  providers: [WalletUtils, ExchangeRateService, ExchangeRateScheduler],
  exports: [WalletUtils, ExchangeRateService],
})
export class UtilsModule {}