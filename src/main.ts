import * as dotenv from 'dotenv';
import { NestExpressApplication } from '@nestjs/platform-express';
import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { setupSwagger } from './swagger';
import { AppModule } from './app.module';
import { setupViewEngine } from './view-engine';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableVersioning({ type: VersioningType.URI });
  app.enableCors({ origin: '*' });
  setupViewEngine(app);
  await setupSwagger(app);
  await app.listen(5050);
}
bootstrap();
