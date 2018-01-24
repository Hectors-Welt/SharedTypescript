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
                url: `http://${this.host}:${this.port}/getClubAccountInformationByCustomerId/${customerId}`,
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
    getSepaBookings(customerId) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/getSepaBookingsByCustomerId/${customerId}`,
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
                reject(new Error('failed to retrieve sepa bookings from accounting service'));
            });
        });
    }
    getSalesInfo(customerId, days) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/getSalesInfoByCustomerId/${customerId}/ForTheLast/${days}/Days`,
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
                reject(new Error('failed to retrieve sepa bookings from accounting service'));
            });
        });
    }
}
exports.AccountingService = AccountingService;
