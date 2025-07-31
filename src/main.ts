import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { winstonLogger } from './logger/winston.logger';
import { ValidationPipe } from '@nestjs/common';
import { API_CONSTANTS } from './common/constants/api.constants';
import { SWAGGER } from './common/constants/swagger.constants';
import { API } from './common/config/api';
import { setDefaultResultOrder } from 'node:dns';

async function bootstrap() {

  setDefaultResultOrder("ipv4first");

  const app = await NestFactory.create(AppModule, {
    logger: winstonLogger,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.setGlobalPrefix(API_CONSTANTS.GLOBAL.PREFIX);
  app.enableCors();

  const configService = app.get(ConfigService);
  const config = new DocumentBuilder()
    .setTitle(SWAGGER.TITLE)
    .setDescription(SWAGGER.DESCRIPTION)
    .setVersion(SWAGGER.VERSION)
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(SWAGGER.PATH, app, document);

  await app.listen(configService.get<number>(API.PORT) || 3000);
}
bootstrap();
