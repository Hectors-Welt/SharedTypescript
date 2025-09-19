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
exports.EgymCloudConnector = void 0;
const ApiClient_1 = require("./ApiClient");
class EgymCloudConnector {
    constructor(host, port, version) {
        this.host = host;
        this.port = port;
        this.version = version;
        this.baseUrl = `http://${host}:${port}`;
    }
    verifyAccessToken(accessToken) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/api/verifyAccessToken`, {
                    accessToken
                });
            }
            catch (err) {
                throw new Error('failed to verify accesstoken at egym cloud connector');
            }
        });
    }
    activateWellpassAccount(customerId, command) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/accounts/wellpass/${customerId}/activate`, command, null, true);
            }
            catch (err) {
                return {
                    success: false,
                    message: 'failed to activate user at egym cloud connector',
                    errors: [err]
                };
            }
        });
    }
    queryWellpassAccounts(request, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `page=${request.page}&take=${request.take}`;
            if (request.orderBy !== undefined) {
                query += `&order=${request.order}&orderBy=${request.orderBy}`;
            }
            return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/accounts/query?${query}`, filter, null, true);
        });
    }
}
exports.EgymCloudConnector = EgymCloudConnector;
