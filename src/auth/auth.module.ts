import {Module} from '@nestjs/common';
import {AuthService} from './auth.service';
import {AuthController} from './auth.controller';
import {JwtModule} from "@nestjs/jwt";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {getJWTConfig} from "../config/jwtconfig";
import {TypegooseModule} from "nestjs-typegoose";
import {UserModel} from "../user/user.model";

@Module({
    controllers: [AuthController],
    providers: [AuthService],
    imports: [
        TypegooseModule.forFeature([
            {
                typegooseClass: UserModel,
                schemaOptions: {
                    collection: 'User'
                }
            }
        ]),
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: getJWTConfig,
        }),
    ]
})
export class AuthModule {
}
