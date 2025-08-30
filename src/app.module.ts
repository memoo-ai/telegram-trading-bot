import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaModule } from './common/prisma/prisma.module';
import { TelegramModule } from './telegram/telegram.module';
import { UserModule } from './user/user.module';
import { WalletModule } from './wallet/wallet.module';
import { UtilsModule } from './utils/utils.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
    }),
    PrismaModule,
    TelegramModule,
    UserModule,
    WalletModule,
    UtilsModule,
  ],
})
export class AppModule {}
