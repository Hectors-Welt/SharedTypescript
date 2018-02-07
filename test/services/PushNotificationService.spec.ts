import { expect } from 'chai';
import * as nock from 'nock';
import { PushNotificationService } from '../../services/PushNotificationService';

describe('PushNotificationService', () => {

  before(() => {
    this.host = 'localhost';
    this.port = 12345;
    this.service = new PushNotificationService(this.host, this.port);
    this.nock = nock(this.service.baseUrl)
    .defaultReplyHeaders({
      'Content-Type': 'application/json',
    });
  });

  describe('registerDevice', () => {
    it('should get data', async () => {
      this.nock
      .post('/devices', {})
      .reply(200, {});

      const data = await this.service.registerDevice({});
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock
      .post('/devices', {})
      .reply(404);

      try {
        await this.service.registerDevice({});
      } catch (err) {
        expect(err.message).to.equal('failed to register device at push notification service');
      }
    });
  });

  describe('unregisterDevice', () => {
    it('should get data', async () => {
      this.nock
      .delete('/devices/test/cool')
      .reply(200, {});

      const data = await this.service.unregisterDevice('test', 'cool');
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock
      .delete('/devices/test/cool')
      .reply(404);

      try {
        await this.service.unregisterDevice('test', 'cool');
      } catch (err) {
        expect(err.message).to.equal('failed to unregister device from push notification service');
      }
    });
  });

  describe('getSubscriptions', () => {
    it('should get data', async () => {
      this.nock
      .get('/devices/test/cool/subscriptions')
      .reply(200, {});

      const data = await this.service.getSubscriptions('test', 'cool');
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock
      .get('/devices/test/cool/subscriptions')
      .reply(404);

      try {
        await this.service.getSubscriptions('test', 'cool');
      } catch (err) {
        expect(err.message).to.equal('failed to get subscriptions from push notification service');
      }
    });
  });

  describe('addSubscription', () => {
    it('should get data', async () => {
      this.nock
      .post('/devices/test/cool/subscriptions/my')
      .reply(200, {});

      const data = await this.service.addSubscription('test', 'cool', 'my');
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock
      .post('/devices/test/cool/subscriptions/my')
      .reply(404);

      try {
        await this.service.addSubscription('test', 'cool', 'my');
      } catch (err) {
        expect(err.message).to.equal('failed to add subscription at push notification service');
      }
    });
  });

  describe('deleteSubscription', () => {
    it('should get data', async () => {
      this.nock
      .delete('/devices/test/cool/subscriptions/my')
      .reply(200, {});

      const data = await this.service.deleteSubscription('test', 'cool', 'my');
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock
      .delete('/devices/test/cool/subscriptions/my')
      .reply(404);

      try {
        await this.service.deleteSubscription('test', 'cool', 'my');
      } catch (err) {
        expect(err.message).to.equal('failed to remove subscription at push notification service');
      }
    });
  });

  describe('sendNotification', () => {
    it('should get data', async () => {
      this.nock
      .post('/sendNotification', {})
      .reply(200, {});

      const data = await this.service.sendNotification({});
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock
      .post('/sendNotification', {})
      .reply(404);

      try {
        await this.service.sendNotification({});
      } catch (err) {
        expect(err.message).to.equal('failed to send notification from push notification service');
      }
    });
  });

});
