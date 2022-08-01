import { Module } from '@nestjs/common';
import { OrderController } from './controller';
import { OrderService } from './service';

@Module({
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
