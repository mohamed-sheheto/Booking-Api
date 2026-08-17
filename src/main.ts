import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { env } from './common/config/env.interface';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService<env>);
  const port = configService.getOrThrow<number>('PORT');

  await app.listen(port);
  Logger.log(`server is running on port: ${port}`);
}
bootstrap();
