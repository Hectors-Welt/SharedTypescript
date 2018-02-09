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
const popsicle = require("popsicle");
class ApiClient {
    static GET(url, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('GET', url, headers);
        });
    }
    static POST(url, body, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('POST', url, body, headers);
        });
    }
    static PUT(url, body, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('PUT', url, body, headers);
        });
    }
    static DELETE(url, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('DELETE', url, headers);
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
            const result = yield popsicle.request(request)
                .use(popsicle.plugins.parse('json'));
            return result.status === 200 ? result.body : null;
        });
    }
}
ApiClient.headers = {
    'content-type': 'application/json',
    'accept': 'application/json',
};
exports.ApiClient = ApiClient;
