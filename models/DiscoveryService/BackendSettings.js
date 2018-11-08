"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BackendSettings {
    constructor(settings) {
        if (!settings || !settings.baseUrl) {
            throw new Error('invalid data. ensure baseUrl is present.');
        }
        this.baseUrl = settings.baseUrl;
    }
}
exports.BackendSettings = BackendSettings;
