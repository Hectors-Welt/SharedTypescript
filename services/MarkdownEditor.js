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
const ApiClient_1 = require("./ApiClient");
class MarkdownEditor {
    constructor(host, port) {
        this.host = host;
        this.port = port;
        this.baseUrl = `http://${host}:${port}/api`;
    }
    getMarkdowns() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/md`);
            }
            catch (err) {
                throw new Error('failed to call getMarkdowns on markdown editor');
            }
        });
    }
    getMarkdown(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/md/${id}`);
            }
            catch (err) {
                throw new Error('failed to call getMarkdown on markdown editor');
            }
        });
    }
    createMarkdown(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/md`, data);
            }
            catch (err) {
                throw new Error('failed to call createMarkdown on markdown editor');
            }
        });
    }
    updateMarkdown(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.PUT(`${this.baseUrl}/md/${id}`, data);
            }
            catch (err) {
                throw new Error('failed to call updateMarkdown on markdown editor');
            }
        });
    }
    deleteMarkdown(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.DELETE(`${this.baseUrl}/md/${id}`);
            }
            catch (err) {
                throw new Error('failed to call deleteMarkdown on markdown editor');
            }
        });
    }
    renderHtml(id, asUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.baseUrl}/md/${id}/html`;
            try {
                if (asUrl) {
                    return url;
                }
                const result = yield popsicle.request({
                    url,
                    method: 'GET',
                });
                return result.status < 400 ? result.body : null;
            }
            catch (err) {
                throw new Error('failed to call renderHtml on markdown editor');
            }
        });
    }
    renderText(id, asUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.baseUrl}/md/${id}/text`;
            try {
                if (asUrl) {
                    return url;
                }
                const result = yield popsicle.request({
                    url,
                    method: 'GET',
                });
                return result.status < 400 ? result.body : null;
            }
            catch (err) {
                throw new Error('failed to call renderText on markdown editor');
            }
        });
    }
    renderPdf(id, asUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.baseUrl}/md/${id}/pdf`;
            try {
                if (asUrl) {
                    return url;
                }
                const result = yield popsicle.request({
                    url,
                    method: 'GET',
                });
                return result.status < 400 ? result.body : null;
            }
            catch (err) {
                throw new Error('failed to call renderPdf on markdown editor');
            }
        });
    }
}
exports.MarkdownEditor = MarkdownEditor;
