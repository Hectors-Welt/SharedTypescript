"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MollieSettings = void 0;
class MollieSettings {
    constructor(settings) {
        if (!settings || !settings.apiKeys) {
            throw new Error('invalid data. ensure apiKeys are present.');
        }
        this.apiKeys = settings.apiKeys;
    }
}
exports.MollieSettings = MollieSettings;
