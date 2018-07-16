import { expect } from 'chai';
import * as nock from 'nock';
import { ArticlesService } from '../../services/ArticlesService';

describe('ArticlesService', () => {

  before(() => {
    this.host = 'localhost';
    this.port = 12345;
    this.service = new ArticlesService(this.host, this.port);
    this.nock = nock(this.service.baseUrl)
    .defaultReplyHeaders({
      'Content-Type': 'application/json',
    });
  });

  describe('getArticles', () => {
    it('should get data', async () => {
      this.nock
      .get('/getArticles')
      .reply(200, {});

      const data = await this.service.getArticles();
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock
      .get('/getArticles')
      .reply(404);

      try {
        await this.service.getArticles();
      } catch (err) {
        expect(err.message).to.equal('failed to retrieve articles from articles service');
      }
    });
  });

  describe('lookupBookingInformation', () => {
    it('should get data', async () => {
      this.nock
      .get('/getBookingInformationForArticleId/123/AndCustomerId/122')
      .reply(200, {});

      const data = await this.service.lookupBookingInformation(122, 123);
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock
      .get('/getBookingInformationForArticleId/123/AndCustomerId/122')
      .reply(404);

      try {
        await this.service.lookupBookingInformation(122, 123);
      } catch (err) {
        expect(err.message).to.equal('failed to retrieve booking information from articles service');
      }
    });
  });

  describe('bookArticle', () => {
    it('should get data', async () => {
      this.nock
      .post('/bookArticle')
      .reply(200, {});

      const data = await this.service.bookArticle(122, 123, 'test', 234);
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock
      .post('/bookArticle')
      .reply(404);

      try {
        await this.service.bookArticle(122, 123, 'test', 234);
      } catch (err) {
        expect(err.message).to.equal('failed to book article at articles service');
      }
    });
  });

});
