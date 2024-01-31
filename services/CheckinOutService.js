"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckinOutService = void 0;
const ApiClient_1 = require("./ApiClient");
class CheckinOutService {
    constructor(host, port, version) {
        this.host = host;
        this.port = port;
        this.version = version;
        this.baseUrl = `http://${host}:${port}`;
    }
    getAccessAreasAvailable() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/getAccessAreasAvailable`);
            }
            catch (err) {
                throw new Error('failed to retrieve access areas from checkinout service');
            }
        });
    }
    getCheckinStatus(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/getCheckinStatus/${customerId}`);
            }
            catch (err) {
                throw new Error('failed to retrieve checkin status from checkinout service');
            }
        });
    }
    getCheckins(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/getCheckins/${customerId}`);
            }
            catch (err) {
                throw new Error('failed to retrieve checkins from checkinout service');
            }
        });
    }
    isAccessAllowed(customerId, timeSlotRequired, checkOpeningHours, accessAreas) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/isAccessAllowed/${customerId}/WithTimeSlotRequired/${timeSlotRequired}?accessAreas=${accessAreas != null ? accessAreas.join(',') : ''}&checkOpeningHours=${checkOpeningHours}`);
                return result.accessGranted;
            }
            catch (err) {
                throw new Error('failed to get access granted information from checkinout service');
            }
        });
    }
    checkin(customerId, checkinCommand) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/commands/checkin`, Object.assign({ customerId }, checkinCommand));
                return result;
            }
            catch (err) {
                throw new Error('failed to checkin customer at checkinout service');
            }
        });
    }
    checkout(customerId, checkoutCommand) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/checkout`, Object.assign({ customerId }, checkoutCommand));
                return result;
            }
            catch (err) {
                throw new Error('failed to checkout customer at checkinout service');
            }
        });
    }
    getCustomersPresent() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/getCustomersPresent`);
            }
            catch (err) {
                throw new Error('failed to retrieve customers present from checkinout service');
            }
        });
    }
    getCurrentCheckinCount(studioNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/getCurrentCheckinCount/${studioNumber}`);
            }
            catch (err) {
                throw new Error('failed to retrieve current checkin count from checkinout service');
            }
        });
    }
    getCurrentCheckinCounts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/getCurrentCheckinCounts`);
            }
            catch (err) {
                throw new Error('failed to retrieve current checkin counts from checkinout service');
            }
        });
    }
    setAccessGrantedTill(customerId, accessGrantedTill) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/accessGrantedTill`, {
                    customerId,
                    accessGrantedTill,
                });
                return result;
            }
            catch (err) {
                throw new Error('failed to set accessGrantedTill at checkinout service');
            }
        });
    }
    removeAccessGrantedTill(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield ApiClient_1.ApiClient.DELETE(`${this.baseUrl}/accessGrantedTill/${customerId}`);
                return result;
            }
            catch (err) {
                throw new Error('failed to remove accessGrantedTill at checkinout service');
            }
        });
    }
    getAccessAreasCurrentlyAllowed(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/customers/${customerId}/accessAreas`);
            }
            catch (err) {
                throw new Error('failed to retrieve access areas from checkinout service');
            }
        });
    }
    updateCheckinRemark(customerId, checkinRemark) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.PUT(`${this.baseUrl}/customers/${customerId}/checkinRemark`, {
                    checkinRemark: checkinRemark,
                });
            }
            catch (err) {
                throw new Error('failed to update checkin remark at checkinout service');
            }
        });
    }
}
exports.CheckinOutService = CheckinOutService;
