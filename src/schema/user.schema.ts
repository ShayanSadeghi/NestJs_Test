import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    Name: String,
    Username: String,
    Email:String,
    Phone:String,
},{
    versionKey:false
});