"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const popsicle = require("popsicle");
class MailingService {
    constructor(host, port) {
        this.host = host;
        this.port = port;
    }
    sendEmail(request) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/api/sendEmail`,
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                },
                body: request
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                resolve(result.body);
            })
                .catch((error) => {
                reject(new Error('failed to call sendEmail on mailing service'));
            });
        });
    }
}
exports.MailingService = MailingService;
