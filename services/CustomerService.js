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
class CustomerService {
    constructor(host, port, version) {
        this.host = host;
        this.port = port;
        this.version = version;
        this.baseUrl = `http://${host}:${port}`;
    }
    getDefaultStatusValues() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/getDefaultStatusValues`);
            }
            catch (err) {
                throw new Error('failed to get default status values from customer service');
            }
        });
    }
    getStatusEntriesAvailable() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/getStatusEntriesAvailable`);
            }
            catch (err) {
                throw new Error('failed to get status entries from customer service');
            }
        });
    }
    findDoublets(name, birthday) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/findDoublets`, {
                    name,
                    birthday,
                });
            }
            catch (err) {
                throw new Error('failed to retrieve doublet from customer service');
            }
        });
    }
    getCustomerByCustomerId(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/getCustomerByCustomerId/${customerId}`);
            }
            catch (err) {
                throw new Error('failed to retrieve customer from customer service');
            }
        });
    }
    getCustomerByTagId(tagId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/getCustomerByTagId/${tagId}`);
            }
            catch (err) {
                throw new Error('failed to retrieve customer from customer service');
            }
        });
    }
    getProfilePicture(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/customer/${customerId}/profilePicture`);
            }
            catch (err) {
                throw new Error('failed to retrieve profile picture from customer service');
            }
        });
    }
    setProfilePicture(customerId, file) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/customer/${customerId}/profilePicture`, {
                    file,
                });
            }
            catch (err) {
                throw new Error('failed to set profile picture at customer service');
            }
        });
    }
    getTagIds(customerId, format = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/customer/${customerId}/getTagIds?format=${format}`);
            }
            catch (err) {
                throw new Error('failed to retrieve tag ids from customer service');
            }
        });
    }
    updateAddress(customerId, address) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.PUT(`${this.baseUrl}/customer/${customerId}/address`, address);
            }
            catch (err) {
                throw new Error('failed to update address at customer service');
            }
        });
    }
    updateBankAccount(customerId, bankAccount) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.PUT(`${this.baseUrl}/customer/${customerId}/bankAccount`, bankAccount);
            }
            catch (err) {
                throw new Error('failed to update bank account at customer service');
            }
        });
    }
    updateContactData(customerId, contact) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.PUT(`${this.baseUrl}/customer/${customerId}/contact`, contact);
            }
            catch (err) {
                throw new Error('failed to update contact data at customer service');
            }
        });
    }
    addCustomerInteraction(customerId, interaction) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/customer/${customerId}/interaction`, interaction);
            }
            catch (err) {
                throw new Error('failed to customer interaction at customer service');
            }
        });
    }
}
exports.CustomerService = CustomerService;
