import {Injectable} from '@nestjs/common';
import {InjectModel} from "nestjs-typegoose";
import {ModelType} from "@typegoose/typegoose/lib/types";
import {CreatePostDto} from "./post.dto";
import {PostModel} from "./post.model";
import {UserModel} from "../user/user.model";

@Injectable()
export class PostService {

    constructor(
        @InjectModel(PostModel) private readonly PostModel: ModelType<PostModel>,
        @InjectModel(UserModel) private readonly UserModel: ModelType<UserModel>
    ) {
    }

    findAll() {
        return this.PostModel.find();
    }

    findOne(id: string) {
        return this.PostModel.findById(id).exec();
    }

    byUser(_id:string){
        return this.PostModel.find({user:_id}).exec();
    }

    async create(postDto: CreatePostDto) {
        const user = await this.UserModel.findById(postDto.user).exec()
        console.log(user)
        postDto.user = user
        return this.PostModel.create(postDto)
    }

    async update(id: string, postDto: CreatePostDto) {

        const post = await this.PostModel.findById(id)

        post.description = postDto.description
        post.image = postDto.image

        await post.save()

        return post
    }

    remove(id: string) {
        return this.PostModel.findByIdAndDelete(id).exec()
    }
}
