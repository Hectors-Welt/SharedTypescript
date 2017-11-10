"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const popsicle = require("popsicle");
class SMSService {
    constructor(host, port) {
        this.host = host;
        this.port = port;
        this.headers = {
            'content-type': 'application/json',
            'accept': 'application/json',
        };
    }
    sendSMS(request) {
        return popsicle.request({
            url: `http://${this.host}:${this.port}/api/sendSMS`,
            method: 'POST',
            headers: this.headers,
            body: request,
        })
            .use(popsicle.plugins.parse('json'))
            .then(result => result.body)
            .catch(() => new Error('failed to call sendSMS on sms service'));
    }
    getJobs() {
        return popsicle.request({
            url: `http://${this.host}:${this.port}/api/jobs`,
            method: 'GET',
            headers: this.headers,
        })
            .use(popsicle.plugins.parse('json'))
            .then(result => result.body)
            .catch(() => new Error('failed to call getJobs on sms service'));
    }
    getJob(id) {
        return popsicle.request({
            url: `http://${this.host}:${this.port}/api/jobs/${id}`,
            method: 'GET',
            headers: this.headers,
        })
            .use(popsicle.plugins.parse('json'))
            .then(result => result.body)
            .catch(() => new Error('failed to call getJob on sms service'));
    }
    deleteJob(id) {
        return popsicle.request({
            url: `http://${this.host}:${this.port}/api/jobs/${id}`,
            method: 'DELETE',
            headers: this.headers,
        })
            .then(result => result.body)
            .catch(() => new Error('failed to call deleteJob on sms service'));
    }
}
exports.SMSService = SMSService;
