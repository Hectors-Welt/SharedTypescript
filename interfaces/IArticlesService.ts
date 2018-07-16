import { BookingInformation } from '../models/ArticlesService/BookingInformation'
import { Article } from '../models/ArticlesService/Article'

export interface IArticlesService {
  getArticles(): Promise<Article[]>;

  lookupBookingInformation(customerId: number, articleId: number): Promise<BookingInformation>;

  bookArticle(customerId: number, articleId: number, note: string, employeeId: number): Promise<void>;
}