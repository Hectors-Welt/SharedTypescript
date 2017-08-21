import { IArticlesService } from '../interfaces/IArticlesService';
import { BookingInformation } from '../models/ArticlesService/BookingInformation';
export declare class ArticlesService implements IArticlesService {
    private host;
    private port;
    constructor(host: string, port: number);
    lookupBookingInformation(customerId: number, articleId: number): Promise<BookingInformation>;
}
