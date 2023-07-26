"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MollieSettings = void 0;
class MollieSettings {
    constructor(settings) {
        if (!settings) {
            throw new Error('invalid data.');
        }
        this.apiKey = settings.apiKey;
        this.apiKeys = settings.apiKeys;
    }
}
exports.MollieSettings = MollieSettings;
