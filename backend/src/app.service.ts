import { Injectable } from '@nestjs/common';

const Book = require('../database/book')
const User = require('../database/user')
const Order = require('../database/order')
const BookOrder = require('../database/bookByOrder')



@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async postHello(body){
    console.log(body)
    const post = await User.create(body)
    return post
  }
}
