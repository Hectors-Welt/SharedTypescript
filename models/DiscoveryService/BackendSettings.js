"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackendSettings = void 0;
class BackendSettings {
    constructor(settings) {
        if (!settings || !settings.baseUrl) {
            throw new Error('invalid data. ensure baseUrl is present.');
        }
        this.baseUrl = settings.baseUrl;
        this.backendId = settings.backendId;
        this.seoTitle = settings.seoTitle;
    }
}
exports.BackendSettings = BackendSettings;
