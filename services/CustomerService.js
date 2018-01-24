"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const popsicle = require("popsicle");
class CustomerService {
    constructor(host, port) {
        this.host = host;
        this.port = port;
    }
    getCustomerByCustomerId(customerId) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/getCustomerByCustomerId/${customerId}`,
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                },
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status === 404) {
                    resolve(null);
                }
                else {
                    resolve(result.body);
                }
            })
                .catch((error) => {
                reject(new Error('failed to retrieve customer from customer service'));
            });
        });
    }
    getCustomerByTagId(tagId) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/getCustomerByTagId/${tagId}`,
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                },
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status === 404) {
                    resolve(null);
                }
                else {
                    resolve(result.body);
                }
            })
                .catch((error) => {
                reject(new Error('failed to retrieve customer from customer service'));
            });
        });
    }
    getProfilePicture(customerId) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/customer/${customerId}/profilePicture`,
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                },
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status === 200) {
                    resolve(result.body);
                }
                else {
                    reject(new Error('failed to retrieve profile picture from customer service'));
                }
            })
                .catch((error) => {
                reject(new Error('failed to retrieve profile picture from customer service'));
            });
        });
    }
    updateAddress(customerId, address) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/customer/${customerId}/address`,
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                },
                body: address
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status !== 204) {
                    reject(new Error('failed to update address at customer service'));
                }
                else {
                    resolve();
                }
            })
                .catch((error) => {
                reject(new Error('failed to update address at customer service'));
            });
        });
    }
    updateBankAccount(customerId, bankAccount) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/customer/${customerId}/bankAccount`,
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                },
                body: bankAccount
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status !== 204) {
                    reject(new Error('failed to update bank account at customer service'));
                }
                else {
                    resolve();
                }
            })
                .catch((error) => {
                reject(new Error('failed to update bank account at customer service'));
            });
        });
    }
    updateContactData(customerId, contact) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/customer/${customerId}/contact`,
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                },
                body: contact
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status !== 204) {
                    reject(new Error('failed to update contact data at customer service'));
                }
                else {
                    resolve();
                }
            })
                .catch((error) => {
                reject(new Error('failed to update contact data at customer service'));
            });
        });
    }
}
exports.CustomerService = CustomerService;
