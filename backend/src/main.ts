import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const sequelize = require("../database/database.js")

sequelize.sync({alter: true}).then(()=>console.log('database is ready'))

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8000);
}
bootstrap();
