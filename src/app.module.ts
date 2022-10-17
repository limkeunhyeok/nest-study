import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './modules/users/users.controller';
import { AuthController } from './modules/auth/auth.controller';
import { MeController } from './modules/me/me.controller';
import { UsersService } from './modules/users/users.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getDefaultOptions } from './typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`${process.cwd()}/.env.${process.env.SERVER_STAGE}`],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(getDefaultOptions()),
  ],
  controllers: [AppController, UsersController, AuthController, MeController],
  providers: [AppService, UsersService],
})
export class AppModule {}
