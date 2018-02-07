import { ILegacyAppsiteBackend } from '../interfaces/ILegacyAppsiteBackend'
import { ApiClient } from './ApiClient';

export class LegacyAppsiteBackend implements ILegacyAppsiteBackend {
  baseUrl: string;

  constructor(private host: string, private port: number) {
    this.baseUrl = `http://${host}:${port}`;
  }

  async getAppsettings(): Promise<any> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/config/appsettings`);
    } catch (err) {
      throw new Error('failed to get appsettings from legacy appsite backend');
    }
  }

  async getCoursetypes(): Promise<any> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/config/coursetypes`);
    } catch (err) {
      throw new Error('failed to get coursetypes from legacy appsite backend');
    }
  }

  async getCourselevels(): Promise<any> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/config/courselevels`);
    } catch (err) {
      throw new Error('failed to get courselevels from legacy appsite backend');
    }
  }

  async getFruttiAboArticles(): Promise<any> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/config/fruttiaboarticles`);
    } catch (err) {
      throw new Error('failed to get fruttiabo articles from legacy appsite backend');
    }
  }

  async getMembershipTemplates(): Promise<any> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/config/membershipTemplates`);
    } catch (err) {
      throw new Error('failed to get membership templates from legacy appsite backend');
    }
  }

  async getCountries(): Promise<any> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/config/countries`);
    } catch (err) {
      throw new Error('failed to get countries from legacy appsite backend');
    }
  }

  async getTitles(): Promise<any> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/config/titles`);
    } catch (err) {
      throw new Error('failed to get titles from legacy appsite backend');
    }
  }

  async getClubs(): Promise<any> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/clubs`);
    } catch (err) {
      throw new Error('failed to get clubs from legacy appsite backend');
    }
  }

  async getEmployeesPresent(clubId: number): Promise<any> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/clubs/${clubId}/employeesPresent`);
    } catch (err) {
      throw new Error('failed to get employees from legacy appsite backend');
    }
  }

  async getInstructors(clubId: number): Promise<any> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/clubs/${clubId}/instructors`);
    } catch (err) {
      throw new Error('failed to get instructors from legacy appsite backend');
    }
  }

  async getInstructor(clubId: number, instructorId: number): Promise<any> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/clubs/${clubId}/instructors/${instructorId}`);
    } catch (err) {
      throw new Error('failed to get instructor from legacy appsite backend');
    }
  }

  async getInstructorPicture(clubId: number, instructorId: number): Promise<any> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/clubs/${clubId}/instructors/${instructorId}/picture`);
    } catch (err) {
      throw new Error('failed to get instructor picture from legacy appsite backend');
    }
  }

  async getRooms(clubId: number): Promise<any> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/clubs/${clubId}/rooms`);
    } catch (err) {
      throw new Error('failed to get rooms from legacy appsite backend');
    }
  }

  async getCourses(clubId: number): Promise<any> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/clubs/${clubId}/courses`);
    } catch (err) {
      throw new Error('failed to get courses from legacy appsite backend');
    }
  }

  async getClasses(clubId: number, filter: any, customerId: number): Promise<any> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/clubs/${clubId}/classes`, filter, { 'x-customer-id': customerId });
    } catch (err) {
      throw new Error('failed to get classes from legacy appsite backend');
    }
  }

  async getClass(clubId: number, classId: number, customerId: number): Promise<any> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/clubs/${clubId}/classes/${classId}`, { 'x-customer-id': customerId });
    } catch (err) {
      throw new Error('failed to get class from legacy appsite backend');
    }
  }

  async getPriceInformation(clubId: number, classId: number, customerId: number): Promise<any> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/clubs/${clubId}/classes/${classId}/priceinformation`, { 'x-customer-id': customerId });
    } catch (err) {
      throw new Error('failed to get price information from legacy appsite backend');
    }
  }

  async doReservation(clubId: number, classId: number, customerId: number, password: string): Promise<any> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/clubs/${clubId}/classes/${classId}/reservation`, { password }, { 'x-customer-id': customerId });
    } catch (err) {
      throw new Error('failed to do reservation on legacy appsite backend');
    }
  }

  async doCancellation(clubId: number, classId: number, customerId: number, password: string): Promise<any> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/clubs/${clubId}/classes/${classId}/cancellation`, { password }, { 'x-customer-id': customerId });
    } catch (err) {
      throw new Error('failed to do cancellation on legacy appsite backend');
    }
  }

  async getProfile(customerId: number): Promise<any> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/me`, { 'x-customer-id': customerId });
    } catch (err) {
      throw new Error('failed to get member profile from legacy appsite backend');
    }
  }

  async getMemberAvatar(customerId: number): Promise<any> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/me/avatar`, { 'x-customer-id': customerId });
    } catch (err) {
      throw new Error('failed to get member avatar from legacy appsite backend');
    }
  }

  async getSepaBookings(customerId: number): Promise<any> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/me/sepaBookings`, { 'x-customer-id': customerId });
    } catch (err) {
      throw new Error('failed to get sepa bookings from legacy appsite backend');
    }
  }

  async getCheckins(customerId: number): Promise<any> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/me/checkins`, { 'x-customer-id': customerId });
    } catch (err) {
      throw new Error('failed to get checkins from legacy appsite backend');
    }
  }

  async getSalesInfo(customerId: number, days: number): Promise<any> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/me/salesInfo/${days}`, { 'x-customer-id': customerId });
    } catch (err) {
      throw new Error('failed to get sales info from legacy appsite backend');
    }
  }

  async updateAddress(customerId: number, address: any): Promise<void> {
    try {
      return await ApiClient.PUT(`${this.baseUrl}/me/address`, address, { 'x-customer-id': customerId });
    } catch (err) {
      throw new Error('failed to update address at legacy appsite backend');
    }
  }

  async updateBankAccount(customerId: number, bankAccount: any): Promise<void> {
    try {
      return await ApiClient.PUT(`${this.baseUrl}/me/bankAccount`, bankAccount, { 'x-customer-id': customerId });
    } catch (err) {
      throw new Error('failed to update bank account at legacy appsite backend');
    }
  }

  async updateContactData(customerId: number, contactData: any): Promise<void> {
    try {
      return await ApiClient.PUT(`${this.baseUrl}/me/contactData`, contactData, { 'x-customer-id': customerId });
    } catch (err) {
      throw new Error('failed to update contact data at legacy appsite backend');
    }
  }

  async getMemberClasses(customerId: number): Promise<any> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/me/classes`, { 'x-customer-id': customerId });
    } catch (err) {
      throw new Error('failed to get member classes from legacy appsite backend');
    }
  }

  async getAppointments(customerId: number): Promise<any> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/me/appointments`, { 'x-customer-id': customerId });
    } catch (err) {
      throw new Error('failed to get appointments from legacy appsite backend');
    }
  }

  async getRecommendations(customerId: number): Promise<any> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/me/recommendations`, { 'x-customer-id': customerId });
    } catch (err) {
      throw new Error('failed to get recommendations from legacy appsite backend');
    }
  }

  async bookAppointment(clubId: number, timeblock: any, customerId: number): Promise<any> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/clubs/${clubId}/appointments/bookAppointment`, timeblock, { 'x-customer-id': customerId });
    } catch (err) {
      throw new Error('failed to book appointment at legacy appsite backend');
    }
  }

  async getAppointmentCategories(clubId: number): Promise<any> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/clubs/${clubId}/appointmentCategories`);
    } catch (err) {
      throw new Error('failed to get appointment categories from legacy appsite backend');
    }
  }

  async getAppointmentTypesByCategory(clubId: number, categoryId: number): Promise<any> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/clubs/${clubId}/appointmentCategories/${categoryId}/appointmentTypes`);
    } catch (err) {
      throw new Error('failed to get appointment types from legacy appsite backend');
    }
  }

  async getInstructorsByAppointmentType(clubId: number, appointmentTypeId: number): Promise<any> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/clubs/${clubId}/appointmentTypes/${appointmentTypeId}/instructors`);
    } catch (err) {
      throw new Error('failed to get instructors from legacy appsite backend');
    }
  }

  async lookupReservationTimeBlocks(clubId: number, lookupRequest: any): Promise<any> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/clubs/${clubId}/appointments/lookupFreeTimeBlocks`);
    } catch (err) {
      throw new Error('failed to get free time blocks from legacy appsite backend');
    }
  }

  async lookupCounselingReservationTimeBlocks(clubId: number, lookupRequest: any): Promise<any> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/clubs/${clubId}/appointments/lookupFreeCounselingTimeBlocks`);
    } catch (err) {
      throw new Error('failed to get free counseling time blocks from legacy appsite backend');
    }
  }

  async bookCounselingAppointment(clubId: number, reservationRequest: any): Promise<any> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/clubs/${clubId}/appointments/bookCounselingAppointment`, reservationRequest);
    } catch (err) {
      throw new Error('failed to book counseling appointment at legacy appsite backend');
    }
  }

  async getPublicUser(username: string): Promise<any> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/public/user/${username}`);
    } catch (err) {
      throw new Error('failed to get public user information from legacy appsite backend');
    }
  }

  async getPublicUserAvatar(username: string): Promise<any> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/public/user/${username}/avatar`);
    } catch (err) {
      throw new Error('failed to get public user avatar from legacy appsite backend');
    }
  }
}