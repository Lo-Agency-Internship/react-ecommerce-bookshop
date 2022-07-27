import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const User = require("../database/user")
const sequelize = require("../database/database")

sequelize.sync({alter: true})
  .then(async ()=>{
    await User.create({
      email: "admin",
      password: "admin",
      isAdmin: true,
      address: "admin",
      name: "admin",
      salt: ""
    })
    console.log('Database created successfully!')}
  )

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8000);
}
bootstrap();
