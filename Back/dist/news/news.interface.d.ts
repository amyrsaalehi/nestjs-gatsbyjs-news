import { Document } from 'mongoose';
export interface News extends Document {
    readonly title: string;
    readonly link: string;
    readonly description: string;
    readonly content: string;
    readonly source: string;
    readonly author: string;
    readonly image: string;
    readonly date: string;
}
