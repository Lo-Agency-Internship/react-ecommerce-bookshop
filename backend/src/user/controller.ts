import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './service';
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUsers() {
    console.log('get');
  }

  @Post()
  signup(@Body() body) {
    return this.userService.signup(body);
  }
}
