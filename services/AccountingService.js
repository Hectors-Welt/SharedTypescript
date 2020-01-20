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
class AccountingService {
    constructor(host, port, version) {
        this.host = host;
        this.port = port;
        this.version = version;
        this.baseUrl = `http://${host}:${port}`;
    }
    getClubAccountInformation(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/getClubAccountInformationByCustomerId/${customerId}`);
            }
            catch (err) {
                throw new Error('failed to retrieve club account information from accounting service');
            }
        });
    }
    getSepaBookings(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/getSepaBookingsByCustomerId/${customerId}`);
            }
            catch (err) {
                new Error('failed to retrieve sepa bookings from accounting service');
            }
        });
    }
    getSalesInfo(customerId, days) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/getSalesInfoByCustomerId/${customerId}/ForTheLast/${days}/Days`);
            }
            catch (err) {
                throw new Error('failed to retrieve sepa bookings from accounting service');
            }
        });
    }
    moveSalesToBistroAccount(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/moveSalesToBistroAccount/${customerId}`, {});
            }
            catch (err) {
                throw new Error('failed to move sales to bistro account at accounting service');
            }
        });
    }
}
exports.AccountingService = AccountingService;
