import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from '../auth/user.decorator';
import { User as UserEntity } from '../users/user.entity';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) { }


    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() createPostDto: CreatePostDto, @User() user: UserEntity) {
        return this.postsService.create(createPostDto, user);
    }

    @Get()
    findAll() {
        return this.postsService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
        return this.postsService.update(+id, updatePostDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.postsService.delete(+id);
    }

}
