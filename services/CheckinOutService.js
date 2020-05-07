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
    isAccessAllowed(customerId, timeSlotRequired, accessAreas) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/isAccessAllowed/${customerId}/WithTimeSlotRequired/${timeSlotRequired}?accessAreas=${accessAreas != null ? accessAreas.join(',') : ''}`);
                return result.accessGranted;
            }
            catch (err) {
                throw new Error('failed to get access granted information from checkinout service');
            }
        });
    }
    checkin(customerId, tagId, accessPossibility, accessLevel, checkoutIfAlreadyPresent) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/checkin`, {
                    customerId,
                    tagId,
                    accessPossibility,
                    accessLevel,
                    checkoutIfAlreadyPresent,
                });
                return result;
            }
            catch (err) {
                throw new Error('failed to checkin customer at checkinout service');
            }
        });
    }
    checkout(customerId, accessPossibility, accessLevel) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/checkout`, {
                    customerId,
                    accessPossibility,
                    accessLevel,
                });
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
}
exports.CheckinOutService = CheckinOutService;
