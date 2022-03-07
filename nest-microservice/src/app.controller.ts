import { Controller } from '@nestjs/common';
import { MessagePattern, EventPattern, Payload } from '@nestjs/microservices';

import { UserService } from './Services/users.service';

@Controller()
export class AppController {
  constructor(private service: UserService) {}

  @MessagePattern('get-users')
  async GetAll() {
    return await this.service.getAll();
  }

  @EventPattern('add-user')
  async addUser(@Payload() user: any) {
    await this.service.add(user);
  }

  @EventPattern('update-user')
  async updateUser(@Payload() user: any) {
    await this.service.update(user);
  }

  @EventPattern('delete-user')
  async deleteUser(@Payload() id: any) {
    await this.service.delete(id);
  }
}
