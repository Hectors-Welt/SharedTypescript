import * as popsicle from 'popsicle'
import { ILegacyAppsiteBackend } from '../interfaces/ILegacyAppsiteBackend'

export class LegacyAppsiteBackend implements ILegacyAppsiteBackend {

  constructor(private host: string, private port: number) {
  }

  login(loginRequest: any): Promise<any> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/login`,
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        },
        body: loginRequest
      })
      .use(popsicle.plugins.parse('json'))
      .then((result) => {
        if (result.status !== 200) {
          reject(result.body);
        }
        else {
          resolve(result.body);
        }
      })
      .catch((error) => {
        reject(new Error('failed to login at legacy appsite backend'));
      });
    });
  }

  getSession(accesstoken: string): Promise<any> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/session`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
          'appsite-access-token': accesstoken
        }
      })
      .use(popsicle.plugins.parse('json'))
      .then((result) => {
        if (result.status !== 200) {
          reject(result.body);
        }
        else {
          resolve(result.body);
        }
      })
      .catch((error) => {
        reject(new Error('failed to get session from legacy appsite backend'));
      });
    });
  }

  getAppsettings(): Promise<any> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/config/appsettings`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        }
      })
      .use(popsicle.plugins.parse('json'))
      .then((result) => {
        if (result.status !== 200) {
          reject(result.body);
        }
        else {
          resolve(result.body);
        }
      })
      .catch((error) => {
        reject(new Error('failed to get appsettings from legacy appsite backend'));
      });
    });
  }

  getCoursetypes(): Promise<any> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/config/coursetypes`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        }
      })
      .use(popsicle.plugins.parse('json'))
      .then((result) => {
        if (result.status !== 200) {
          reject(result.body);
        }
        else {
          resolve(result.body);
        }
      })
      .catch((error) => {
        reject(new Error('failed to get coursetypes from legacy appsite backend'));
      });
    });
  }

  getCourselevels(): Promise<any> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/config/courselevels`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        }
      })
      .use(popsicle.plugins.parse('json'))
      .then((result) => {
        if (result.status !== 200) {
          reject(result.body);
        }
        else {
          resolve(result.body);
        }
      })
      .catch((error) => {
        reject(new Error('failed to get courselevels from legacy appsite backend'));
      });
    });
  }

  getFruttiAboArticles(): Promise<any> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/config/fruttiaboarticles`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        }
      })
      .use(popsicle.plugins.parse('json'))
      .then((result) => {
        if (result.status !== 200) {
          reject(result.body);
        }
        else {
          resolve(result.body);
        }
      })
      .catch((error) => {
        reject(new Error('failed to get fruttiabo articles from legacy appsite backend'));
      });
    });
  }

  getMembershipTemplates(): Promise<any> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/config/membershipTemplates`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        }
      })
      .use(popsicle.plugins.parse('json'))
      .then((result) => {
        if (result.status !== 200) {
          reject(result.body);
        }
        else {
          resolve(result.body);
        }
      })
      .catch((error) => {
        reject(new Error('failed to get membership templates from legacy appsite backend'));
      });
    });
  }

  getCountries(): Promise<any> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/config/countries`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        }
      })
      .use(popsicle.plugins.parse('json'))
      .then((result) => {
        if (result.status !== 200) {
          reject(result.body);
        }
        else {
          resolve(result.body);
        }
      })
      .catch((error) => {
        reject(new Error('failed to get countries from legacy appsite backend'));
      });
    });
  }

  getTitles(): Promise<any> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/config/titles`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        }
      })
      .use(popsicle.plugins.parse('json'))
      .then((result) => {
        if (result.status !== 200) {
          reject(result.body);
        }
        else {
          resolve(result.body);
        }
      })
      .catch((error) => {
        reject(new Error('failed to get titles from legacy appsite backend'));
      });
    });
  }

  getClubs(): Promise<any> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/clubs`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        }
      })
      .use(popsicle.plugins.parse('json'))
      .then((result) => {
        if (result.status !== 200) {
          reject(result.body);
        }
        else {
          resolve(result.body);
        }
      })
      .catch((error) => {
        reject(new Error('failed to get clubs from legacy appsite backend'));
      });
    });
  }

  getEmployeesPresent(clubId: number): Promise<any> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/clubs/${clubId}/employeesPresent`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        }
      })
      .use(popsicle.plugins.parse('json'))
      .then((result) => {
        if (result.status !== 200) {
          reject(result.body);
        }
        else {
          resolve(result.body);
        }
      })
      .catch((error) => {
        reject(new Error('failed to get employees from legacy appsite backend'));
      });
    });
  }

  getInstructors(clubId: number): Promise<any> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/clubs/${clubId}/instructors`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        }
      })
      .use(popsicle.plugins.parse('json'))
      .then((result) => {
        if (result.status !== 200) {
          reject(result.body);
        }
        else {
          resolve(result.body);
        }
      })
      .catch((error) => {
        reject(new Error('failed to get instructors from legacy appsite backend'));
      });
    });
  }

  getInstructor(clubId: number, instructorId: number): Promise<any> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/clubs/${clubId}/instructors/${instructorId}`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        }
      })
      .use(popsicle.plugins.parse('json'))
      .then((result) => {
        if (result.status !== 200) {
          reject(result.body);
        }
        else {
          resolve(result.body);
        }
      })
      .catch((error) => {
        reject(new Error('failed to get instructor from legacy appsite backend'));
      });
    });
  }

  getRooms(clubId: number): Promise<any> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/clubs/${clubId}/rooms`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        }
      })
      .use(popsicle.plugins.parse('json'))
      .then((result) => {
        if (result.status !== 200) {
          reject(result.body);
        }
        else {
          resolve(result.body);
        }
      })
      .catch((error) => {
        reject(new Error('failed to get rooms from legacy appsite backend'));
      });
    });
  }

  getCourses(clubId: number): Promise<any> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/clubs/${clubId}/courses`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        }
      })
      .use(popsicle.plugins.parse('json'))
      .then((result) => {
        if (result.status !== 200) {
          reject(result.body);
        }
        else {
          resolve(result.body);
        }
      })
      .catch((error) => {
        reject(new Error('failed to get courses from legacy appsite backend'));
      });
    });
  }

  getClasses(clubId: number, filter: any, accesstoken: string): Promise<any> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/clubs/${clubId}/classes`,
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
          'appsite-access-token': accesstoken
        },
        body: filter
      })
      .use(popsicle.plugins.parse('json'))
      .then((result) => {
        if (result.status !== 200) {
          reject(result.body);
        }
        else {
          resolve(result.body);
        }
      })
      .catch((error) => {
        reject(new Error('failed to get classes from legacy appsite backend'));
      });
    });
  }

  getClass(clubId: number, classId: number, accesstoken: string): Promise<any> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/clubs/${clubId}/classes/${classId}`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
          'appsite-access-token': accesstoken
        }
      })
      .use(popsicle.plugins.parse('json'))
      .then((result) => {
        if (result.status !== 200) {
          reject(result.body);
        }
        else {
          resolve(result.body);
        }
      })
      .catch((error) => {
        reject(new Error('failed to get class from legacy appsite backend'));
      });
    });
  }

  getPriceInformation(clubId: number, classId: number, accesstoken: string): Promise<any> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/clubs/${clubId}/classes/${classId}/priceinformation`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
          'appsite-access-token': accesstoken
        }
      })
      .use(popsicle.plugins.parse('json'))
      .then((result) => {
        if (result.status !== 200) {
          reject(result.body);
        }
        else {
          resolve(result.body);
        }
      })
      .catch((error) => {
        reject(new Error('failed to get price information from legacy appsite backend'));
      });
    });
  }

  doReservation(clubId: number, classId: number, accesstoken: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/clubs/${clubId}/classes/${classId}/reservation`,
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
          'appsite-access-token': accesstoken
        },
        body: {
          password
        }
      })
      .use(popsicle.plugins.parse('json'))
      .then((result) => {
        if (result.status !== 200) {
          reject(result.body);
        }
        else {
          resolve(result.body);
        }
      })
      .catch((error) => {
        reject(new Error('failed to do reservation on legacy appsite backend'));
      });
    });
  }

  doCancellation(clubId: number, classId: number, accesstoken: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/clubs/${clubId}/classes/${classId}/cancellation`,
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
          'appsite-access-token': accesstoken
        },
        body: {
          password
        }
      })
      .use(popsicle.plugins.parse('json'))
      .then((result) => {
        if (result.status !== 200) {
          reject(result.body);
        }
        else {
          resolve(result.body);
        }
      })
      .catch((error) => {
        reject(new Error('failed to do cancellation on legacy appsite backend'));
      });
    });
  }

  getProfile(accesstoken: string): Promise<any> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/member`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
          'appsite-access-token': accesstoken
        }
      })
      .use(popsicle.plugins.parse('json'))
      .then((result) => {
        if (result.status !== 200) {
          reject(result.body);
        }
        else {
          resolve(result.body);
        }
      })
      .catch((error) => {
        reject(new Error('failed to get member profile from legacy appsite backend'));
      });
    });
  }

  getMemberClasses(accesstoken: string): Promise<any> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/member/classes`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
          'appsite-access-token': accesstoken
        }
      })
      .use(popsicle.plugins.parse('json'))
      .then((result) => {
        if (result.status !== 200) {
          reject(result.body);
        }
        else {
          resolve(result.body);
        }
      })
      .catch((error) => {
        reject(new Error('failed to get member classes from legacy appsite backend'));
      });
    });
  }

  getAppointmentCategories(clubId: number): Promise<any> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/clubs/${clubId}/appointmentCategories`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json'
        }
      })
      .use(popsicle.plugins.parse('json'))
      .then((result) => {
        if (result.status !== 200) {
          reject(result.body);
        }
        else {
          resolve(result.body);
        }
      })
      .catch((error) => {
        reject(new Error('failed to get appointment categories from legacy appsite backend'));
      });
    });
  }

  getAppointmentTypesByCategory(clubId: number, categoryId: number): Promise<any> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/clubs/${clubId}/appointmentCategories/${categoryId}/appointmentTypes`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json'
        }
      })
      .use(popsicle.plugins.parse('json'))
      .then((result) => {
        if (result.status !== 200) {
          reject(result.body);
        }
        else {
          resolve(result.body);
        }
      })
      .catch((error) => {
        reject(new Error('failed to get appointment types from legacy appsite backend'));
      });
    });
  }

  getInstructorsByAppointmentType(clubId: number, appointmentTypeId: number): Promise<any> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/clubs/${clubId}/appointmentTypes/${appointmentTypeId}/instructors`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json'
        }
      })
      .use(popsicle.plugins.parse('json'))
      .then((result) => {
        if (result.status !== 200) {
          reject(result.body);
        }
        else {
          resolve(result.body);
        }
      })
      .catch((error) => {
        reject(new Error('failed to get instructors from legacy appsite backend'));
      });
    });
  }

  lookupReservationTimeBlocks(clubId: number, lookupRequest: any): Promise<any> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/clubs/${clubId}/appointments/lookupFreeTimeBlocks`,
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json'
        },
        body: lookupRequest
      })
      .use(popsicle.plugins.parse('json'))
      .then((result) => {
        if (result.status !== 200) {
          reject(result.body);
        }
        else {
          resolve(result.body);
        }
      })
      .catch((error) => {
        reject(new Error('failed to get free time blocks from legacy appsite backend'));
      });
    });
  }

  bookAppointment(clubId: number, timeblock: any, accesstoken: string): Promise<any> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/clubs/${clubId}/appointments/bookAppointment`,
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
          'appsite-access-token': accesstoken
        },
        body: timeblock
      })
      .use(popsicle.plugins.parse('json'))
      .then((result) => {
        if (result.status !== 201) {
          reject(result.body);
        }
        else {
          resolve(result.body);
        }
      })
      .catch((error) => {
        reject(new Error('failed to book appointment at legacy appsite backend'));
      });
    });
  }

  lookupCounselingReservationTimeBlocks(clubId: number, lookupRequest: any): Promise<any> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/clubs/${clubId}/appointments/lookupFreeCounselingTimeBlocks`,
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json'
        },
        body: lookupRequest
      })
        .use(popsicle.plugins.parse('json'))
        .then((result) => {
          if (result.status !== 200) {
            reject(result.body);
          }
          else {
            resolve(result.body);
          }
        })
        .catch((error) => {
          reject(new Error('failed to get free counseling time blocks from legacy appsite backend'));
        });
    });
  }

  bookCounselingAppointment(clubId: number, reservationRequest: any): Promise<any> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/clubs/${clubId}/appointments/bookCounselingAppointment`,
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json'
        },
        body: reservationRequest
      })
        .use(popsicle.plugins.parse('json'))
        .then((result) => {
          if (result.status !== 201) {
            reject(result.body);
          }
          else {
            resolve(result.body);
          }
        })
        .catch((error) => {
          reject(new Error('failed to book counseling appointment at legacy appsite backend'));
        });
    });
  }
}