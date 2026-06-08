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
exports.MembershipService = void 0;
const ApiClient_1 = require("./ApiClient");
class MembershipService {
    constructor(host, port, version) {
        this.host = host;
        this.port = port;
        this.version = version;
        this.baseUrl = `http://${host}:${port}`;
    }
    getActiveContractNames() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/contracts/name?filter=Active`);
            }
            catch (err) {
                throw new Error('failed to retrieve active contract names from membership service');
            }
        });
    }
    getActiveMembersContractStatus(customerId, page, take) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = customerId ? `?customerId=${customerId}&page=${page !== null && page !== void 0 ? page : 1}&take=${take !== null && take !== void 0 ? take : 10}` : `?page=${page !== null && page !== void 0 ? page : 1}&take=${take !== null && take !== void 0 ? take : 10}`;
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/contracts/active-members/status?${query}`);
            }
            catch (err) {
                throw new Error('failed to retrieve active members contract status from membership service');
            }
        });
    }
    getContractTemplatesAvailable(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let route = 'contractTemplates';
                if (customerId) {
                    route += `?customerId=${customerId}&filter=Active`;
                }
                else {
                    route += '?filter=Active';
                }
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/${route}`);
            }
            catch (err) {
                throw new Error('failed to retrieve contract templates from membership service');
            }
        });
    }
    getCurrentContractsByCustomerId(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/customers/${customerId}/contracts?filter=Current`);
            }
            catch (err) {
                throw new Error('failed to retrieve contracts from membership service');
            }
        });
    }
    getRecommendationsByCustomerId(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/customers/${customerId}/recommendations`);
            }
            catch (err) {
                throw new Error('failed to retrieve recommendations from membership service');
            }
        });
    }
    getContractsTerminatedByCustomerId(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/customers/${customerId}/contracts?filter=Terminated`);
            }
            catch (err) {
                throw new Error('failed to retrieve terminated contracts from membership service');
            }
        });
    }
    rejectPendingMembership(processId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/commands/rejectPendingMembership`, { processId }, null, true);
            }
            catch (err) {
                throw new Error('failed to reject pending mebership from membership service');
            }
        });
    }
    createContracts(command) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/commands/createContracts`, command, null, true);
            }
            catch (err) {
                return {
                    success: false,
                    message: 'failed to create contracts at membership service',
                    errors: [err],
                    contracts: null,
                };
            }
        });
    }
    simulateContractCreation(command) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/commands/simulateOnlineMembership`, command, null, true);
            }
            catch (err) {
                return {
                    success: false,
                    message: 'failed to simulate contract creation at membership service',
                    errors: [err],
                    returnCode: null,
                    simulationData: null,
                };
            }
        });
    }
    terminateContract(command) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/commands/terminateContract`, command, null, true);
            }
            catch (err) {
                return {
                    success: false,
                    message: 'failed to terminate contract at membership service',
                    errors: [err],
                };
            }
        });
    }
    terminateAllContracts(command) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/commands/terminateAllContracts`, command, null, true);
            }
            catch (err) {
                return {
                    success: false,
                    message: 'failed to terminate contracts at membership service',
                    errors: [err],
                };
            }
        });
    }
    pauseAllContracts(command) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/commands/pauseAllContracts`, command, null, true);
            }
            catch (err) {
                return {
                    success: false,
                    message: 'failed to pause contracts at membership service',
                    errors: [err],
                    returnCode: null,
                };
            }
        });
    }
    updatePricePerInterval(command) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/commands/updatePricePerInterval`, command, null, true);
            }
            catch (err) {
                return {
                    success: false,
                    message: 'failed to update price at membership service',
                    errors: [err],
                    returnCode: null,
                };
            }
        });
    }
}
exports.MembershipService = MembershipService;
