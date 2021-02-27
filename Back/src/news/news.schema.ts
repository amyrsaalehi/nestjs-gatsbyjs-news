import * as mongoose from 'mongoose';

export const NewsSchema = new mongoose.Schema({
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