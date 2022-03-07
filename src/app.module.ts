import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/user.schema';
import { UsersController } from './users/users.controller';
import { UserService } from './Services/users.service';

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
    MongooseModule.forRoot('mongodb://localhost:27017/TestDB'),
    MongooseModule.forFeature([
      {
        name: 'Users',
        schema: UserSchema,
        collection: 'Users',
      },
    ]),
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UserService],
})
export class AppModule {}
