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
class SMSService {
    constructor(host, port, version) {
        this.host = host;
        this.port = port;
        this.version = version;
        this.baseUrl = `http://${host}:${port}/api`;
    }
    sendSMS(request) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/sendSMS`, request);
            }
            catch (err) {
                throw new Error('failed to call sendSMS on sms service');
            }
        });
    }
    getJobs() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/jobs`);
            }
            catch (err) {
                throw new Error('failed to call getJobs on sms service');
            }
        });
    }
    getJob(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/jobs/${id}`);
            }
            catch (err) {
                throw new Error('failed to call getJob on sms service');
            }
        });
    }
    deleteJob(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.DELETE(`${this.baseUrl}/jobs/${id}`);
            }
            catch (err) {
                throw new Error('failed to call deleteJob on sms service');
            }
        });
    }
}
exports.SMSService = SMSService;
