import { Module } from '@nestjs/common';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';
import { newsProviders } from './news.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [NewsController],
  providers: [
    NewsService,
    ...newsProviders,
  ],
})
export class NewsModule {}