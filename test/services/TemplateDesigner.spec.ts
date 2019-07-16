import { expect } from 'chai';
import * as nock from 'nock';
import { TemplateDesigner } from '../../services/TemplateDesigner';
import { RenderFileType } from '../../models/TemplateDesigner/RenderFileType';

describe('TemplateDesigner', () => {
  before(() => {
    this.host = 'localhost';
    this.port = 12345;
    this.service = new TemplateDesigner(this.host, this.port);
    this.nock = nock(this.service.baseUrl).defaultReplyHeaders({
      'Content-Type': 'application/json',
    });
  });

  describe('render pdf as url', () => {
    it('should get data', async () => {
      this.nock.post('/render/123?type=pdf&url', {}).reply(200, {
        url: 'cool',
      });

      const data = await this.service.render({}, 123, RenderFileType.PDF, true);
      expect(data).to.equal('cool');
    });

    it('should reject when data not available', async () => {
      this.nock.post('/render/123?type=pdf&url', {}).replyWithError(404);

      try {
        await this.service.render({}, 123, RenderFileType.PDF, true);
      } catch (err) {
        expect(err.message).to.equal('failed to call render on template service');
      }
    });
  });

  describe('render png as response', () => {
    it('should get data', async () => {
      this.nock.post('/render/123?type=png', {}).reply(200);

      const data = await this.service.render({}, 123, RenderFileType.PNG, false);
      expect(data).to.equal('');
    });

    it('should reject when data not available', async () => {
      this.nock.post('/render/123?type=png', {}).replyWithError(404);

      try {
        await this.service.render({}, 123, RenderFileType.PNG, false);
      } catch (err) {
        expect(err.message).to.equal('failed to call render on template service');
      }
    });
  });

  describe('render url as url', () => {
    it('should get data', async () => {
      this.nock.post('/renderUrl?url', { url: 'http://test.de', data: {} }).reply(200, {
        url: 'cool',
      });

      const data = await this.service.renderUrl('http://test.de', {}, true);
      expect(data).to.equal('cool');
    });

    it('should reject when data not available', async () => {
      this.nock.post('/renderUrl?url', { url: 'http://test.de', data: {} }).replyWithError(404);

      try {
        await this.service.renderUrl('http://test.de', {}, false);
      } catch (err) {
        expect(err.message).to.equal('failed to call renderUrl on template service');
      }
    });
  });

  describe('render url as response', () => {
    it('should get data', async () => {
      this.nock.post('/renderUrl', { url: 'http://test.de', data: {} }).reply(200);

      const data = await this.service.renderUrl('http://test.de', {}, false);
      expect(data).to.equal('');
    });

    it('should reject when data not available', async () => {
      this.nock.post('/renderUrl', { url: 'http://test.de', data: {} }).replyWithError(404);

      try {
        await this.service.renderUrl('http://test.de', {}, false);
      } catch (err) {
        expect(err.message).to.equal('failed to call renderUrl on template service');
      }
    });
  });

  describe('getModels', () => {
    it('should get data', async () => {
      this.nock.get('/models').reply(200, {});

      const data = await this.service.getModels();
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock.get('/models').replyWithError(404);

      try {
        await this.service.getModels();
      } catch (err) {
        expect(err.message).to.equal('failed to call getModels on template service');
      }
    });
  });

  describe('getModel', () => {
    it('should get data', async () => {
      this.nock.get('/model/123').reply(200, {});

      const data = await this.service.getModel(123);
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock.get('/model/123').replyWithError(404);

      try {
        await this.service.getModel(123);
      } catch (err) {
        expect(err.message).to.equal('failed to call getModel on template service');
      }
    });
  });

  describe('updateModel', () => {
    it('should get data', async () => {
      this.nock.put('/model/123').reply(200, {});

      const data = await this.service.updateModel(123, {});
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock.put('/model/123').replyWithError(404);

      try {
        await this.service.updateModel(123, {});
      } catch (err) {
        expect(err.message).to.equal('failed to call updateModel on template service');
      }
    });
  });

  describe('createModel', () => {
    it('should get data', async () => {
      this.nock.post('/model/123').reply(200, {});

      const data = await this.service.createModel(123, {});
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock.post('/model/123').replyWithError(404);

      try {
        await this.service.createModel(123, {});
      } catch (err) {
        expect(err.message).to.equal('failed to call createModel on template service');
      }
    });
  });

  describe('deleteModel', () => {
    it('should get data', async () => {
      this.nock.delete('/model/123').reply(200, {});

      const data = await this.service.deleteModel(123);
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock.delete('/model/123').reply(404);

      try {
        await this.service.deleteModel(123);
      } catch (err) {
        expect(err.message).to.equal('failed to call deleteModel on template service');
      }
    });
  });
});
