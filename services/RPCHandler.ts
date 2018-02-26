import * as uuidv4 from 'uuid/v4';

export class RPCHandler {
  private classes: Array<any>;

  constructor(private connection: any) {
  }

  addClass(clazz: any) {
    this.classes.push(clazz);
  }

  removeClass(clazz: any) {
    this.classes = this.classes.filter(c => c.constructor !== clazz.constructor);
  }

  async receive(bindTo: string, classes?: Array<any>): Promise<any> {
    const channel = await this.connection.createChannel();
    
    await channel.assertQueue(bindTo, { durable: true });
    await channel.consume(bindTo, async (msg) => {
      try {
        const data = JSON.parse(msg.content.toString());
        let fn;
        classes.forEach(c => fn = c.rpcMethods.find(f => f.name === data.fn));

        let result = null;

        if (fn) {
          result = await fn.call(fn, ...data.args);
        }
        try {
          result = JSON.stringify(result);
        } catch (err) {
        }

        channel.sendToQueue(msg.properties.replyTo,
          new Buffer(result),
          { correlationId: msg.properties.correlationId });
        channel.ack(msg);
      } catch (err) {
        channel.nack(msg);
      }
    });
  }

  async send(sendTo: string, fn: string, args: Array<any> = [], replyTo: string = '') {
    return new Promise(async (resolve) => {
      const channel = await this.connection.createChannel();
      const uuid = uuidv4();
      const { queue } = await channel.assertQueue(replyTo, {
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
          } catch (err) {
          }
          resolve(result);
        }
      }, { noAck: true });
      channel.sendToQueue(sendTo,
        new Buffer(JSON.stringify({ fn, args })), {
          correlationId: uuid,
          replyTo: queue,
        });
    });
  }
}