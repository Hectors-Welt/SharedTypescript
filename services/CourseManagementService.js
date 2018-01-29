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
                url: `http://${this.host}:${this.port}/classes/filter`,
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                },
                body: filter
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status == 200) {
                    resolve(result.body);
                }
                else {
                    reject(new Error('failed to get classes from course management service'));
                }
            })
                .catch((error) => {
                reject(new Error('failed to get classes from course management service'));
            });
        });
    }
    getPriceInformation(classId, customerId) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/classes/${classId}/priceInformationForCustomerId/${customerId}`,
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                }
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status == 200) {
                    resolve(result.body);
                }
                else {
                    reject(new Error('failed to get priceinformation from course management service'));
                }
            })
                .catch((error) => {
                reject(new Error('failed to get priceinformation from course management service'));
            });
        });
    }
    doReservation(classId, customerId) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/classes/${classId}/doReservationForCustomerId/${customerId}`,
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                }
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status == 200) {
                    resolve(result.body);
                }
                else {
                    reject(new Error('failed to do reservation at course management service'));
                }
            })
                .catch((error) => {
                reject(new Error('failed to do reservation at course management service'));
            });
        });
    }
    getCourses() {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/courses`,
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                }
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status == 200) {
                    resolve(result.body);
                }
                else {
                    reject(new Error('failed to get courses from course management service'));
                }
            })
                .catch((error) => {
                reject(new Error('failed to get courses from course management service'));
            });
        });
    }
    getCourseTypes() {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/courseTypes`,
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                }
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status == 200) {
                    resolve(result.body);
                }
                else {
                    reject(new Error('failed to get course types from course management service'));
                }
            })
                .catch((error) => {
                reject(new Error('failed to get course types from course management service'));
            });
        });
    }
    getCourseLevels() {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/courseLevels`,
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                }
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status == 200) {
                    resolve(result.body);
                }
                else {
                    reject(new Error('failed to get course levels from course management service'));
                }
            })
                .catch((error) => {
                reject(new Error('failed to get course levels from course management service'));
            });
        });
    }
    getRooms() {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/rooms`,
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                }
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status == 200) {
                    resolve(result.body);
                }
                else {
                    reject(new Error('failed to get rooms from course management service'));
                }
            })
                .catch((error) => {
                reject(new Error('failed to get rooms from course management service'));
            });
        });
    }
}
exports.CourseManagementService = CourseManagementService;
