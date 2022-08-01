import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/model';
import { PROVIDER } from 'src/user/provider';

@Injectable()
export class AuthService {
  constructor(
    @Inject(PROVIDER)
    private readonly userRepository: typeof User,
    private jwtService: JwtService,
  ) {}

  async login(request) {
    const { email, password } = request.body;
    const user = await this.userRepository.findOne({ where: { email: email } });

    if (user && user.password === password) {
      // find orderId
      const payload = { name: user.name, sub1: user.id, role: user.role };
      return {
        accessToken: this.jwtService.sign(payload),
      };
    } else {
      throw new UnauthorizedException('Incorrect login credentials!');
    }
  }
}
