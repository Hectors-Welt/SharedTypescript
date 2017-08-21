"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const popsicle = require("popsicle");
class CheckinOutService {
    constructor(host, port) {
        this.host = host;
        this.port = port;
    }
    getCheckinStatus(customerId) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/getCheckinStatus/${customerId}`,
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
                reject(new Error('failed to retrieve checkin status from checkinout service'));
            });
        });
    }
}
exports.CheckinOutService = CheckinOutService;
