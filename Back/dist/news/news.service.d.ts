import { Model } from 'mongoose';
import { News } from './news.interface';
import { CreateNewsDto } from './createNews.dto';
export declare class NewsService {
    private newsModel;
    constructor(newsModel: Model<News>);
    createFavorate(createNewsDto: CreateNewsDto): Promise<News>;
    getFavorates(): Promise<News[]>;
    getNews(title: string): Promise<News[]>;
    deleteFavorate(id: string): Promise<News>;
}
