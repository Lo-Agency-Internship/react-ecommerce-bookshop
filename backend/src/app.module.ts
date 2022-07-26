import { Module } from '@nestjs/common';
import {BookModule}  from './book/book.module'
import {OrderModule}  from './order/order.module'
import {UserModule}  from './user/user.module'

@Module({
  imports: [BookModule,OrderModule,UserModule]
})
export class AppModule {}
