import * as uuidv4 from 'uuid/v4';

export class RPCHandler {
  constructor(private connection: any, private queue: string, private classes?: Array<any>) {
    this.initRPC();
  }

  addClass(clazz: any) {
    this.classes.push(clazz);
  }

  removeClass(clazz: any) {
    this.classes = this.classes.filter(c => c.constructor !== clazz.constructor);
  }

  async initRPC(): Promise<any> {
    const channel = await this.connection.createChannel();

    await channel.assertQueue(this.queue, { durable: true });
    await channel.consume(this.queue, async (msg) => {
      try {
        const data = JSON.parse(msg.content.toString());
        const clazz = this.classes.find(c => typeof c[data.fn] === 'function');
        let result = null;
        if (clazz) {
          result = await clazz[data.fn].call(clazz, ...data.args || []);
        }
        channel.sendToQueue(msg.properties.replyTo,
          new Buffer(JSON.stringify(result)),
          { correlationId: msg.properties.correlationId });
        channel.ack(msg);
      } catch (err) {
        channel.nack(msg);
      }
    });
    console.log('Awaiting remote work');
  }

  async sendRPC(fn: string, args: Array<any> = [], replyTo: string = '') {
    return new Promise(async (resolve) => {
      console.log(`Executing remote work: ${fn}(${args.join(', ')})`);
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
          const result = JSON.parse(msg.content.toString());
          console.log(`Get remote work: ${JSON.stringify(result)}`);
          resolve(result);
        }
      }, { noAck: true });
      channel.sendToQueue(this.queue,
        new Buffer(JSON.stringify({ fn, args })), {
          correlationId: uuid,
          replyTo: queue,
        });
    });
  }
}