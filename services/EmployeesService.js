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
class EmployeesService {
    constructor(host, port, version) {
        this.host = host;
        this.port = port;
        this.version = version;
        this.baseUrl = `http://${host}:${port}`;
    }
    validateEmployeeByCredentials(name, surname, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/validateEmployeeByCredentials`, {
                    name,
                    surname,
                    password,
                });
            }
            catch (err) {
                throw new Error('failed to validate credentials at employees service');
            }
        });
    }
    getEmployeeByCustomerId(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/getEmployeeByCustomerId/${customerId}`);
            }
            catch (err) {
                throw new Error(`failed to retrieve employee from employees service: ${err.message}`);
            }
        });
    }
    getEmployeesPresent(studioId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/getEmployeesPresentInClub/${studioId}`);
            }
            catch (err) {
                throw new Error(`failed to retrieve employees from employees service: ${err.message}`);
            }
        });
    }
    getAllEmployees() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/employees`);
            }
            catch (err) {
                throw new Error(`failed to retrieve employees from employees service: ${err.message}`);
            }
        });
    }
}
exports.EmployeesService = EmployeesService;
