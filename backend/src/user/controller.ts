import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { error } from 'console';
import { Response } from 'express';
import { OrderService } from 'src/order/service';
import { UserService } from './service';
@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly orderService: OrderService,
  ) {}

  @Get()
  getAllUsers() {
    console.log('get');
  }

  @Get(':id/orders')
  getAllOrdersOfUser(@Param('id') id: number) {
    return this.orderService.getAllOrdersOfUser(id);
  }

  @Get(':id/orders/:orderId')
  getSingleOrderOfUser(@Param('orderId') id: number) {
    return this.orderService.getSingleOrderOfUser(id);
  }

  @Post()
  signup(@Body() body,@Res() res: Response) {

   console.log(res);
  
    return this.userService.signup(body,res);
  }
}
