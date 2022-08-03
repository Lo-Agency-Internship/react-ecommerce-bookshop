import { Inject, Injectable } from '@nestjs/common';
import { Order, OrderedBook } from './model';
import { ORDERBOOKPROVIDER, ORDERPROVIDER } from './provider';

@Injectable()
export class OrderService {
  constructor(
    @Inject(ORDERPROVIDER)
    private readonly orderRepository: typeof Order,
    @Inject(ORDERBOOKPROVIDER)
    private readonly orderBookRepository: typeof OrderedBook,
  ) {}

  async getAllOrders() {
    //admin
    return await this.orderRepository.findAll();
  }

  async getAllOrdersOfUser(userId) {
    //user
    return await this.orderRepository.findAll({ where: { userId } });
  }

  async confirmOrder(orderId) {
    //random unique code generate
    const uniqueCode = new Date().valueOf();

    await this.orderRepository.update(
      { orderCode: uniqueCode },
      { where: { id: orderId } },
    );
    const { userId } = await this.getOrderById(orderId);
    return await this.createOrder(userId);
  }

  async getOrderById(id) {
    return await this.orderRepository.findOne({ where: { id } });
  }

  async createOrder(body) {
    return await this.orderRepository.create(body);
  }
  async getSingleOrderOfUser(orderId) {
    //user
    return await this.orderBookRepository.findAll({ where: { orderId } });
  }
}
