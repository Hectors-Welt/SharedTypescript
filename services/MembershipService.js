"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const popsicle = require("popsicle");
class MembershipService {
    constructor(host, port) {
        this.host = host;
        this.port = port;
    }
    getContractTemplatesAvailable() {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/getContractTemplatesAvailable`,
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json'
                },
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                resolve(result.body);
            })
                .catch((error) => {
                reject(new Error('failed to retrieve contract templates from membership service'));
            });
        });
    }
}
exports.MembershipService = MembershipService;
