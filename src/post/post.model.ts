import {prop, Ref} from "@typegoose/typegoose"
import {Base, TimeStamps} from "@typegoose/typegoose/lib/defaultClasses"
import {UserModel} from "../user/user.model";
import {LikeModel} from "../likes/likes.model";

export interface PostModel extends Base{}

export class PostModel extends TimeStamps {
    @prop({ref:() => UserModel})
    user:Ref<UserModel>
    @prop()
    image:string
    @prop()
    description:string
    @prop({ref:() => LikeModel})
    likes:Ref<LikeModel>
}



