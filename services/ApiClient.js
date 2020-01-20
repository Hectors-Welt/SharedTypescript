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
const popsicle = require("popsicle");
class ApiClient {
    static GET(url, headers, throwErrorOnFail) {
        return __awaiter(this, void 0, void 0, function* () {
            return throwErrorOnFail
                ? this.makeRequestThrowingErrorOnFail('GET', url, headers)
                : this.makeRequest('GET', url, headers);
        });
    }
    static POST(url, body, headers, throwErrorOnFail) {
        return __awaiter(this, void 0, void 0, function* () {
            return throwErrorOnFail
                ? this.makeRequestThrowingErrorOnFail('POST', url, body, headers)
                : this.makeRequest('POST', url, body, headers);
        });
    }
    static PUT(url, body, headers, throwErrorOnFail) {
        return __awaiter(this, void 0, void 0, function* () {
            return throwErrorOnFail
                ? this.makeRequestThrowingErrorOnFail('PUT', url, body, headers)
                : this.makeRequest('PUT', url, body, headers);
        });
    }
    static DELETE(url, headers, throwErrorOnFail) {
        return __awaiter(this, void 0, void 0, function* () {
            return throwErrorOnFail
                ? this.makeRequestThrowingErrorOnFail('DELETE', url, headers)
                : this.makeRequest('DELETE', url, headers);
        });
    }
    static makeRequest(method, url, body, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            const request = {
                url,
                method,
                headers: Object.assign({}, this.headers, headers),
            };
            if (body) {
                request.body = body;
            }
            const result = yield popsicle.request(request).use(popsicle.plugins.parse('json'));
            return result.status === 200 || result.status === 204 ? result.body || {} : null;
        });
    }
    static makeRequestThrowingErrorOnFail(method, url, body, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            const request = {
                url,
                method,
                headers: Object.assign({}, this.headers, headers),
            };
            if (body) {
                request.body = body;
            }
            const result = yield popsicle.request(request).use(popsicle.plugins.parse('json'));
            if (result.status !== 200 && result.status !== 204) {
                throw result.body;
            }
            return result.body || {};
        });
    }
}
exports.ApiClient = ApiClient;
ApiClient.headers = {
    'content-type': 'application/json',
    accept: 'application/json',
};
