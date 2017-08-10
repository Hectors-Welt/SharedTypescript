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
    getAppsettings() {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/config/appsettings`,
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                }
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status !== 200) {
                    reject(new Error('failed to get appsettings from legacy appsite backend'));
                }
                else {
                    resolve(result.body);
                }
            })
                .catch((error) => {
                reject(new Error('failed to get appsettings from legacy appsite backend'));
            });
        });
    }
    getCoursetypes() {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/config/coursetypes`,
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                }
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status !== 200) {
                    reject(new Error('failed to get coursetypes from legacy appsite backend'));
                }
                else {
                    resolve(result.body);
                }
            })
                .catch((error) => {
                reject(new Error('failed to get coursetypes from legacy appsite backend'));
            });
        });
    }
    getCourselevels() {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/config/courselevels`,
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                }
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status !== 200) {
                    reject(new Error('failed to get courselevels from legacy appsite backend'));
                }
                else {
                    resolve(result.body);
                }
            })
                .catch((error) => {
                reject(new Error('failed to get courselevels from legacy appsite backend'));
            });
        });
    }
    getClubs() {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/clubs`,
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                }
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status !== 200) {
                    reject(new Error('failed to get clubs from legacy appsite backend'));
                }
                else {
                    resolve(result.body);
                }
            })
                .catch((error) => {
                reject(new Error('failed to get clubs from legacy appsite backend'));
            });
        });
    }
    getInstructors(clubId) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/clubs/${clubId}/instructors`,
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                }
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status !== 200) {
                    reject(new Error('failed to get instructors from legacy appsite backend'));
                }
                else {
                    resolve(result.body);
                }
            })
                .catch((error) => {
                reject(new Error('failed to get instructors from legacy appsite backend'));
            });
        });
    }
    getRooms(clubId) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/clubs/${clubId}/rooms`,
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                }
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status !== 200) {
                    reject(new Error('failed to get rooms from legacy appsite backend'));
                }
                else {
                    resolve(result.body);
                }
            })
                .catch((error) => {
                reject(new Error('failed to get rooms from legacy appsite backend'));
            });
        });
    }
    getCourses(clubId) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/clubs/${clubId}/courses`,
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                }
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status !== 200) {
                    reject(new Error('failed to get courses from legacy appsite backend'));
                }
                else {
                    resolve(result.body);
                }
            })
                .catch((error) => {
                reject(new Error('failed to get courses from legacy appsite backend'));
            });
        });
    }
}
exports.LegacyAppsiteBackend = LegacyAppsiteBackend;
