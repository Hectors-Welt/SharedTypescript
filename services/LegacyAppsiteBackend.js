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
    getFruttiAboArticles() {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/config/fruttiaboarticles`,
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
                reject(new Error('failed to get fruttiabo articles from legacy appsite backend'));
            });
        });
    }
    getMembershipTemplates() {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/config/membershipTemplates`,
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
                reject(new Error('failed to get membership templates from legacy appsite backend'));
            });
        });
    }
    getCountries() {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/config/countries`,
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
                reject(new Error('failed to get countries from legacy appsite backend'));
            });
        });
    }
    getTitles() {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/config/titles`,
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
                reject(new Error('failed to get titles from legacy appsite backend'));
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
    getEmployeesPresent(clubId) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/clubs/${clubId}/employeesPresent`,
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
                reject(new Error('failed to get employees from legacy appsite backend'));
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
    getInstructor(clubId, instructorId) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/clubs/${clubId}/instructors/${instructorId}`,
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
                reject(new Error('failed to get instructor from legacy appsite backend'));
            });
        });
    }
    getInstructorPicture(clubId, instructorId) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/clubs/${clubId}/instructors/${instructorId}/picture`,
                method: 'GET',
                headers: {}
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
                reject(new Error('failed to get instructor picture from legacy appsite backend'));
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
                url: `http://${this.host}:${this.port}/me`,
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
    getMemberAvatar(accesstoken) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/me/avatar`,
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
                reject(new Error('failed to get member avatar from legacy appsite backend'));
            });
        });
    }
    getSepaBookings(accesstoken) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/me/sepaBookings`,
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
                reject(new Error('failed to get sepa bookings from legacy appsite backend'));
            });
        });
    }
    getCheckins(accesstoken) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/me/checkins`,
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
                reject(new Error('failed to get checkins from legacy appsite backend'));
            });
        });
    }
    updateAddress(accesstoken, address) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/me/address`,
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                    'appsite-access-token': accesstoken
                },
                body: address
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status !== 204) {
                    reject(result.body);
                }
                else {
                    resolve();
                }
            })
                .catch((error) => {
                reject(new Error('failed to update address at legacy appsite backend'));
            });
        });
    }
    updateBankAccount(accesstoken, bankAccount) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/me/bankAccount`,
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                    'appsite-access-token': accesstoken
                },
                body: bankAccount
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status !== 204) {
                    reject(result.body);
                }
                else {
                    resolve();
                }
            })
                .catch((error) => {
                reject(new Error('failed to update bank account at legacy appsite backend'));
            });
        });
    }
    updateContactData(accesstoken, contactData) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/me/contactData`,
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                    'appsite-access-token': accesstoken
                },
                body: contactData
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status !== 204) {
                    reject(result.body);
                }
                else {
                    resolve();
                }
            })
                .catch((error) => {
                reject(new Error('failed to update contact data at legacy appsite backend'));
            });
        });
    }
    getMemberClasses(accesstoken) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/me/classes`,
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
                if (result.status !== 201) {
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
    lookupCounselingReservationTimeBlocks(clubId, lookupRequest) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/clubs/${clubId}/appointments/lookupFreeCounselingTimeBlocks`,
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
                reject(new Error('failed to get free counseling time blocks from legacy appsite backend'));
            });
        });
    }
    bookCounselingAppointment(clubId, reservationRequest) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/clubs/${clubId}/appointments/bookCounselingAppointment`,
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json'
                },
                body: reservationRequest
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status !== 201) {
                    reject(result.body);
                }
                else {
                    resolve(result.body);
                }
            })
                .catch((error) => {
                reject(new Error('failed to book counseling appointment at legacy appsite backend'));
            });
        });
    }
}
exports.LegacyAppsiteBackend = LegacyAppsiteBackend;
