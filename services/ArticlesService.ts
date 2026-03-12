import { IArticlesService } from '../interfaces/IArticlesService';
import { BookingInformation } from '../models/ArticlesService/BookingInformation';
import { Article } from '../models/ArticlesService/Article';
import { ApiClient } from './ApiClient';
import { BookArticleCommandResult } from '../models/ArticlesService/BookArticleCommandResult';

export class ArticlesService implements IArticlesService {
  host: string;
  port: number;
  version: string;
  baseUrl: string;

  constructor(host: string, port: number, version: string) {
    this.host = host;
    this.port = port;
    this.version = version;
    this.baseUrl = `http://${host}:${port}`;
  }

  async getArticles(): Promise<Article[]> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/articles`);
    } catch (err) {
      throw new Error('failed to retrieve articles from articles service');
    }
  }

  async getArticle(articleId: number): Promise<Article> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/articles/${articleId}`);
    } catch (err) {
      throw new Error('failed to retrieve article from articles service');
    }
  }

  async lookupBookingInformation(customerId: number, articleId: number): Promise<BookingInformation> {
    try {
      return await ApiClient.GET(
        `${this.baseUrl}/customers/${customerId}/bookingInformations/${articleId}`,
      );
    } catch (err) {
      throw new Error('failed to retrieve booking information from articles service');
    }
  }

  async bookArticle(customerId: number, articleId: number, note: string, employeeId: number, recruiter?: number, createSystem?: number, price?: number): Promise<BookArticleCommandResult> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/commands/bookArticle`, {
        customerId,
        articleId,
        note,
        employeeId,
        recruiter,
        createSystem,
        price,
      });
    } catch (err) {
      throw new Error('failed to book article at articles service');
    }
  }
}
