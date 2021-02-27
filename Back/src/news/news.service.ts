import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { News } from './news.interface';
import { CreateNewsDto } from './createNews.dto';

import parser from 'fast-xml-parser'
import he from 'he'
import axios from 'axios'

@Injectable()
export class NewsService {
  constructor(
    @Inject('NEWS_MODEL')
    private newsModel: Model<News>,
  ) { }

  async createFavorate(createNewsDto: CreateNewsDto): Promise<News> {
    const createdNews = new this.newsModel(createNewsDto);
    return createdNews.save();
  }

  async getFavorates(): Promise<News[]> {
    return this.newsModel.find().exec();
  }

  async getNews(title: string): Promise<News[]> {
    return axios.get(`http://newsapi.org/v2/everything?q=${title}&sortBy=publishedAt&apiKey=${process.env.API_KEY}`)
      .then(data => data.data)
  }

  async deleteFavorate(id: string): Promise<News> {
    return this.newsModel.findByIdAndDelete(id);
  }
}