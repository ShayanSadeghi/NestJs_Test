import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { UsersController } from './users/users.controller';

@Module({
  imports: [
    // ClientsModule.register([
    //   {
    //     name: 'USERS',
    //     transport: Transport.NATS,
    //     options: {
    //       url: 'nats://localhost:4222',
    //     },
    //   },
    // ]),
  ],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
