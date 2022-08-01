import { Module } from '@nestjs/common';
import { BookModule } from './book/module';
import { DatabaseProvider } from './database.provider';
import { OrderModule } from './order/module';
import { UserModule } from './user/module';

@Module({
  providers: [DatabaseProvider],
  imports: [BookModule, OrderModule, UserModule],
})
export class AppModule {}
