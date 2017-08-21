"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const popsicle = require("popsicle");
class ArticlesService {
    constructor(host, port) {
        this.host = host;
        this.port = port;
    }
    lookupBookingInformation(customerId, articleId) {
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
        });
    }
    bookArticle(customerId, articleId) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/bookArticle`,
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                },
                json: {
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
        });
    }
}
exports.ArticlesService = ArticlesService;
