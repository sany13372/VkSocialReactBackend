import {Injectable} from '@nestjs/common';
import {InjectModel} from "nestjs-typegoose";
import {ModelType} from "@typegoose/typegoose/lib/types";
import {LikeModel} from "./likes.model";

@Injectable()
export class LikesService {

    constructor(
        @InjectModel(LikeModel) private readonly LikesModel: ModelType<LikeModel>
    ) {
    }

    async checkExists(postId: string, userId: string) {
        return this.LikesModel.exists({post: postId, user: userId}).exec()
    }

    async getAllCount(postId: string) {
        return this.LikesModel.find({post: postId}).count().exec()
    }

    async create(postId: string, userId: string) {
        return this.LikesModel.create({post: postId, user: userId})
    }

    async deleted(postId: string, userId: string) {
        return this.LikesModel.findOneAndDelete({post: postId, user: userId}).exec()
    }
}
