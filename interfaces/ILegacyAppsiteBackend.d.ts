export interface ILegacyAppsiteBackend {
    login(loginRequest: any): Promise<any>;
    getSession(accesstoken: string): Promise<any>;
    getAppsettings(): Promise<any>;
    getCoursetypes(): Promise<any>;
    getCourselevels(): Promise<any>;
    getClubs(): Promise<any>;
    getInstructors(clubId: number): Promise<any>;
    getRooms(clubId: number): Promise<any>;
    getCourses(clubId: number): Promise<any>;
    getClasses(clubId: number, filter: any, accesstoken: string): Promise<any>;
    getClass(clubId: number, classId: number, accesstoken: string): Promise<any>;
    getPriceInformation(clubId: number, classId: number, accesstoken: string): Promise<any>;
    doReservation(clubId: number, classId: number, accesstoken: string, password: string): Promise<any>;
    doCancellation(clubId: number, classId: number, accesstoken: string, password: string): Promise<any>;
    getProfile(accesstoken: string): Promise<any>;
    getMemberClasses(accesstoken: string): Promise<any>;
    getAppointmentCategories(clubId: number): Promise<any>;
    getAppointmentTypesByCategory(clubId: number, categoryId: number): Promise<any>;
    getInstructorsByAppointmentType(clubId: number, appointmentTypeId: number): Promise<any>;
    lookupReservationTimeBlocks(clubId: number, lookupRequest: any): Promise<any>;
    bookAppointment(clubId: number, timeblock: any, accesstoken: string): Promise<any>;
}
