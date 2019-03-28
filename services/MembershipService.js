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
class MembershipService {
    constructor(host, port, version) {
        this.host = host;
        this.port = port;
        this.version = version;
        this.baseUrl = `http://${host}:${port}`;
    }
    getContractTemplatesAvailable() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/getContractTemplatesAvailable`);
            }
            catch (err) {
                throw new Error('failed to retrieve contract templates from membership service');
            }
        });
    }
    getCurrentContractsByCustomerId(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/getCurrentContractsByCustomerId/${customerId}`);
            }
            catch (err) {
                throw new Error('failed to retrieve contracts from membership service');
            }
        });
    }
    getContractsTerminatedByCustomerId(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/getContractsTerminatedByCustomerId/${customerId}`);
            }
            catch (err) {
                throw new Error('failed to retrieve terminated contracts from membership service');
            }
        });
    }
    rejectPendingMembership(processId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/rejectPendingMembership/${processId}`);
            }
            catch (err) {
                throw new Error('failed to reject pending mebership from membership service');
            }
        });
    }
    createContracts(command) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/createContracts`, command);
            }
            catch (err) {
                throw new Error('failed to reject pending mebership from membership service');
            }
        });
    }
    terminateContract(command) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/terminateContract`, command);
            }
            catch (err) {
                throw new Error('failed to reject pending mebership from membership service');
            }
        });
    }
}
exports.MembershipService = MembershipService;
