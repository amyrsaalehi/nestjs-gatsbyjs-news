import { CreateNewsDto } from './createNews.dto';
import { News } from './news.interface';
import { NewsService } from './news.service';
export declare class NewsController {
    private readonly newsService;
    constructor(newsService: NewsService);
    getNews(title: any): Promise<News[]>;
    getFavorates(): Promise<News[]>;
    createFavorate(bodyData: CreateNewsDto): Promise<News>;
    deleteFavorate(id: string): Promise<News>;
}
