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
const uuidv4 = require("uuid/v4");
class RPCHandler {
    constructor(connection) {
        this.connection = connection;
    }
    addClass(clazz) {
        this.classes.push(clazz);
    }
    removeClass(clazz) {
        this.classes = this.classes.filter((c) => c.constructor !== clazz.constructor);
    }
    receive(bindTo, classes) {
        return __awaiter(this, void 0, void 0, function* () {
            const channel = yield this.connection.createChannel();
            yield channel.assertQueue(bindTo, { durable: true });
            yield channel.consume(bindTo, (msg) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const data = JSON.parse(msg.content.toString());
                    let fn, clazz;
                    classes.find((c) => {
                        fn = c.rpcMethods.find((f) => f.name === data.fn);
                        clazz = c;
                        return fn && clazz;
                    });
                    let result = '';
                    try {
                        if (fn && clazz) {
                            result = yield fn.call(clazz, ...data.args);
                        }
                        result = JSON.stringify(result);
                    }
                    catch (err) { }
                    channel.sendToQueue(msg.properties.replyTo, new Buffer(result), {
                        correlationId: msg.properties.correlationId,
                    });
                    channel.ack(msg);
                }
                catch (err) {
                    channel.nack(msg);
                }
            }));
        });
    }
    send(sendTo, fn, args = [], replyTo = '') {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                const channel = yield this.connection.createChannel();
                const uuid = uuidv4();
                const { queue } = yield channel.assertQueue(replyTo, {
                    exclusive: replyTo === '',
                    autoDelete: replyTo === '',
                    durable: replyTo !== '',
                });
                channel.consume(queue, (msg) => {
                    if (msg.properties.correlationId === uuid) {
                        channel.close();
                        let result = msg.content.toString();
                        try {
                            result = JSON.parse(result);
                        }
                        catch (err) { }
                        resolve(result);
                    }
                }, { noAck: true });
                channel.sendToQueue(sendTo, new Buffer(JSON.stringify({ fn, args })), {
                    correlationId: uuid,
                    replyTo: queue,
                });
            }));
        });
    }
}
exports.RPCHandler = RPCHandler;
