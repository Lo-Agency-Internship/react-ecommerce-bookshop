import { Body, Injectable } from '@nestjs/common';

const Order = require('../../database/order')
const BookByOrder = require('../../database/bookByOrder')


@Injectable()
export class OrderService {

    async createOrder(body)
    {
        console.table(body);

        const {BookId,count,price,OrderId} = body;

        await BookByOrder.create({BookId,count,price,OrderId});
    }
}
