import {BadRequestException, Injectable, UnauthorizedException} from '@nestjs/common';
import {CreateAuthDto} from './dto/create-auth.dto';
import {UpdateAuthDto} from './dto/update-auth.dto';
import {JwtService} from "@nestjs/jwt";
import {compare, genSalt, hash} from 'bcryptjs'
import {UserModel} from "../user/user.model";
import {InjectModel} from "nestjs-typegoose";
import {ModelType} from "@typegoose/typegoose/lib/types";

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(UserModel) private readonly UserModel: ModelType<UserModel>,
        private readonly jwtService: JwtService
    ) {
    }

    async login({email, password}: UpdateAuthDto) {
        const user = await this.validateUser(email, password)
        const tokens = await this.tokenpair(String(user._id))
        return {
            user: user,
            ...tokens
        }
    }

    async register({email, password,name,lastName}: CreateAuthDto) {

        const oldUser = await this.UserModel.findOne({email}).exec()
        if (oldUser) {
            throw new BadRequestException('Такой пользователь уже есть')
        }

        const salt = await genSalt(10);

        const newUser = new this.UserModel({
            email: email,
            name:name,
            lastName:lastName,
            password: await hash(password, salt)
        })

        const createUser = await newUser.save()

        const tokens = await this.tokenpair(String(newUser.id))
        return {
            user: createUser,
            ...tokens
        }
    }

    async findByEmail(email: string) {
        return this.UserModel.findOne({email}).exec()
    }

    async getNewTokens(ref: any) {
        if (!ref.refreshToken) throw new UnauthorizedException('Пожалуйста войдите в систему')
        const result = await this.jwtService.verifyAsync(ref.refreshToken)

        if (!result) throw new UnauthorizedException('Не валидный токен')

        const user = await this.UserModel.findById(result.id);

        const tokens = await this.tokenpair(String(user._id))

        return {
            user: user,
            ...tokens
        }
    }

    async validateUser(email: string, password: string) {
        const user = await this.findByEmail(email);
        if (!user) throw new UnauthorizedException('Такого пользователя нету ');

        const isValidpassword = await compare(password, user.password)
        if (!isValidpassword) throw new UnauthorizedException('Неверный пароль');

        return user;
    }

    async tokenpair(userID: string) {
        const data = {id: userID}

        const refreshToken = await this.jwtService.signAsync(data, {
            expiresIn: '15d'
        })

        const accessToken = await this.jwtService.signAsync(data, {
            expiresIn: '1d'
        })

        return {refreshToken, accessToken}
    }

}
