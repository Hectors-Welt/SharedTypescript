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
const RenderFileType_1 = require("../models/TemplateDesigner/RenderFileType");
const ApiClient_1 = require("./ApiClient");
class TemplateDesigner {
    constructor(host, port) {
        this.host = host;
        this.port = port;
        this.baseUrl = `http://${host}:${port}/api`;
    }
    render(data, templateId, type = RenderFileType_1.RenderFileType.PDF, asUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield popsicle.request({
                    url: `${this.baseUrl}/render/${templateId}?type=${type}${asUrl ? '&url' : ''}`,
                    method: 'POST',
                    headers: Object.assign({}, ApiClient_1.ApiClient.headers, { referer: this.baseUrl }),
                    body: data,
                })
                    .use(asUrl ? popsicle.plugins.parse('json') : (self, next) => next());
                if (asUrl) {
                    return result.body.url;
                }
                return result.body;
            }
            catch (err) {
                throw new Error('failed to call render on template service');
            }
        });
    }
    renderUrl(url, data, asUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield popsicle.request({
                    url: `${this.baseUrl}/renderUrl${asUrl ? '?url' : ''}`,
                    method: 'POST',
                    headers: Object.assign({}, ApiClient_1.ApiClient.headers, { referer: this.baseUrl }),
                    body: {
                        url,
                        data,
                    },
                })
                    .use(asUrl ? popsicle.plugins.parse('json') : (self, next) => next());
                if (asUrl) {
                    return result.body.url;
                }
                return result.body;
            }
            catch (err) {
                throw new Error('failed to call renderUrl on template service');
            }
        });
    }
    getModels() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/models`);
            }
            catch (err) {
                throw new Error('failed to call getModels on template service');
            }
        });
    }
    getModel(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/model/${id}`);
            }
            catch (err) {
                throw new Error('failed to call getModel on template service');
            }
        });
    }
    updateModel(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.PUT(`${this.baseUrl}/model/${id}`, data);
            }
            catch (err) {
                throw new Error('failed to call updateModel on template service');
            }
        });
    }
    createModel(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/model/${id}`, data);
            }
            catch (err) {
                throw new Error('failed to call createModel on template service');
            }
        });
    }
    deleteModel(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.DELETE(`${this.baseUrl}/model/${id}`);
            }
            catch (err) {
                throw new Error('failed to call deleteModel on template service');
            }
        });
    }
}
exports.TemplateDesigner = TemplateDesigner;
