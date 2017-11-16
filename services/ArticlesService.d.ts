import { IArticlesService } from '../interfaces/IArticlesService';
import { BookingInformation } from '../models/ArticlesService/BookingInformation';
import { Article } from '../models/ArticlesService/Article';
export declare class ArticlesService implements IArticlesService {
    private host;
    private port;
    constructor(host: string, port: number);
    getArticles(): Promise<Article[]>;
    lookupBookingInformation(customerId: number, articleId: number): Promise<BookingInformation>;
    bookArticle(customerId: number, articleId: number, note: string, employeeId: number): Promise<void>;
}
