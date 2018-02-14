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
    constructor(connection, queue, classes) {
        this.connection = connection;
        this.queue = queue;
        this.classes = classes;
        this.initRPC();
    }
    addClass(clazz) {
        this.classes.push(clazz);
    }
    removeClass(clazz) {
        this.classes = this.classes.filter(c => c.constructor !== clazz.constructor);
    }
    initRPC() {
        return __awaiter(this, void 0, void 0, function* () {
            const channel = yield this.connection.createChannel();
            yield channel.assertQueue(this.queue, { durable: true });
            yield channel.consume(this.queue, (msg) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const data = JSON.parse(msg.content.toString());
                    const clazz = this.classes.find(c => typeof c[data.fn] === 'function');
                    let result = null;
                    if (clazz) {
                        result = yield clazz[data.fn].call(clazz, ...data.args || []);
                    }
                    channel.sendToQueue(msg.properties.replyTo, new Buffer(JSON.stringify(result)), { correlationId: msg.properties.correlationId });
                    channel.ack(msg);
                }
                catch (err) {
                    channel.nack(msg);
                }
            }));
            console.log('Awaiting remote work');
        });
    }
    sendRPC(fn, args = [], replyTo = '') {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                console.log(`Executing remote work: ${fn}(${args.join(', ')})`);
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
                        const result = JSON.parse(msg.content.toString());
                        console.log(`Get remote work: ${JSON.stringify(result)}`);
                        resolve(result);
                    }
                }, { noAck: true });
                channel.sendToQueue(this.queue, new Buffer(JSON.stringify({ fn, args })), {
                    correlationId: uuid,
                    replyTo: queue,
                });
            }));
        });
    }
}
exports.RPCHandler = RPCHandler;
