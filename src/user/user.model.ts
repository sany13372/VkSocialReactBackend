import {prop, Ref} from "@typegoose/typegoose"
import {Base, TimeStamps} from "@typegoose/typegoose/lib/defaultClasses"
import {PostModel} from "../post/post.model";

export interface UserModel extends Base{}

export class UserModel extends TimeStamps {
    @prop()
    name:string
    @prop()
    lastName:string
    @prop({unique:true})
    email:string
    @prop()
    password:string
    @prop()
    avatar:string
    @prop()
    city:string
    @prop()
    birthDay:string
    @prop()
    educational:string
    @prop({ref:() => PostModel})
    posts:Ref<PostModel>[]
    @prop({ref:() => UserModel})
    friends:Ref<UserModel>[]
}
