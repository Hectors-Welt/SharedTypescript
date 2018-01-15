export interface ILegacyAppsiteBackend {
  
  getAppsettings(): Promise<any>
  getCoursetypes(): Promise<any>
  getCourselevels(): Promise<any>
  getFruttiAboArticles(): Promise<any>
  getMembershipTemplates(): Promise<any>
  getCountries(): Promise<any>
  getTitles(): Promise<any>

  getClubs(): Promise<any>
  getEmployeesPresent(clubId: number): Promise<any>
  getInstructors(clubId: number): Promise<any>
  getInstructor(clubId: number, instructorId: number): Promise<any>
  getInstructorPicture(clubId: number, instructorId: number): Promise<any>
  getRooms(clubId: number): Promise<any>
  getCourses(clubId: number): Promise<any>
  getClasses(clubId: number, filter: any, customerId: number): Promise<any>
  getClass(clubId: number, classId: number, customerId: number): Promise<any>

  getPriceInformation(clubId: number, classId: number, customerId: number): Promise<any>
  doReservation(clubId: number, classId: number, customerId: number, password: string): Promise<any>
  doCancellation(clubId: number, classId: number, customerId: number, password: string): Promise<any>

  getAppointmentCategories(clubId: number): Promise<any>
  getAppointmentTypesByCategory(clubId: number, categoryId: number): Promise<any>
  getInstructorsByAppointmentType(clubId: number, appointmentTypeId: number): Promise<any>
  lookupReservationTimeBlocks(clubId: number, lookupRequest: any): Promise<any>
  bookAppointment(clubId: number, timeblock: any, customerId: number): Promise<any>
  lookupCounselingReservationTimeBlocks(clubId: number, lookupRequest: any): Promise<any>
  bookCounselingAppointment(clubId: number, reservationRequest: any): Promise<any>

  getProfile(customerId: number): Promise<any>
  getMemberAvatar(customerId: number): Promise<any>
  getSepaBookings(customerId: number): Promise<any>
  getCheckins(customerId: number): Promise<any>
  getSalesInfo(customerId: number, days: number): Promise<any>
  updateAddress(customerId: number, address: any): Promise<void>
  updateBankAccount(customerId: number, bankAccount: any): Promise<void>
  updateContactData(customerId: number, contactData: any): Promise<void>
  getMemberClasses(customerId: number): Promise<any>
  getAppointments(customerId: number): Promise<any>
  getRecommendations(customerId: number): Promise<any>

  getPublicUser(username: string): Promise<any>
  getPublicUserAvatar(username: string): Promise<any>
}