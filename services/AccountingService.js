"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const popsicle = require("popsicle");
class AccountingService {
    constructor(host, port) {
        this.host = host;
        this.port = port;
    }
    getClubAccountInformation(customerId) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/getClubAccountInformation/${customerId}`,
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
                reject(new Error('failed to retrieve club account information from accounting service'));
            });
        });
    }
}
exports.AccountingService = AccountingService;
