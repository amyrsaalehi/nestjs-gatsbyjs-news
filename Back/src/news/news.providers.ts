import { Connection } from 'mongoose';
import { NewsSchema } from './news.schema';

export const newsProviders = [
  {
    provide: 'NEWS_MODEL',
    useFactory: (connection: Connection) => connection.model('News', NewsSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];