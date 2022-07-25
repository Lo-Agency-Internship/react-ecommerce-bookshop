import { Injectable } from '@nestjs/common';
import { AddUserDto } from '../dto/add-user.dto';


// const Book = require('../../database/book')
const User = require('../../database/user')
const Order = require('../../database/order')
// const BookOrder = require('../../database/bookByOrder')



@Injectable()
export class UserService {

    async addUser(addUserDto:AddUserDto)
    {
        console.log("Service LOG");
        
        const user = await User.create(addUserDto)
        await Order.create({UserId:user.id})
        return user;
    }


}
