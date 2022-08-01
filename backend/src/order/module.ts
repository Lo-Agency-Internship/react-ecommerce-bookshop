import { Module } from '@nestjs/common';
import { OrderController } from './controller';
import { OrderProvider } from './provider.order';
import { OrderBookProvider } from './provider.orderBook';
import { OrderService } from './service';

@Module({
  imports: [],
  controllers: [OrderController],
  providers: [OrderService, OrderProvider, OrderBookProvider],
})
export class OrderModule {}
