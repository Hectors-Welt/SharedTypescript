"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApiClient_1 = require("./ApiClient");
class ArticlesService {
    constructor(host, port) {
        this.host = host;
        this.port = port;
        this.baseUrl = `http://${host}:${port}`;
    }
    getArticles() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/getArticles`);
            }
            catch (err) {
                throw new Error('failed to retrieve articles from articles service');
            }
        });
    }
    lookupBookingInformation(customerId, articleId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/getBookingInformationForArticleId/${articleId}/AndCustomerId/${customerId}`);
            }
            catch (err) {
                throw new Error('failed to retrieve booking information from articles service');
            }
        });
    }
    bookArticle(customerId, articleId, note, employeeId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/bookArticle`, {
                    customerId,
                    articleId,
                    note,
                    employeeId,
                });
            }
            catch (err) {
                throw new Error('failed to book article at articles service');
            }
        });
    }
}
exports.ArticlesService = ArticlesService;
