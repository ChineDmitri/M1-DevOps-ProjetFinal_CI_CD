import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as path from 'path';

async function bootstrap() {
  dotenv.config();
  console.log(process.env.MYSQL_DB_USER_PROD);
  console.log(process.env.MYSQL_DB_HOST_PROD);
  console.log(process.env.MYSQL_DB_PORT_PROD);
  const app = await NestFactory.create(AppModule);

  const staticPath = path.join(__dirname, '../../volume/browser/');

  console.log(staticPath);
  app.use('/', express.static(staticPath));

  await app.listen(3000);
}
bootstrap();
