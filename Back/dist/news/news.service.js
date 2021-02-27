"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let NewsService = class NewsService {
    constructor(newsModel) {
        this.newsModel = newsModel;
    }
    async createFavorate(createNewsDto) {
        const createdNews = new this.newsModel(createNewsDto);
        return createdNews.save();
    }
    async getFavorates() {
        return this.newsModel.find().exec();
    }
    async getNews(title) {
        return axios_1.default.get(`http://newsapi.org/v2/everything?q=${title}&sortBy=publishedAt&apiKey=${process.env.API_KEY}`)
            .then(data => data.data);
    }
    async deleteFavorate(id) {
        return this.newsModel.findByIdAndDelete(id);
    }
};
NewsService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('NEWS_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], NewsService);
exports.NewsService = NewsService;
//# sourceMappingURL=news.service.js.map