import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {PostService} from "./post.service";
import {CreatePostDto} from "./post.dto";

@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService) {
    }

    @Post()
    create(@Body() createPostDto: CreatePostDto) {
        return this.postService.create(createPostDto);
    }

    @Get()
    findAll() {
        return this.postService.findAll();
    }
    @Get('user/:id')
    findByUser(@Param('id') id: string) {
        return this.postService.byUser(id);
    }

    @Get(':id')
    findById(@Param('id') _id: string) {
        return this.postService.findOne(_id);
    }

    @Put(':id')
    update(@Param('id') id: string, createPostDto: CreatePostDto) {
        return this.postService.update(id, createPostDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.postService.remove(id);
    }
}
