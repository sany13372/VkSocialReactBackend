import {prop, Ref} from "@typegoose/typegoose";
import {PostModel} from "../../post/post.model";

export class CreateUserDto {
    email:string
    password:string
    name: string
    lastName: string
    avatar:string
    city:string
    birthDay:string
    educational:string
    //posts:any
}
