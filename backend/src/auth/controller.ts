import { Controller, Get,Inject,Post,Req,UseGuards } from '@nestjs/common';
import { AuthService } from './service';
import { JwtAuthGuard } from './jwt.auth.guard';
import {Request} from 'express';

import { User } from 'src/user/model';
import { PROVIDER } from 'src/user/provider';




@Controller('auth')
export class AuthController{
    constructor(
    @Inject(PROVIDER)
    private readonly userRepository: typeof User,

    private authService:AuthService){}

    @Post('login')
    //toturial inja neveshte @request
    login(@Req()request:Request){
      return this.authService.login(request)
    }


    @UseGuards(JwtAuthGuard)
    @Get('testroute')
    async getAllUsers(){
      console.log('enter protected route')
      const users = await this.userRepository.findAll()
      return users


}
}

    