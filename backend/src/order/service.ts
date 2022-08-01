import { Inject, Injectable } from '@nestjs/common';
import { Order, OrderedBook } from './model';
import { ORDERPROVIDER } from './provider.order';
import { ORDERBOOKPROVIDER } from './provider.orderBook';

@Injectable()
export class OrderService {
  constructor(
    @Inject(ORDERPROVIDER)
    private readonly orderRepository: typeof Order,
    @Inject(ORDERBOOKPROVIDER)
    private readonly orderBookRepository: typeof OrderedBook,
  ) {}

  async createOrder(body) {
    const { orderCode, userId } = body;
    console.table(body);
    return await this.orderRepository.create(body);
  }

  async addToOrderedBook(body) {
   
    return await this.orderBookRepository.create(body);
  }
}
