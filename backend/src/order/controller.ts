import { Body, Controller, Post } from '@nestjs/common';
import { OrderService } from './service';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  createOrders(@Body() body) {
    return this.orderService.createOrder(body);
  }

  @Post('/api/toorderbook')
  addToOrderedBook(@Body() body){
      return this.orderService.addToOrderedBook(body);
  }

}
