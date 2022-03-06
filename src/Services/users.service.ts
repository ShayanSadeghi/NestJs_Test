import { Injectable } from "@nestjs/common";
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {User} from "../models/users.model";

@Injectable()
export class UserService{
    constructor(@InjectModel('Users') private readonly userModel: Model<User>){}
    
    async getAll(){
        return await this.userModel.find();
    }
}

