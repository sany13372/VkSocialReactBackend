import {Body, Controller, Delete, Get, Param, Put,Post} from '@nestjs/common';
import {LikesService} from "./likes.service";
import {CreateLikeDto} from "./likes.dto";
import {CreatePostDto} from "../post/post.dto";

@Controller('likes')
export class LikesController {
    constructor(private readonly LikesService: LikesService) {
    }

    @Post('check')
    create(@Body() CreateLikeDto: CreateLikeDto) {
        return this.LikesService.checkExists(CreateLikeDto.postId,CreateLikeDto.userId);
    }

    @Get('count/:id')
    findAll(@Param('id') id: string) {
        return this.LikesService.getAllCount(id);
    }

    @Post('create')
    findById(@Body() CreateLikeDto: CreateLikeDto) {
        return this.LikesService.create(CreateLikeDto.postId,CreateLikeDto.userId);
    }

    @Post('deleted')
    remove(@Body() CreateLikeDto: CreateLikeDto) {
        return this.LikesService.deleted(CreateLikeDto.postId,CreateLikeDto.userId);
    }
}
