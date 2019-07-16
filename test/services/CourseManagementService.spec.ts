import { expect } from 'chai';
import * as nock from 'nock';
import { CourseManagementService } from '../../services/CourseManagementService';

describe('CourseManagementService', () => {
  before(() => {
    this.host = 'localhost';
    this.port = 12345;
    this.service = new CourseManagementService(this.host, this.port);
    this.nock = nock(this.service.baseUrl).defaultReplyHeaders({
      'Content-Type': 'application/json',
    });
  });

  describe('getClasses', () => {
    it('should get data', async () => {
      this.nock.post('/classes/filter', {}).reply(200, {});

      const data = await this.service.getClasses({});
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock.post('/classes/filter', {}).reply(404);

      try {
        await this.service.getClasses({});
      } catch (err) {
        expect(err.message).to.equal('failed to get classes from course management service');
      }
    });
  });

  describe('getPriceInformation', () => {
    it('should get data', async () => {
      this.nock.get('/classes/123/priceInformationForCustomerId/112').reply(200, {});

      const data = await this.service.getPriceInformation(123, 112);
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock.get('/classes/123/priceInformationForCustomerId/112').reply(404);

      try {
        await this.service.getPriceInformation(123, 112);
      } catch (err) {
        expect(err.message).to.equal('failed to get priceinformation from course management service');
      }
    });
  });

  describe('doReservation', () => {
    it('should get data', async () => {
      this.nock.post('/classes/123/doReservationForCustomerId/112').reply(200, {});

      const data = await this.service.doReservation(123, 112);
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock.post('/classes/123/doReservationForCustomerId/112').reply(404);

      try {
        await this.service.doReservation(123, 112);
      } catch (err) {
        expect(err.message).to.equal('failed to do reservation at course management service');
      }
    });
  });

  describe('doCancellation', () => {
    it('should get data', async () => {
      this.nock.post('/classes/123/doCancellationForCustomerId/112').reply(200, {});

      const data = await this.service.doCancellation(123, 112);
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock.post('/classes/123/doCancellationForCustomerId/112').reply(404);

      try {
        await this.service.doCancellation(123, 112);
      } catch (err) {
        expect(err.message).to.equal('failed to do cancellation at course management service');
      }
    });
  });

  describe('getCourses', () => {
    it('should get data', async () => {
      this.nock.get('/courses').reply(200, {});

      const data = await this.service.getCourses();
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock.get('/courses').reply(404);

      try {
        await this.service.getCourses();
      } catch (err) {
        expect(err.message).to.equal('failed to get courses from course management service');
      }
    });
  });

  describe('getCourseTypes', () => {
    it('should get data', async () => {
      this.nock.get('/courseTypes').reply(200, {});

      const data = await this.service.getCourseTypes();
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock.get('/courseTypes').reply(404);

      try {
        await this.service.getCourseTypes();
      } catch (err) {
        expect(err.message).to.equal('failed to get course types from course management service');
      }
    });
  });

  describe('getCourseLevels', () => {
    it('should get data', async () => {
      this.nock.get('/courseLevels').reply(200, {});

      const data = await this.service.getCourseLevels();
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock.get('/courseLevels').reply(404);

      try {
        await this.service.getCourseLevels();
      } catch (err) {
        expect(err.message).to.equal('failed to get course levels from course management service');
      }
    });
  });

  describe('getRooms', () => {
    it('should get data', async () => {
      this.nock.get('/rooms').reply(200, {});

      const data = await this.service.getRooms();
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock.get('/rooms').reply(404);

      try {
        await this.service.getRooms();
      } catch (err) {
        expect(err.message).to.equal('failed to get rooms from course management service');
      }
    });
  });

  describe('getAppointments', () => {
    it('should get data', async () => {
      this.nock.get('/appointments/byCustomerId/123').reply(200, {});

      const data = await this.service.getAppointments(123);
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock.get('/appointments/byCustomerId/123').reply(404);

      try {
        await this.service.getAppointments(123);
      } catch (err) {
        expect(err.message).to.equal('failed to get appointments from course management service');
      }
    });
  });

  describe('lookupFreeTimeBlocks', () => {
    it('should get data', async () => {
      this.nock.post('/appointments/lookupFreeTimeBlocks', {}).reply(200, {});

      const data = await this.service.lookupFreeTimeBlocks({});
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock.post('/appointments/lookupFreeTimeBlocks', {}).reply(404);

      try {
        await this.service.lookupFreeTimeBlocks({});
      } catch (err) {
        expect(err.message).to.equal('failed to get time blocks from course management service');
      }
    });
  });

  describe('bookAppointment', () => {
    it('should get data', async () => {
      this.nock.post('/appointments/bookAppointment', {}).reply(200, {});

      const data = await this.service.bookAppointment({});
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock.post('/appointments/bookAppointment', {}).reply(404);

      try {
        await this.service.bookAppointment({});
      } catch (err) {
        expect(err.message).to.equal('failed to book appointment at course management service');
      }
    });
  });

  describe('lookupCounselingTimeBlocks', () => {
    it('should get data', async () => {
      this.nock.post('/appointments/lookupCounselingTimeBlocks', {}).reply(200, {});

      const data = await this.service.lookupCounselingTimeBlocks({});
      expect(data).to.deep.equal({});
    });

    it('should reject when data not available', async () => {
      this.nock.post('/appointments/lookupCounselingTimeBlocks', {}).reply(404);

      try {
        await this.service.lookupCounselingTimeBlocks({});
      } catch (err) {
        expect(err.message).to.equal('failed to get time blocks from course management service');
      }
    });
  });
});
