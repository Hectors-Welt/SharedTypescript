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
exports.AccountingService = void 0;
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
    getBistroAccount(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/customers/${customerId}/bistroAccount`);
            }
            catch (err) {
                throw new Error('failed to retrieve bistro account information from accounting service');
            }
        });
    }
    getBistroAccountBookings(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/customers/${customerId}/bistroAccount/bookings`);
            }
            catch (err) {
                throw new Error('failed to retrieve bistro account bookings from accounting service');
            }
        });
    }
    getMembershipAccount(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/customers/${customerId}/membershipAccount`);
            }
            catch (err) {
                throw new Error('failed to retrieve membership account information from accounting service');
            }
        });
    }
    getMembershipAccountBookings(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/customers/${customerId}/membershipAccount/bookings`);
            }
            catch (err) {
                throw new Error('failed to retrieve membership account bookings from accounting service');
            }
        });
    }
    getSepaBookings(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/customers/${customerId}/sepaBookings`);
            }
            catch (err) {
                new Error('failed to retrieve sepa bookings from accounting service');
            }
        });
    }
    sepaBookingInformation(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/customers/${customerId}/sepaBookingInformations?type=PositionsByAccountFrame`);
            }
            catch (err) {
                new Error('failed to retrieve sepa bookings from accounting service');
            }
        });
    }
    moveSalesToBistroAccount(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/commands/moveSalesToBistroAccount`, {
                    customerId
                });
            }
            catch (err) {
                throw new Error('failed to move sales to bistro account at accounting service');
            }
        });
    }
    bookToBistroAccount(customerId, amount, note, paymentType, transactionType) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/commands/bookToBistroAccount`, {
                    customerId,
                    amount,
                    note,
                    paymentType,
                    transactionType,
                });
            }
            catch (err) {
                throw new Error('failed to book to bistro account at accounting service');
            }
        });
    }
    bookToMembershipAccount(customerId, amount, note, paymentType, transactionType) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/commands/bookToMembershipAccount`, {
                    customerId,
                    amount,
                    note,
                    paymentType,
                    transactionType,
                });
            }
            catch (err) {
                throw new Error('failed to book to membership account at accounting service');
            }
        });
    }
}
exports.AccountingService = AccountingService;
