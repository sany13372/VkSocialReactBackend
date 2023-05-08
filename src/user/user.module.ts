import {Module} from '@nestjs/common';
import {UserService} from './user.service';
import {UserController} from './user.controller';
import {UserModel} from "./user.model";
import {TypegooseModule} from "nestjs-typegoose";

@Module({
    controllers: [UserController],
    providers: [UserService],
    imports: [TypegooseModule.forFeature([
        {
            schemaOptions: {
                collection: 'User'
            },
            typegooseClass: UserModel
        }
    ])]
})
export class UserModule {
}
