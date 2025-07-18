import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { DATABASE_CONFIG } from './common/config/database.constants';
import { TelegramModule } from './telegram/telegram.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
    }),
    TelegramModule,
    // TypeOrmModule.forRootAsync({
    //   inject: [ConfigService],
    //   useFactory: (config: ConfigService) => ({
    //     type: DATABASE_CONFIG.TYPE,
    //     host: config.get(DATABASE_CONFIG.HOST),
    //     port: config.get<number>(DATABASE_CONFIG.PORT),
    //     username: config.get(DATABASE_CONFIG.USERNAME),
    //     password: config.get(DATABASE_CONFIG.PASSWORD),
    //     database: config.get(DATABASE_CONFIG.NAME),
    //     autoLoadEntities: true,
    //     synchronize: true,
    //   }),
    // }),
  ],
})
export class AppModule {}
