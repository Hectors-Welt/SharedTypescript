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
exports.SecaConnector = void 0;
const ApiClient_1 = require("./ApiClient");
class SecaConnector {
    constructor(host, port, version) {
        this.host = host;
        this.port = port;
        this.version = version;
        this.baseUrl = `http://${host}:${port}`;
    }
    getMeasurements(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/user/byCustomerId/${customerId}`);
            }
            catch (err) {
                throw new Error(`failed to retrieve measurements from seca connector: ${err.message}`);
            }
        });
    }
    getMeasurementDetails(customerId, measurementId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/user/byCustomerId/${customerId}/measurements/${measurementId}`);
            }
            catch (err) {
                throw new Error(`failed to retrieve measurement from seca connector: ${err.message}`);
            }
        });
    }
}
exports.SecaConnector = SecaConnector;
