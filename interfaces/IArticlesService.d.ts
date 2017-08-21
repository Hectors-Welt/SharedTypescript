import { BookingInformation } from '../models/ArticlesService/BookingInformation';
export interface IArticlesService {
    lookupBookingInformation(customerId: number, articleId: number): Promise<BookingInformation>;
    bookArticle(customerId: number, articleId: number): Promise<void>;
}
