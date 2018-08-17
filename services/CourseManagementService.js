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
class CourseManagementService {
    constructor(host, port) {
        this.host = host;
        this.port = port;
        this.baseUrl = `http://${host}:${port}`;
    }
    getClasses(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/classes/filter`, filter);
            }
            catch (err) {
                throw new Error('failed to get classes from course management service');
            }
        });
    }
    getPriceInformation(classId, customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/classes/${classId}/priceInformationForCustomerId/${customerId}`);
            }
            catch (err) {
                throw new Error('failed to get priceinformation from course management service');
            }
        });
    }
    doReservation(classId, customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/classes/${classId}/doReservationForCustomerId/${customerId}`);
            }
            catch (err) {
                throw new Error('failed to do reservation at course management service');
            }
        });
    }
    doCancellation(classId, customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/classes/${classId}/doCancellationForCustomerId/${customerId}`);
            }
            catch (err) {
                throw new Error('failed to do cancellation at course management service');
            }
        });
    }
    getCourses() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/courses`);
            }
            catch (err) {
                throw new Error('failed to get courses from course management service');
            }
        });
    }
    getCourseTypes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/courseTypes`);
            }
            catch (err) {
                throw new Error('failed to get course types from course management service');
            }
        });
    }
    getCourseLevels() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/courseLevels`);
            }
            catch (err) {
                throw new Error('failed to get course levels from course management service');
            }
        });
    }
    getRooms() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/rooms`);
            }
            catch (err) {
                new Error('failed to get rooms from course management service');
            }
        });
    }
    getAppointments(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/appointments/byCustomerId/${customerId}`);
            }
            catch (err) {
                throw new Error('failed to get appointments from course management service');
            }
        });
    }
    lookupFreeTimeBlocks(searchRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/appointments/lookupFreeTimeBlocks`, searchRequest);
            }
            catch (err) {
                throw new Error('failed to get time blocks from course management service');
            }
        });
    }
    bookAppointment(appointmentRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/appointments/bookAppointment`, appointmentRequest);
            }
            catch (err) {
                throw new Error('failed to book appointment at course management service');
            }
        });
    }
    lookupCounselingTimeBlocks(searchRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/appointments/lookupCounselingTimeBlocks`, searchRequest);
            }
            catch (err) {
                throw new Error('failed to get time blocks from course management service');
            }
        });
    }
    lookupReplacements(classId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/classes/${classId}/lookupReplacements`)).employeeIds;
            }
            catch (err) {
                throw new Error('failed to get replacements from course management service');
            }
        });
    }
    setInstructor(classId, oldInstructorId, newInstructorId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/classes/${classId}/replace/${oldInstructorId}/with/${newInstructorId}`);
            }
            catch (err) {
                throw new Error('failed to set instructor at course management service');
            }
        });
    }
    closeClass(classId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/classes/${classId}/close`);
            }
            catch (err) {
                throw new Error('failed to close class at course management service');
            }
        });
    }
    cancelClass(classId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/classes/${classId}/cancel`);
            }
            catch (err) {
                throw new Error('failed to cancel class at course management service');
            }
        });
    }
}
exports.CourseManagementService = CourseManagementService;
