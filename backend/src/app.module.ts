import { Module } from '@nestjs/common';
import { AuthModule } from './auth/module';
import { BookModule } from './book/module';
import { DatabaseProvider } from './database.provider';
import { OrderModule } from './order/module';
import { UserModule } from './user/module';

@Module({
  providers: [DatabaseProvider],
  imports: [BookModule, OrderModule, UserModule, AuthModule],
})
export class AppModule {}
