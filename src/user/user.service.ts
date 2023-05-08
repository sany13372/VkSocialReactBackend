import {Injectable, NotFoundException} from '@nestjs/common';
import {UpdateUserDto} from './dto/update-user.dto';
import {genSalt, hash} from 'bcryptjs'
import {InjectModel} from "nestjs-typegoose";
import {ModelType} from "@typegoose/typegoose/lib/types";
import {UserModel} from './user.model'
import {CreateUserDto} from "./dto/create-user.dto";

@Injectable()
export class UserService {

    constructor(
        @InjectModel(UserModel) private readonly UserModel: ModelType<UserModel>
    ) {
    }

    findAll() {
        return this.UserModel.find();
    }

    findOne(id: string) {
        return this.UserModel.findById(id).exec();
    }

    async update(id: string, updateUserDto: CreateUserDto) {

        const user = await this.UserModel.findOne({email: updateUserDto.email, _id: id})

        if (user && String(id) !== String(user.id)) throw new NotFoundException('Емэил занят');

        if (updateUserDto.password) {
            const salt = await genSalt(10);
            user.password = await hash(updateUserDto.password, salt)
        }

        user.email = updateUserDto.email
        user.name = updateUserDto.name
        user.lastName = updateUserDto.lastName
        user.birthDay = updateUserDto.birthDay
        user.avatar = updateUserDto.avatar
        user.city = updateUserDto.city
        user.educational = updateUserDto.educational
        await user.save()

        return user
    }

    remove(id: string) {
        return this.UserModel.findByIdAndDelete(id).exec()
    }

    async toggleFriend(userId: string, friendId: string) {
        const user = await this.findOne(userId)
        const friend = await this.findOne(friendId)
        if (user.friends.includes(friend._id)) {
            user.friends = user.friends.filter((friendItem) => String(friendItem._id) !== friendId)
            friend.friends = friend.friends.filter((userItem) => String(userItem._id) !== userId)
        } else {
            user.friends = [...user.friends, friend]
            friend.friends = [...friend.friends, user]
        }

        await user.save()
        await friend.save()

        return true
    }
}
