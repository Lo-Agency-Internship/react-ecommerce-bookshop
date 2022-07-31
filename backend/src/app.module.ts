import { Module } from '@nestjs/common';
import { BookModule } from './book/module';
import { DatabaseProvider } from './database.provider';
import { OrderModule } from './order/module';

@Module({
  providers: [DatabaseProvider],
  imports: [BookModule, OrderModule],
})
export class AppModule { }
