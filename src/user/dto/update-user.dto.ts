import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto  {
    email:string
    password:string
    name: string
    lastName: string
    avatar:string
    city:string
    birthDay:string
    educational:string
}

export class ToggleFriendDto{
    userId:string
    friendId:string
}
