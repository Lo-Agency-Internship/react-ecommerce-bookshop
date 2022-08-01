import { Module } from '@nestjs/common';
import { UserController } from './controller';
import { UsersProvider } from './provider';
import { UserService } from './service';

@Module({
  controllers: [UserController],
  providers: [UserService, UsersProvider],
  exports:[UsersProvider]

})
export class UserModule {}
