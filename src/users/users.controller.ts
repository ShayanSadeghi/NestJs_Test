import {
  Controller,
  Logger,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { Client, Transport, ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller('users')
export class UsersController {
  logger = new Logger('AppController');

  @Client({
    transport: Transport.NATS,
    options: {
      url: 'nats://localhost:4222',
    },
  })
  client: ClientProxy;

  @Get('all')
  getUsers(): Observable<any> {
    this.logger.log('client#send -> topic: "get-users" ');
    return this.client.send('get-users', {});
  }

  @Post('add')
  Add(@Body() user: any) {
    this.logger.log('client#send -> topic: add-user');
    this.client.emit('add-user', user);
  }

  @Put('update')
  Update(@Body() user: any) {
    this.logger.log('client#send -> topic: update-user');
    this.client.emit('update-user', user);
  }

  @Delete('delete/:id')
  Delete(@Param('id') id) {
    this.logger.log('client#send -> topic: delete-user');
    let res = this.client.emit('delete-user', id);
    console.log(res);
  }
}
