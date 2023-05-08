import {prop, Ref} from "@typegoose/typegoose"
import {Base, TimeStamps} from "@typegoose/typegoose/lib/defaultClasses"
import {UserModel} from "../user/user.model";
import {PostModel} from "../post/post.model";

export interface LikeModel extends Base{}

export class LikeModel extends TimeStamps {
    @prop({ref:() => PostModel})
    post:Ref<PostModel>
    @prop({ref:() => UserModel})
    user:Ref<UserModel>
}
