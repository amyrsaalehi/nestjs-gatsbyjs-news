"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newsProviders = void 0;
const news_schema_1 = require("./news.schema");
exports.newsProviders = [
    {
        provide: 'NEWS_MODEL',
        useFactory: (connection) => connection.model('News', news_schema_1.NewsSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=news.providers.js.map