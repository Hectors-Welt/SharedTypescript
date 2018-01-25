"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const popsicle = require("popsicle");
class CourseManagementService {
    constructor(host, port) {
        this.host = host;
        this.port = port;
    }
    getClasses(filter) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/getClasses`,
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                },
                body: filter
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                resolve(result.body);
            })
                .catch((error) => {
                reject(new Error('failed to get classes from course management service'));
            });
        });
    }
}
exports.CourseManagementService = CourseManagementService;
