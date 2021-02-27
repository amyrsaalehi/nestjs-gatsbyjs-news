import { Controller, Get, Post, Body, Param, Query, Delete } from '@nestjs/common';
import { title } from 'process';
import { CreateNewsDto } from './createNews.dto';
import { News } from './news.interface';
import { NewsService } from './news.service'

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) { }

  @Get()
  getNews(@Query('title') title): Promise<News[]> {
    return this.newsService.getNews(title)
  }

  @Get('favorate')
  getFavorates(): Promise<News[]> {
    return this.newsService.getFavorates();
  }

  @Post('favorate')
  createFavorate(@Body() bodyData: CreateNewsDto): Promise<News> {
    return this.newsService.createFavorate(bodyData)
  }

  @Delete('favorate/:id')
  deleteFavorate(@Param('id') id: string): Promise<News> {
    return this.newsService.deleteFavorate(id);
  }
}