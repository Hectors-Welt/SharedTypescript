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
      return await ApiClient.GET(`${this.baseUrl}/getArticles`);
    } catch (err) {
      throw new Error('failed to retrieve articles from articles service');
    }
  }

  async lookupBookingInformation(customerId: number, articleId: number): Promise<BookingInformation> {
    try {
      return await ApiClient.GET(
        `${this.baseUrl}/getBookingInformationForArticleId/${articleId}/AndCustomerId/${customerId}`,
      );
    } catch (err) {
      throw new Error('failed to retrieve booking information from articles service');
    }
  }

  async bookArticle(customerId: number, articleId: number, note: string, employeeId: number, recruiter?: number, createSystem?: number): Promise<BookArticleCommandResult> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/bookArticle`, {
        customerId,
        articleId,
        note,
        employeeId,
        recruiter,
        createSystem,
      });
    } catch (err) {
      throw new Error('failed to book article at articles service');
    }
  }
}
