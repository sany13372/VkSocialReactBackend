import {Module} from '@nestjs/common';
import {TypegooseModule} from "nestjs-typegoose";
import {PostService} from "./post.service";
import {UserModel} from "../user/user.model";
import {PostModel} from "./post.model";
import {PostController} from "./post.controller";
//import {UserController} from "../user/user.controller";

@Module({
    controllers: [PostController],
    providers: [PostService],
    imports: [TypegooseModule.forFeature([
        {
            schemaOptions: {
                collection: 'User'
            },
            typegooseClass: UserModel
        },
        {
            schemaOptions: {
                collection: 'Post'
            },
            typegooseClass: PostModel
        }
    ])]
})
export class PostModule {
}
