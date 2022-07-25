import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { AddUserDto } from '../dto/add-user.dto';



@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}


    @Post()
    addUser(@Body() addUserDto:AddUserDto) {
      
      return this.userService.addUser(addUserDto);
       
    }

}