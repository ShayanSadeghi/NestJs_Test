import { Controller, Get, Post,Body } from '@nestjs/common';
import { UserService } from '../Services/users.service';

@Controller('users')
export class UsersController {
    constructor(private service:UserService){}
    @Get('all')
    async GetAll(){
        return await this.service.getAll();
    }

    @Post('add')
    async Add(@Body() user:any){
        await this.service.add(user)
    }

    @Post('update')
    async Update(@Body() user:any){
        await this.service.update(user);
    }
}
