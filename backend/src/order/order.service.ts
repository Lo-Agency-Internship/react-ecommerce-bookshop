import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  async createOrder(body) {
    console.table(body);

    //const { BookId, count, price, OrderId } = body;

    //await BookByOrder.create({ BookId, count, price, OrderId });
  }
}
