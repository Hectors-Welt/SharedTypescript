import { BookingInformation } from '../models/ArticlesService/BookingInformation';
import { Article } from '../models/ArticlesService/Article';
import { IService } from './IService';
export interface IArticlesService extends IService {
    getArticles(): Promise<Article[]>;
    lookupBookingInformation(customerId: number, articleId: number): Promise<BookingInformation>;
    bookArticle(customerId: number, articleId: number, note: string, employeeId: number): Promise<void>;
}
