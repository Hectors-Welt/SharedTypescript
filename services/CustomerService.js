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
exports.CustomerService = void 0;
const ApiClient_1 = require("./ApiClient");
class CustomerService {
    constructor(host, port, version) {
        this.host = host;
        this.port = port;
        this.version = version;
        this.baseUrl = `http://${host}:${port}`;
    }
    addCustomer(command) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/customers`, command, null, true);
            }
            catch (err) {
                return {
                    success: false,
                    message: 'failed to add customer on customer service',
                    errors: [err],
                    customer: null,
                };
            }
        });
    }
    updateCustomer(customerId, command) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.PUT(`${this.baseUrl}/customers/${customerId}`, command, null, true);
            }
            catch (err) {
                return {
                    success: false,
                    message: 'failed to update customer on customer service',
                    errors: [err],
                    customer: null,
                };
            }
        });
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
    lookupCustomers(lookupCriteria) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/lookup`, lookupCriteria);
            }
            catch (err) {
                throw new Error('failed to get customers from customer service');
            }
        });
    }
    search(searchCriteria) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/customers/search`, searchCriteria);
            }
            catch (err) {
                throw new Error('failed to get customers from customer service');
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
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/customers/${customerId}`);
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
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/customers/${customerId}/profilePicture`);
            }
            catch (err) {
                throw new Error('failed to retrieve profile picture from customer service');
            }
        });
    }
    setProfilePicture(customerId, file) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/customers/${customerId}/profilePicture`, file);
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
    registerTagId(customerId, command) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/customers/${customerId}/tagIds`, command, null, true);
            }
            catch (err) {
                return {
                    success: false,
                    message: 'failed to register tag id at customer service',
                    errors: [err],
                };
            }
        });
    }
    updateAddress(customerId, address) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.PUT(`${this.baseUrl}/customers/${customerId}/address`, address);
            }
            catch (err) {
                return {
                    success: false,
                    message: 'failed to update address at customer service',
                    errors: [err],
                };
            }
        });
    }
    updateBankAccount(customerId, bankAccount) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.PUT(`${this.baseUrl}/customers/${customerId}/bankAccount`, bankAccount, null, true);
            }
            catch (err) {
                return {
                    success: false,
                    message: 'failed to update bank account at customer service',
                    errors: [err],
                };
            }
        });
    }
    deleteDirectDebitGroup(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.DELETE(`${this.baseUrl}/customers/${customerId}/directDebitGroup`, null, true);
            }
            catch (err) {
                return {
                    success: false,
                    message: 'failed to update bank account at customer service',
                    errors: [err],
                };
            }
        });
    }
    updateContactData(customerId, contact) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.PUT(`${this.baseUrl}/customers/${customerId}/contact`, contact, null, true);
            }
            catch (err) {
                return {
                    success: false,
                    message: 'failed to update contact data at customer service',
                    errors: [err],
                };
            }
        });
    }
    updateCompany(customerId, company) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.PUT(`${this.baseUrl}/customers/${customerId}/company/${company}`, {}, null, true);
            }
            catch (err) {
                return {
                    success: false,
                    message: 'failed to update company at customer service',
                    errors: [err],
                };
            }
        });
    }
    updateCompany2(customerId, company) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.PUT(`${this.baseUrl}/customers/${customerId}/company2/${company}`, {}, null, true);
            }
            catch (err) {
                return {
                    success: false,
                    message: 'failed to update company2 at customer service',
                    errors: [err],
                };
            }
        });
    }
    updateStatus(customerId, statusId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.PUT(`${this.baseUrl}/customers/${customerId}/status`, {
                    statusId: statusId,
                }, null, true);
            }
            catch (err) {
                return {
                    success: false,
                    message: 'failed to update status at customer service',
                    errors: [err],
                };
            }
        });
    }
    updateDefaultStudio(customerId, studioNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.PUT(`${this.baseUrl}/customers/${customerId}/defaultStudio`, {
                    defaultStudioNumber: studioNumber,
                }, null, true);
            }
            catch (err) {
                return {
                    success: false,
                    message: 'failed to update default studio at customer service',
                    errors: [err],
                };
            }
        });
    }
    addCustomerInteraction(customerId, command) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/customers/${customerId}/interactions`, command, null, true);
            }
            catch (err) {
                return {
                    success: false,
                    message: 'failed to add customer interaction at customer service',
                    errors: [err],
                    interactionId: null,
                };
            }
        });
    }
    getCustomerInteractions(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/customers/${customerId}/interactions`);
            }
            catch (err) {
                throw new Error('failed to retrieve customer interactions from customer service');
            }
        });
    }
    lookupInteractions(customerId, contactType, selectTop = 1) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/interactions/search`, {
                    customerId,
                    contactTypeIds: [contactType],
                    selectTop
                });
            }
            catch (err) {
                throw new Error('failed to get customer interactions from customer service');
            }
        });
    }
    getInteractionAttachment(interactionId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/interactions/${interactionId}/file`);
            }
            catch (err) {
                throw new Error('failed to retrieve file from customer service');
            }
        });
    }
    deleteCustomerRelatedData(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.DELETE(`${this.baseUrl}/customers/${customerId}`);
            }
            catch (err) {
                throw new Error('failed to delete customer related data at customer service');
            }
        });
    }
    deleteCustomer(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.DELETE(`${this.baseUrl}/customers/${customerId}`, null, true);
            }
            catch (err) {
                return {
                    success: false,
                    message: 'failed to delete customer at customer service',
                    errors: [err],
                };
            }
        });
    }
    getLicensePlates(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/customers/${customerId}/licensePlates`);
            }
            catch (err) {
                throw new Error('failed to retrieve license plates from customer service');
            }
        });
    }
    updateLicensePlates(customerId, licensePlates) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.PUT(`${this.baseUrl}/customers/${customerId}/licensePlates`, licensePlates, null, true);
            }
            catch (err) {
                return {
                    success: false,
                    message: 'failed to update license plates at customer service',
                    errors: [err],
                };
            }
        });
    }
    updateHealthInsurance(customerId, healthInsuranceId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.PUT(`${this.baseUrl}/customers/${customerId}/healthInsurance`, {
                    healthInsuranceId: healthInsuranceId,
                }, null, true);
            }
            catch (err) {
                return {
                    success: false,
                    message: 'failed to update status at customer service',
                    errors: [err],
                };
            }
        });
    }
    getHealthInsurances() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/healthInsurances`);
            }
            catch (err) {
                throw new Error('failed to retrieve health insurances from customer service');
            }
        });
    }
}
exports.CustomerService = CustomerService;
