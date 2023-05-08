import {Module} from '@nestjs/common';
import {TypegooseModule} from "nestjs-typegoose";
import {LikesService} from "./likes.service";
import {UserModel} from "../user/user.model";
import {LikeModel} from "./likes.model";
import {LikesController} from "./likes.controller";
import {PostModel} from "../post/post.model";
//import {UserController} from "../user/user.controller";

@Module({
    controllers: [LikesController],
    providers: [LikesService],
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
        },
        {
            schemaOptions: {
                collection: 'Like'
            },
            typegooseClass: LikeModel
        }
    ])]
})
export class LikesModule {
}
