"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApiClient_1 = require("./ApiClient");
class LegacyAppsiteBackend {
    constructor(host, port) {
        this.host = host;
        this.port = port;
        this.baseUrl = `http://${host}:${port}`;
    }
    getAppsettings() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/config/appsettings`);
            }
            catch (err) {
                throw new Error('failed to get appsettings from legacy appsite backend');
            }
        });
    }
    getCoursetypes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/config/coursetypes`);
            }
            catch (err) {
                throw new Error('failed to get coursetypes from legacy appsite backend');
            }
        });
    }
    getCourselevels() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/config/courselevels`);
            }
            catch (err) {
                throw new Error('failed to get courselevels from legacy appsite backend');
            }
        });
    }
    getFruttiAboArticles() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/config/fruttiaboarticles`);
            }
            catch (err) {
                throw new Error('failed to get fruttiabo articles from legacy appsite backend');
            }
        });
    }
    getMembershipTemplates() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/config/membershipTemplates`);
            }
            catch (err) {
                throw new Error('failed to get membership templates from legacy appsite backend');
            }
        });
    }
    getCountries() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/config/countries`);
            }
            catch (err) {
                throw new Error('failed to get countries from legacy appsite backend');
            }
        });
    }
    getTitles() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/config/titles`);
            }
            catch (err) {
                throw new Error('failed to get titles from legacy appsite backend');
            }
        });
    }
    getClubs() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/clubs`);
            }
            catch (err) {
                throw new Error('failed to get clubs from legacy appsite backend');
            }
        });
    }
    getEmployeesPresent(clubId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/clubs/${clubId}/employeesPresent`);
            }
            catch (err) {
                throw new Error('failed to get employees from legacy appsite backend');
            }
        });
    }
    getInstructors(clubId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/clubs/${clubId}/instructors`);
            }
            catch (err) {
                throw new Error('failed to get instructors from legacy appsite backend');
            }
        });
    }
    getInstructor(clubId, instructorId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/clubs/${clubId}/instructors/${instructorId}`);
            }
            catch (err) {
                throw new Error('failed to get instructor from legacy appsite backend');
            }
        });
    }
    getInstructorPicture(clubId, instructorId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/clubs/${clubId}/instructors/${instructorId}/picture`);
            }
            catch (err) {
                throw new Error('failed to get instructor picture from legacy appsite backend');
            }
        });
    }
    getRooms(clubId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/clubs/${clubId}/rooms`);
            }
            catch (err) {
                throw new Error('failed to get rooms from legacy appsite backend');
            }
        });
    }
    getCourses(clubId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/clubs/${clubId}/courses`);
            }
            catch (err) {
                throw new Error('failed to get courses from legacy appsite backend');
            }
        });
    }
    getClasses(clubId, filter, customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/clubs/${clubId}/classes`, filter, { 'x-customer-id': customerId });
            }
            catch (err) {
                throw new Error('failed to get classes from legacy appsite backend');
            }
        });
    }
    getClass(clubId, classId, customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/clubs/${clubId}/classes/${classId}`, { 'x-customer-id': customerId });
            }
            catch (err) {
                throw new Error('failed to get class from legacy appsite backend');
            }
        });
    }
    getPriceInformation(clubId, classId, customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/clubs/${clubId}/classes/${classId}/priceinformation`, { 'x-customer-id': customerId });
            }
            catch (err) {
                throw new Error('failed to get price information from legacy appsite backend');
            }
        });
    }
    doReservation(clubId, classId, customerId, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/clubs/${clubId}/classes/${classId}/reservation`, { password }, { 'x-customer-id': customerId });
            }
            catch (err) {
                throw new Error('failed to do reservation on legacy appsite backend');
            }
        });
    }
    doCancellation(clubId, classId, customerId, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/clubs/${clubId}/classes/${classId}/cancellation`, { password }, { 'x-customer-id': customerId });
            }
            catch (err) {
                throw new Error('failed to do cancellation on legacy appsite backend');
            }
        });
    }
    getProfile(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/me`, { 'x-customer-id': customerId });
            }
            catch (err) {
                throw new Error('failed to get member profile from legacy appsite backend');
            }
        });
    }
    getMemberAvatar(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/me/avatar`, { 'x-customer-id': customerId });
            }
            catch (err) {
                throw new Error('failed to get member avatar from legacy appsite backend');
            }
        });
    }
    getSepaBookings(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/me/sepaBookings`, { 'x-customer-id': customerId });
            }
            catch (err) {
                throw new Error('failed to get sepa bookings from legacy appsite backend');
            }
        });
    }
    getCheckins(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/me/checkins`, { 'x-customer-id': customerId });
            }
            catch (err) {
                throw new Error('failed to get checkins from legacy appsite backend');
            }
        });
    }
    getSalesInfo(customerId, days) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/me/salesInfo/${days}`, { 'x-customer-id': customerId });
            }
            catch (err) {
                throw new Error('failed to get sales info from legacy appsite backend');
            }
        });
    }
    updateAddress(customerId, address) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.PUT(`${this.baseUrl}/me/address`, address, { 'x-customer-id': customerId });
            }
            catch (err) {
                throw new Error('failed to update address at legacy appsite backend');
            }
        });
    }
    updateBankAccount(customerId, bankAccount) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.PUT(`${this.baseUrl}/me/bankAccount`, bankAccount, { 'x-customer-id': customerId });
            }
            catch (err) {
                throw new Error('failed to update bank account at legacy appsite backend');
            }
        });
    }
    updateContactData(customerId, contactData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.PUT(`${this.baseUrl}/me/contactData`, contactData, { 'x-customer-id': customerId });
            }
            catch (err) {
                throw new Error('failed to update contact data at legacy appsite backend');
            }
        });
    }
    getMemberClasses(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/me/classes`, { 'x-customer-id': customerId });
            }
            catch (err) {
                throw new Error('failed to get member classes from legacy appsite backend');
            }
        });
    }
    getAppointments(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/me/appointments`, { 'x-customer-id': customerId });
            }
            catch (err) {
                throw new Error('failed to get appointments from legacy appsite backend');
            }
        });
    }
    getRecommendations(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/me/recommendations`, { 'x-customer-id': customerId });
            }
            catch (err) {
                throw new Error('failed to get recommendations from legacy appsite backend');
            }
        });
    }
    bookAppointment(clubId, timeblock, customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/clubs/${clubId}/appointments/bookAppointment`, timeblock, { 'x-customer-id': customerId });
            }
            catch (err) {
                throw new Error('failed to book appointment at legacy appsite backend');
            }
        });
    }
    getAppointmentCategories(clubId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/clubs/${clubId}/appointmentCategories`);
            }
            catch (err) {
                throw new Error('failed to get appointment categories from legacy appsite backend');
            }
        });
    }
    getAppointmentTypesByCategory(clubId, categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/clubs/${clubId}/appointmentCategories/${categoryId}/appointmentTypes`);
            }
            catch (err) {
                throw new Error('failed to get appointment types from legacy appsite backend');
            }
        });
    }
    getInstructorsByAppointmentType(clubId, appointmentTypeId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/clubs/${clubId}/appointmentTypes/${appointmentTypeId}/instructors`);
            }
            catch (err) {
                throw new Error('failed to get instructors from legacy appsite backend');
            }
        });
    }
    lookupReservationTimeBlocks(clubId, lookupRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/clubs/${clubId}/appointments/lookupFreeTimeBlocks`);
            }
            catch (err) {
                throw new Error('failed to get free time blocks from legacy appsite backend');
            }
        });
    }
    lookupCounselingReservationTimeBlocks(clubId, lookupRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/clubs/${clubId}/appointments/lookupFreeCounselingTimeBlocks`);
            }
            catch (err) {
                throw new Error('failed to get free counseling time blocks from legacy appsite backend');
            }
        });
    }
    bookCounselingAppointment(clubId, reservationRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/clubs/${clubId}/appointments/bookCounselingAppointment`, reservationRequest);
            }
            catch (err) {
                throw new Error('failed to book counseling appointment at legacy appsite backend');
            }
        });
    }
    getPublicUser(username) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/public/user/${username}`);
            }
            catch (err) {
                throw new Error('failed to get public user information from legacy appsite backend');
            }
        });
    }
    getPublicUserAvatar(username) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/public/user/${username}/avatar`);
            }
            catch (err) {
                throw new Error('failed to get public user avatar from legacy appsite backend');
            }
        });
    }
}
exports.LegacyAppsiteBackend = LegacyAppsiteBackend;
