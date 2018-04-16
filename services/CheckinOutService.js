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
class CheckinOutService {
    constructor(host, port) {
        this.host = host;
        this.port = port;
        this.baseUrl = `http://${host}:${port}`;
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
    isAccessAllowed(customerId, timeSlotRequired) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/isAccessAllowed/${customerId}/WithTimeSlotRequired/${timeSlotRequired}`);
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
                return result.success;
            }
            catch (err) {
                throw new Error('failed to checkin customer at checkinout service');
            }
        });
    }
}
exports.CheckinOutService = CheckinOutService;
