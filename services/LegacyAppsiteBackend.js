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
                    reject(result.body);
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
    getSession(accesstoken) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/session`,
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                    'appsite-access-token': accesstoken
                }
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status !== 200) {
                    reject(result.body);
                }
                else {
                    resolve(result.body);
                }
            })
                .catch((error) => {
                reject(new Error('failed to get session from legacy appsite backend'));
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
                    reject(result.body);
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
                    reject(result.body);
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
                    reject(result.body);
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
                    reject(result.body);
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
                    reject(result.body);
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
                    reject(result.body);
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
                    reject(result.body);
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
    getClasses(clubId, filter, accesstoken) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/clubs/${clubId}/classes`,
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                    'appsite-access-token': accesstoken
                },
                body: filter
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status !== 200) {
                    reject(result.body);
                }
                else {
                    resolve(result.body);
                }
            })
                .catch((error) => {
                reject(new Error('failed to get classes from legacy appsite backend'));
            });
        });
    }
    getClass(clubId, classId, accesstoken) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/clubs/${clubId}/classes/${classId}`,
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                    'appsite-access-token': accesstoken
                }
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status !== 200) {
                    reject(result.body);
                }
                else {
                    resolve(result.body);
                }
            })
                .catch((error) => {
                reject(new Error('failed to get class from legacy appsite backend'));
            });
        });
    }
    getPriceInformation(clubId, classId, accesstoken) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/clubs/${clubId}/classes/${classId}/priceinformation`,
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                    'appsite-access-token': accesstoken
                }
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status !== 200) {
                    reject(result.body);
                }
                else {
                    resolve(result.body);
                }
            })
                .catch((error) => {
                reject(new Error('failed to get price information from legacy appsite backend'));
            });
        });
    }
    doReservation(clubId, classId, accesstoken, password) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/clubs/${clubId}/classes/${classId}/reservation`,
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                    'appsite-access-token': accesstoken
                },
                body: {
                    password
                }
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status !== 200) {
                    reject(result.body);
                }
                else {
                    resolve(result.body);
                }
            })
                .catch((error) => {
                reject(new Error('failed to do reservation on legacy appsite backend'));
            });
        });
    }
    doCancellation(clubId, classId, accesstoken, password) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/clubs/${clubId}/classes/${classId}/cancellation`,
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                    'appsite-access-token': accesstoken
                },
                body: {
                    password
                }
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status !== 200) {
                    reject(result.body);
                }
                else {
                    resolve(result.body);
                }
            })
                .catch((error) => {
                reject(new Error('failed to do cancellation on legacy appsite backend'));
            });
        });
    }
    getProfile(accesstoken) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/member`,
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                    'appsite-access-token': accesstoken
                }
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status !== 200) {
                    reject(result.body);
                }
                else {
                    resolve(result.body);
                }
            })
                .catch((error) => {
                reject(new Error('failed to get member profile from legacy appsite backend'));
            });
        });
    }
    getMemberClasses(accesstoken) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/member/classes`,
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                    'appsite-access-token': accesstoken
                }
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status !== 200) {
                    reject(result.body);
                }
                else {
                    resolve(result.body);
                }
            })
                .catch((error) => {
                reject(new Error('failed to get member classes from legacy appsite backend'));
            });
        });
    }
    getAppointmentCategories(clubId) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/clubs/${clubId}/appointmentCategories`,
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json'
                }
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status !== 200) {
                    reject(result.body);
                }
                else {
                    resolve(result.body);
                }
            })
                .catch((error) => {
                reject(new Error('failed to get appointment categories from legacy appsite backend'));
            });
        });
    }
    getAppointmentTypesByCategory(clubId, categoryId) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/clubs/${clubId}/appointmentCategories/${categoryId}/appointmentTypes`,
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json'
                }
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status !== 200) {
                    reject(result.body);
                }
                else {
                    resolve(result.body);
                }
            })
                .catch((error) => {
                reject(new Error('failed to get appointment types from legacy appsite backend'));
            });
        });
    }
    getInstructorsByAppointmentType(clubId, appointmentTypeId) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/clubs/${clubId}/appointmentTypes/${appointmentTypeId}/instructors`,
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json'
                }
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status !== 200) {
                    reject(result.body);
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
    lookupReservationTimeBlocks(clubId, lookupRequest) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/clubs/${clubId}/appointments/lookupFreeTimeBlocks`,
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json'
                },
                body: lookupRequest
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status !== 200) {
                    reject(result.body);
                }
                else {
                    resolve(result.body);
                }
            })
                .catch((error) => {
                reject(new Error('failed to get free time blocks from legacy appsite backend'));
            });
        });
    }
    bookAppointment(clubId, timeblock, accesstoken) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/clubs/${clubId}/appointments/bookAppointment`,
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                    'appsite-access-token': accesstoken
                },
                body: timeblock
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status !== 200) {
                    reject(result.body);
                }
                else {
                    resolve(result.body);
                }
            })
                .catch((error) => {
                reject(new Error('failed to book appointment at legacy appsite backend'));
            });
        });
    }
}
exports.LegacyAppsiteBackend = LegacyAppsiteBackend;
