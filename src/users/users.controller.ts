import {
  Controller,
  Logger,
  Get,
  Post,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { Client, Transport, ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { UserService } from '../Services/users.service';

@Controller('users')
export class UsersController {
  constructor(private service: UserService) {}
  logger = new Logger('AppController');

  @Client({
    transport: Transport.NATS,
    options: {
      url: 'nats://localhost:4222',
    },
  })
  client: ClientProxy;

  @Get('all')
  async GetAll() {
    return await this.service.getAll();
  }

  @Post('add')
  async Add(@Body() user: any) {
    await this.service.add(user);
  }

  @Post('update')
  async Update(@Body() user: any) {
    await this.service.update(user);
  }

  @Delete('delete/:id')
  async Delete(@Param('id') id) {
    await this.service.delete(id);
  }

  @Get('users')
  getTest(): Observable<any> {
    this.logger.log('client#send -> topic: "testing" ');
    return this.client.send('get-users', {});
  }
}
