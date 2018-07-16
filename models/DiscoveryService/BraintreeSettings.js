"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BraintreeSettings {
    constructor(settings) {
        if (!settings || !settings.merchantId || !settings.privateKey || !settings.publicKey) {
            throw new Error('invalid data. ensure merchantId, privateKey and publicKey are present.');
        }
        this.merchantId = settings.merchantId;
        this.privateKey = settings.privateKey;
        this.publicKey = settings.publicKey;
        this.isSandboxEnabled = settings.isSandboxEnabled;
    }
}
exports.BraintreeSettings = BraintreeSettings;
