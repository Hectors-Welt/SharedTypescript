"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const popsicle = require("popsicle");
class LegacyAppsiteBackend {
    constructor(host, port) {
        this.host = host;
        this.port = port;
    }
    login(loginRequest) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/login`,
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                },
                body: loginRequest
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status !== 200) {
                    reject(new Error('failed to login at legacy appsite backend'));
                }
                else {
                    resolve(result.body);
                }
            })
                .catch((error) => {
                reject(new Error('failed to login at legacy appsite backend'));
            });
        });
    }
}
exports.LegacyAppsiteBackend = LegacyAppsiteBackend;
