"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const popsicle = require("popsicle");
class PushNotificationService {
    constructor(host, port) {
        this.host = host;
        this.port = port;
    }
    registerDevice(deviceRegistration) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/devices`,
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                },
                body: deviceRegistration
            })
                .then((result) => {
                if (result.status === 201)
                    resolve();
                else
                    reject(new Error('failed to register device at push notification service'));
            })
                .catch((error) => {
                reject(new Error('failed to register device at push notification service'));
            });
        });
    }
    unregisterDevice(deviceId, appId) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/devices/${deviceId}/${appId}`,
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                }
            })
                .then((result) => {
                if (result.status === 200)
                    resolve();
                else
                    reject(new Error('failed to unregister device from push notification service'));
            })
                .catch((error) => {
                reject(new Error('failed to unregister device from push notification service'));
            });
        });
    }
    getSubscriptions(deviceId, appId) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/devices/${deviceId}/${appId}/subscriptions`,
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                }
            })
                .use(popsicle.plugins.parse('json'))
                .then((result) => {
                if (result.status === 200)
                    resolve(result.body);
                else
                    reject(new Error('failed to get subscriptions from push notification service'));
            })
                .catch((error) => {
                reject(new Error('failed to get subscriptions from push notification service'));
            });
        });
    }
    addSubscription(deviceId, appId, subscription) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/devices/${deviceId}/${appId}/subscriptions/${subscription}`,
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                }
            })
                .then((result) => {
                if (result.status === 201)
                    resolve();
                else
                    reject(new Error('failed to add subscription at push notification service'));
            })
                .catch((error) => {
                reject(new Error('failed to add subscription at push notification service'));
            });
        });
    }
    deleteSubscription(deviceId, appId, subscription) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/devices/${deviceId}/${appId}/subscriptions/${subscription}`,
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                }
            })
                .then((result) => {
                if (result.status === 200)
                    resolve();
                else
                    reject(new Error('failed to remove subscription from push notification service'));
            })
                .catch((error) => {
                reject(new Error('failed to remove subscription from push notification service'));
            });
        });
    }
    sendNotification(notification) {
        return new Promise((resolve, reject) => {
            popsicle.request({
                url: `http://${this.host}:${this.port}/sendNotification`,
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                },
                body: notification
            })
                .then((result) => {
                if (result.status === 200)
                    resolve(result.body);
                else
                    reject(new Error('failed to send notification from push notification service'));
            })
                .catch((error) => {
                reject(new Error('failed to send notification from push notification service'));
            });
        });
    }
}
exports.PushNotificationService = PushNotificationService;
