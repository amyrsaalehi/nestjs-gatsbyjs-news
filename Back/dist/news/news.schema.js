"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsSchema = void 0;
const mongoose = require("mongoose");
exports.NewsSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true
    },
    link: String,
    description: String,
    content: String,
    source: String,
    author: String,
    image: String,
    date: String,
});
//# sourceMappingURL=news.schema.js.map