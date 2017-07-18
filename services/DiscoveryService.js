"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const popsicle = require("popsicle");
const EventStoreSettings_1 = require("../models/EventStoreSettings");
const MongoDbSettings_1 = require("../models/MongoDbSettings");
const CustomerService_1 = require("../services/CustomerService");
const EmployeesService_1 = require("../services/EmployeesService");
class DiscoveryService {
    constructor(host, port) {
        this.host = host;
        this.port = port;
    }
    startSelfRegistration(serviceName, serviceVersion, servicePort) {
        this.timer = setInterval(() => this.registerService(serviceName, serviceVersion, servicePort)
            .catch((error) => {
            clearInterval(this.timer);
        }), 5 * 1000);
    }
    getEventStoreSettings() {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/eventstore`,
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json'
                },
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status !== 200) {
                    reject(new Error(`failed to retrieve eventstore settings from discovery service`));
                }
                resolve(new EventStoreSettings_1.default(result.body));
            })
                .catch((error) => {
                reject(new Error(`failed to retrieve eventstore settings from discovery service: ${error.message}`));
            });
        });
    }
    getMongoDbSettings() {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/mongodb`,
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json'
                },
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status !== 200) {
                    reject(new Error(`failed to retrieve mongodb settings from discovery service`));
                }
                resolve(new MongoDbSettings_1.default(result.body));
            })
                .catch((error) => {
                reject(new Error(`failed to retrieve mongodb settings from discovery service: ${error.message}`));
            });
        });
    }
    getCustomerService() {
        return new Promise((resolve, reject) => {
            if (!this.customerService) {
                popsicle.request({
                    url: `http://${this.host}:${this.port}/CustomerService`,
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json',
                        'accept': 'application/json'
                    },
                })
                    .use(popsicle.plugins.parse('json'))
                    .then((result) => {
                    this.customerService = new CustomerService_1.default(result.body.host, result.body.port);
                    resolve(this.customerService);
                })
                    .catch((error) => {
                    reject(new Error("failed to retrieve customer service from discovery service"));
                });
            }
            else {
                resolve(this.customerService);
            }
        });
    }
    getEmployeesService() {
        return new Promise((resolve, reject) => {
            if (!this.employeesService) {
                popsicle.request({
                    url: `http://${this.host}:${this.port}/EmployeesService`,
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json',
                        'accept': 'application/json'
                    },
                })
                    .use(popsicle.plugins.parse('json'))
                    .then((result) => {
                    this.employeesService = new EmployeesService_1.default(result.body.host, result.body.port);
                    resolve(this.employeesService);
                })
                    .catch((error) => {
                    reject(new Error("failed to retrieve employees service from discovery service"));
                });
            }
            else {
                resolve(this.employeesService);
            }
        });
    }
    registerService(serviceName, serviceVersion, servicePort) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/`,
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json'
                },
                body: {
                    serviceName: serviceName,
                    port: servicePort,
                    timeToLive: new Date(new Date().getTime() + (5 * 1000)).toJSON(),
                    serviceVersion: serviceVersion,
                    public: false,
                    serviceType: 0,
                    proxyRoute: null
                }
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                resolve();
            })
                .catch((error) => {
                reject(new Error(`could not reach DiscoveryService: ${error.message}`));
            });
        });
    }
}
exports.default = DiscoveryService;
