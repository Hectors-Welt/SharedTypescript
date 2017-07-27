"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const popsicle = require("popsicle");
class RatingService {
    constructor(host, port) {
        this.host = host;
        this.port = port;
    }
    addRatingResult(ratingResult) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/ratings`,
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                },
                body: ratingResult
            })
                .then((result) => {
                if (result.status === 201)
                    resolve();
                else
                    reject(new Error('failed to send rating result to rating service'));
            })
                .catch((error) => {
                reject(new Error('failed to send rating result to rating service'));
            });
        });
    }
    getRatings(referenceId, ratingItemType) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/ratings/${referenceId}/${ratingItemType}`,
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                }
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status === 200)
                    resolve(result.body);
                else
                    reject(new Error('failed to get rating results from rating service'));
            })
                .catch((error) => {
                reject(new Error('failed to get rating results from rating service'));
            });
        });
    }
}
exports.RatingService = RatingService;
