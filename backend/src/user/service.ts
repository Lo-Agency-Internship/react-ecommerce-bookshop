import { Inject, Injectable } from '@nestjs/common';
import { User } from './model';
import { PROVIDER } from './provider';
import * as bcrypt from 'bcrypt';
import { OrderService } from 'src/order/service';

@Injectable()
export class UserService {
  constructor(
    @Inject(PROVIDER)
    private readonly userRepository: typeof User,
    private readonly orderService: OrderService,
  ) {}


  async signup(body) {
    const {name,email,address,role} = body
    const foundUser = await this.userRepository.findOne({where:{email}})
    if(!foundUser){
      let {password} = body
      const salt = await bcrypt.genSalt();
      password = await bcrypt.hash(password,salt)
      await this.userRepository.create({name,email,password,address,role});
      const {id} = await this.userRepository.findOne({where: {email}})
      return await this.orderService.createOrder(id);
    }
    return {
      error:"Existing email!"
    }
  }
}
