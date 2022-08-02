import { Module } from '@nestjs/common';
import { OrderBookProvider, OrderProvider } from 'src/order/provider';
import { OrderService } from 'src/order/service';
import { UserController } from './controller';
import { UsersProvider } from './provider';
import { UserService } from './service';

@Module({
  controllers: [UserController],
  providers: [UserService, UsersProvider,OrderService,OrderProvider, OrderBookProvider],
  exports: [UsersProvider],
})
export class UserModule {}
