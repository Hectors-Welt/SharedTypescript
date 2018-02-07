import { expect } from 'chai';
import * as nock from 'nock';
import { RatingService } from '../../services/RatingService';

describe('RatingService', () => {

  before(() => {
    this.host = 'localhost';
    this.port = 12345;
    this.service = new RatingService(this.host, this.port);
    this.nock = nock(this.service.baseUrl)
    .defaultReplyHeaders({
      'Content-Type': 'application/json',
    });
  });

  describe('addRatingResult', () => {
    it('should get data', async () => {
      this.nock
      .post('/ratings', {})
      .reply(200, {});

      const data = await this.service.addRatingResult({});
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock
      .post('/ratings', {})
      .reply(404);

      try {
        await this.service.addRatingResult({});
      } catch (err) {
        expect(err.message).to.equal('failed to send rating result to rating service');
      }
    });
  });

  describe('getRatings', () => {
    it('should get data', async () => {
      this.nock
      .get('/ratings/test/cool')
      .reply(200, {});

      const data = await this.service.getRatings('test', 'cool');
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock
      .get('/ratings/test/cool')
      .reply(404);

      try {
        await this.service.getRatings('test', 'cool');
      } catch (err) {
        expect(err.message).to.equal('failed to get rating results from rating service');
      }
    });
  });

});
