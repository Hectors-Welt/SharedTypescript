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
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/accessAreas`);
            }
            catch (err) {
                throw new Error('failed to retrieve access areas from checkinout service');
            }
        });
    }
    getAccessAreasInformation(accessArea) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/accessAreas/${accessArea}/information`);
            }
            catch (err) {
                throw new Error('failed to retrieve access area information from checkinout service');
            }
        });
    }
    getCheckins(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/customers/${customerId}/checkins`);
            }
            catch (err) {
                throw new Error('failed to retrieve checkins from checkinout service');
            }
        });
    }
    getCheckinStatus(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/customers/${customerId}/checkinStatus`);
            }
            catch (err) {
                throw new Error('failed to retrieve checkin status from checkinout service');
            }
        });
    }
    getCurrentCheckinCount(studioNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/studios/${studioNumber}/checkinCount`);
            }
            catch (err) {
                throw new Error('failed to retrieve current checkin count from checkinout service');
            }
        });
    }
    getCustomersPresent(studioNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/checkinStatuses?studioNumber=${studioNumber}`);
            }
            catch (err) {
                throw new Error('failed to retrieve checkin statuses from checkinout service');
            }
        });
    }
    isAccessAllowed(customerId, timeSlotRequired, checkOpeningHours, accessAreas) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/customers/${customerId}/accessAllowed?accessAreas=${accessAreas != null ? accessAreas.join(',') : ''}&checkOpeningHours=${checkOpeningHours}&timeSlotRequired=${timeSlotRequired}`);
                return result.accessGranted;
            }
            catch (err) {
                throw new Error('failed to get access granted information from checkinout service');
            }
        });
    }
    isCheckoutAllowed(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/customers/${customerId}/checkoutAllowed`);
                return result.accessGranted;
            }
            catch (err) {
                throw new Error('failed to get checkout allowed information from checkinout service');
            }
        });
    }
    getCurrentCheckinCounts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/checkinCounts`);
            }
            catch (err) {
                throw new Error('failed to retrieve current checkin counts from checkinout service');
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
                const result = yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/commands/checkout`, Object.assign({ customerId }, checkoutCommand));
                return result;
            }
            catch (err) {
                throw new Error('failed to checkout customer at checkinout service');
            }
        });
    }
    enterLocation(customerId, location, studioNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield ApiClient_1.ApiClient.PUT(`${this.baseUrl}/customers/${customerId}/location`, {
                    name: location,
                    studioNumber,
                });
                return result;
            }
            catch (err) {
                throw new Error('failed to get enter location at checkinout service');
            }
        });
    }
    leaveLocation(customerId, studioNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield ApiClient_1.ApiClient.DELETE(`${this.baseUrl}/customers/${customerId}/location`, {
                    studioNumber,
                });
                return result;
            }
            catch (err) {
                throw new Error('failed to get enter location at checkinout service');
            }
        });
    }
    setAccessGrantedTill(customerId, accessGrantedTill) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/customers/${customerId}/accessGranted`, {
                    till: accessGrantedTill,
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
                const result = yield ApiClient_1.ApiClient.DELETE(`${this.baseUrl}/customers/${customerId}/accessGranted`);
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
                throw new Error('failed to retrieve access areas allowed for customer from checkinout service');
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
