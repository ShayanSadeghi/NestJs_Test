import { Controller, Get } from '@nestjs/common';
import { UserService } from '../Services/users.service';

@Controller('users')
export class UsersController {
    constructor(private service:UserService){}
    @Get('all')
    async GetAll(){
        return await this.service.getAll();
    }
}
