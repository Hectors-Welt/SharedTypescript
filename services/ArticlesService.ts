import { IArticlesService } from '../interfaces/IArticlesService'
import { BookingInformation } from '../models/ArticlesService/BookingInformation'
import { Article } from '../models/ArticlesService/Article'
import { ApiClient } from './ApiClient';

export class ArticlesService implements IArticlesService {
  baseUrl: string;

  constructor(private host: string, private port: number) {
    this.baseUrl = `http://${host}:${port}`;
  }

  async getArticles(): Promise<Article[]> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/getArticles`);
    } catch (err) {
      throw new Error('failed to retrieve articles from articles service');
    }
  }

  async lookupBookingInformation(customerId: number, articleId: number): Promise<BookingInformation> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/getBookingInformationForArticleId/${articleId}/AndCustomerId/${customerId}`);
    } catch (err) {
      throw new Error('failed to retrieve booking information from articles service');
    }
  }

  async bookArticle(customerId: number, articleId: number, note: string, employeeId: number): Promise<void> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/bookArticle`, {
        customerId,
        articleId,
        note,
        employeeId,
      });
    } catch (err) {
      throw new Error('failed to book article at articles service');
    }
  }
}