import { IArticlesService } from '../interfaces/IArticlesService';
import { BookingInformation } from '../models/ArticlesService/BookingInformation';
import { Article } from '../models/ArticlesService/Article';
export declare class ArticlesService implements IArticlesService {
    host: string;
    port: number;
    version: string;
    baseUrl: string;
    constructor(host: string, port: number, version: string);
    getArticles(): Promise<Article[]>;
    lookupBookingInformation(customerId: number, articleId: number): Promise<BookingInformation>;
    bookArticle(customerId: number, articleId: number, note: string, employeeId: number): Promise<void>;
}
