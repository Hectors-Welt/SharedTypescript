"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const popsicle = require("popsicle");
class EmployeesService {
    constructor(host, port) {
        this.host = host;
        this.port = port;
    }
    validateEmployeeByCredentials(name, surname, password) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/validateEmployeeByCredentials`,
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                },
                body: {
                    name,
                    surname,
                    password
                }
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status !== 200) {
                    reject(new Error('failed to validate credentials at employees service'));
                }
                else {
                    resolve(result.body);
                }
            })
                .catch((error) => {
                reject(new Error('failed to validate credentials at employees service'));
            });
        });
    }
    getEmployeeByCustomerId(customerId) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/getEmployeeByCustomerId/${customerId}`,
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                },
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status !== 200) {
                    reject(new Error(`failed to retrieve employee from employees service`));
                }
                resolve(result.body);
            })
                .catch((error) => {
                reject(new Error(`failed to retrieve employee from employees service: ${error.message}`));
            });
        });
    }
    getEmployeesPresent(studioId) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/getEmployeesPresentInClub/${studioId}`,
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                },
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status !== 200) {
                    reject(new Error(`failed to retrieve employees from employees service`));
                }
                resolve(result.body);
            })
                .catch((error) => {
                reject(new Error(`failed to retrieve employees from employees service: ${error.message}`));
            });
        });
    }
}
exports.EmployeesService = EmployeesService;
