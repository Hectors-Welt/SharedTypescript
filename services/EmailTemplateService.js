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
exports.EmailTemplateService = void 0;
const popsicle = require("popsicle");
const ApiClient_1 = require("./ApiClient");
class EmailTemplateService {
    constructor(host, port, version) {
        this.host = host;
        this.port = port;
        this.version = version;
        this.baseUrl = `http://${host}:${port}`;
    }
    getHtml(name, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return ApiClient_1.ApiClient.POST(`${this.baseUrl}/api/rendering/email/${name}`, data);
            }
            catch (err) {
                throw new Error(`failed to retrieve html from email template service: ${err.message}`);
            }
        });
    }
    getPdf(name, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const url = `${this.baseUrl}/api/rendering/email/${name}/pdf`;
                const result = yield popsicle.request({
                    url,
                    method: 'POST',
                    body: data,
                    transport: popsicle.createTransport({
                        type: 'buffer',
                        buffer: true,
                        maxBufferSize: 200000000,
                    }),
                });
                return result.status === 200 ? result.body : null;
            }
            catch (err) {
                throw new Error(`failed to retrieve html from email template service: ${err.message}`);
            }
        });
    }
}
exports.EmailTemplateService = EmailTemplateService;
