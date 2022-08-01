import { Inject, Injectable } from '@nestjs/common';
import { User } from './model';
import { PROVIDER } from './provider';

@Injectable()
export class UserService {
  constructor(
    @Inject(PROVIDER)
    private readonly userRepository: typeof User,
  ) {}
}
