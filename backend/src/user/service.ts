import { Inject, Injectable } from '@nestjs/common';
import { User } from './model';
import { PROVIDER } from './provider';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @Inject(PROVIDER)
    private readonly userRepository: typeof User,
  ) {}

  async signup(body) {
    console.log(body)
    const {name,email} = body;
    const address = "NY"
    let {password} = body
    const salt = await bcrypt.genSalt();
     password = await bcrypt.hash(password,salt)
    return await this.userRepository.create({name,email,password,address});
  }
}
