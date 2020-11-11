"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MollieSettings = void 0;
class MollieSettings {
    constructor(settings) {
        if (!settings || !settings.apiKey) {
            throw new Error('invalid data. ensure apiKey is present.');
        }
        this.apiKey = settings.apiKey;
    }
}
exports.MollieSettings = MollieSettings;
