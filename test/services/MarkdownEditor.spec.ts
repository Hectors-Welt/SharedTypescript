import { expect } from 'chai';
import * as nock from 'nock';
import { MarkdownEditor } from '../../services/MarkdownEditor';

describe('MarkdownEditor', () => {
  before(() => {
    this.host = 'localhost';
    this.port = 12345;
    this.service = new MarkdownEditor(this.host, this.port);
    this.nock = nock(this.service.baseUrl).defaultReplyHeaders({
      'Content-Type': 'application/json',
    });
  });

  describe('renderPdf', () => {
    it('should render as url', async () => {
      const data = await this.service.renderPdf(123, true);
      expect(data).to.equal('http://localhost:12345/api/md/123/pdf');
    });

    it('should render', async () => {
      this.nock.get('/md/123/pdf').reply('');

      const data = await this.service.renderPdf(123);
      expect(data).to.equal('');
    });

    it('should not render', async () => {
      this.nock.get('/md/321/pdf').replyWithError(404);

      try {
        await this.service.renderPdf(321);
      } catch (err) {
        expect(err.message).to.equal('failed to call renderPdf on markdown editor');
      }
    });
  });

  describe('renderHtml', () => {
    it('should render as url', async () => {
      const data = await this.service.renderHtml(123, true);
      expect(data).to.equal('http://localhost:12345/api/md/123/html');
    });

    it('should render', async () => {
      this.nock.get('/md/123/html').reply('');

      const data = await this.service.renderHtml(123);
      expect(data).to.equal('');
    });

    it('should not render', async () => {
      this.nock.get('/md/321/html').replyWithError(404);

      try {
        await this.service.renderHtml(321);
      } catch (err) {
        expect(err.message).to.equal('failed to call renderHtml on markdown editor');
      }
    });
  });

  describe('getMarkdowns', () => {
    it('should get markdown', async () => {
      this.nock.get('/md').reply(200, []);

      const data = await this.service.getMarkdowns();
      expect(data).to.deep.equal([]);
    });

    it('should not get markdown', async () => {
      this.nock.get('/md').replyWithError(404);

      try {
        await this.service.getMarkdowns();
      } catch (err) {
        expect(err.message).to.equal('failed to call getMarkdowns on markdown editor');
      }
    });
  });

  describe('getMarkdown', () => {
    it('should get markdown', async () => {
      this.nock.get('/md/123').reply(200, {});

      const data = await this.service.getMarkdown(123);
      expect(data).to.deep.equal({});
    });

    it('should not get markdown', async () => {
      this.nock.get('/md/123').replyWithError(404);

      try {
        await this.service.getMarkdown(123);
      } catch (err) {
        expect(err.message).to.equal('failed to call getMarkdown on markdown editor');
      }
    });
  });

  describe('createMarkdown', () => {
    it('should create markdown', async () => {
      this.nock.post('/md').reply(200, {
        md: 'cool',
        _id: 1234,
      });

      const data = await this.service.createMarkdown({ md: 'cool' });
      expect(data).to.deep.equal({
        md: 'cool',
        _id: 1234,
      });
    });

    it('should not create markdown', async () => {
      this.nock.post('/md').replyWithError(404);

      try {
        await this.service.createMarkdown({});
      } catch (err) {
        expect(err.message).to.equal('failed to call createMarkdown on markdown editor');
      }
    });
  });

  describe('updateMarkdown', () => {
    it('should update markdown', async () => {
      this.nock.put('/md/123').reply(200, {
        md: 'cool',
        _id: 1234,
      });

      const data = await this.service.updateMarkdown(123, { md: 'cool' });
      expect(data).to.deep.equal({
        md: 'cool',
        _id: 1234,
      });
    });

    it('should not update markdown', async () => {
      this.nock.put('/md/123').replyWithError(404);

      try {
        await this.service.updateMarkdown(123, {});
      } catch (err) {
        expect(err.message).to.equal('failed to call updateMarkdown on markdown editor');
      }
    });
  });

  describe('deleteMarkdown', () => {
    it('should delete markdown', async () => {
      this.nock.delete('/md/123').reply(200);

      const data = await this.service.deleteMarkdown(123);
      expect(data).to.deep.equal({});
    });

    it('should not delete markdown', async () => {
      this.nock.put('/md/123').replyWithError(404);

      try {
        await this.service.deleteMarkdown(123);
      } catch (err) {
        expect(err.message).to.equal('failed to call deleteMarkdown on markdown editor');
      }
    });
  });
});
