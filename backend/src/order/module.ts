import { Module } from '@nestjs/common';
import { OrderController } from './controller';
import { OrderBookProvider, OrderProvider } from './provider';
import { OrderService } from './service';

@Module({
  controllers: [OrderController],
  providers: [OrderService, OrderProvider, OrderBookProvider],
  exports: [OrderService],
})
export class OrderModule {}
