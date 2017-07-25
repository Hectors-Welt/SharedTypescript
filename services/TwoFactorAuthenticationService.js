"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const popsicle = require("popsicle");
class TwoFactorAuthenticationService {
    constructor(host, port) {
        this.host = host;
        this.port = port;
    }
    generateToken(key) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/api/token/generate`,
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                },
                body: {
                    key
                }
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status === 200) {
                    resolve(result.body.token);
                }
                else {
                    reject(new Error("two factor authentication service responded with status " + result.status));
                }
            })
                .catch((error) => {
                reject(new Error('failed to retrieve token from two factor authentication service'));
            });
        });
    }
    validateToken(key, token) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/api/token/validate`,
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                },
                body: {
                    key,
                    token
                }
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status === 200)
                    resolve(true);
                else
                    resolve(false);
            })
                .catch((error) => {
                reject(new Error('failed to validate token by two factor authentication service'));
            });
        });
    }
}
exports.TwoFactorAuthenticationService = TwoFactorAuthenticationService;
