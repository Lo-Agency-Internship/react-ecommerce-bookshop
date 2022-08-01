import { Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './service';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Req() request: Request) {
    return this.authService.login(request);
  }
}
