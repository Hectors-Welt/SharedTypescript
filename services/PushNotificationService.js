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
const ApiClient_1 = require("./ApiClient");
class PushNotificationService {
    constructor(host, port) {
        this.host = host;
        this.port = port;
        this.baseUrl = `http://${host}:${port}`;
    }
    registerDevice(deviceRegistration) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/devices`, deviceRegistration);
            }
            catch (err) {
                throw new Error('failed to register device at push notification service');
            }
        });
    }
    unregisterDevice(deviceId, appId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.DELETE(`${this.baseUrl}/devices/${deviceId}/${appId}`);
            }
            catch (err) {
                throw new Error('failed to unregister device from push notification service');
            }
        });
    }
    getSubscriptions(deviceId, appId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.GET(`${this.baseUrl}/devices/${deviceId}/${appId}/subscriptions`);
            }
            catch (err) {
                throw new Error('failed to get subscriptions from push notification service');
            }
        });
    }
    addSubscription(deviceId, appId, subscription) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/devices/${deviceId}/${appId}/subscriptions/${subscription}`);
            }
            catch (err) {
                throw new Error('failed to add subscription at push notification service');
            }
        });
    }
    deleteSubscription(deviceId, appId, subscription) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.DELETE(`${this.baseUrl}/devices/${deviceId}/${appId}/subscriptions/${subscription}`);
            }
            catch (err) {
                throw new Error('failed to remove subscription at push notification service');
            }
        });
    }
    sendNotification(notification) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ApiClient_1.ApiClient.POST(`${this.baseUrl}/sendNotification`, notification);
            }
            catch (err) {
                throw new Error('failed to send notification from push notification service');
            }
        });
    }
}
exports.PushNotificationService = PushNotificationService;
