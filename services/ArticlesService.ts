import * as popsicle from 'popsicle'
import { IArticlesService } from '../interfaces/IArticlesService'
import { BookingInformation } from '../models/ArticlesService/BookingInformation'
import { Article } from '../models/ArticlesService/Article'

export class ArticlesService implements IArticlesService {
  constructor(private host: string, private port: number) { }

  getArticles(): Promise<Article[]> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/getArticles`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        },
      })
        .use(popsicle.plugins.parse('json'))
        .then((result) => {
          resolve(result.body);
        })
        .catch((error) => {
          reject(new Error('failed to retrieve articles from articles service'));
        });
    })
  }

  lookupBookingInformation(customerId: number, articleId: number): Promise<BookingInformation> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/getBookingInformationForArticleId/${articleId}/AndCustomerId/${customerId}`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        },
      })
        .use(popsicle.plugins.parse('json'))
        .then((result) => {
          resolve(result.body);
        })
        .catch((error) => {
          reject(new Error('failed to retrieve booking information from articles service'));
        });
    })
  }

  bookArticle(customerId: number, articleId: number): Promise<void> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/bookArticle`,
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        },
        body: {
          customerId: customerId,
          articleId: articleId,
          note: 'Snacky-Buchung',
          employeeId: -6
        }
      })
        .use(popsicle.plugins.parse('json'))
        .then((result) => {
          resolve(result.body);
        })
        .catch((error) => {
          reject(new Error('failed to book article at articles service'));
        });
    })
  }
}