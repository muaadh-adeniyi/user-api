import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {UserInfo} from "./users/entities/user-info.entity";
import {UserContact} from "./users/entities/user-contact.entity";
import {UserAddress} from "./users/entities/user-address.entity";
import {UserAcademics} from "./users/entities/user-academics.entity";


@Module({
  imports: [
      ConfigModule.forRoot(),
      TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          useFactory : (configService : ConfigService) => ({
              type: 'postgres',
              host: configService.get('DB_HOST'),
              port: +configService.get('DB_PORT'),
              username: configService.get('DB_USERNAME'),
              password: configService.get('DB_PASSWORD'),
              database : configService.get('DB_DATABASE'),
              entities : [UserInfo,UserContact,UserAddress,UserAcademics],
              synchronize : true
          }),
          inject : [ConfigService],
      }),
      UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
