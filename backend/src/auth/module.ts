import { Module } from '@nestjs/common';
import { AuthController } from './controller';
import { AuthService } from './service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { config } from 'dotenv';
import { UsersProvider } from 'src/user/provider';
config();


@Module({
    imports:[JwtModule.register({
        secret:process.env.JWT_SECRET,
        signOptions: {
            expiresIn: 3600,
          },
    }),
    
],
    controllers:[AuthController],
    providers:[AuthService,JwtStrategy,PassportModule,UsersProvider],
    exports:[AuthService]


})

export class AuthModule {}