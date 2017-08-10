export interface ILegacyAppsiteBackend {
    login(loginRequest: any): Promise<any>;
    getAppsettings(): Promise<any>;
    getCoursetypes(): Promise<any>;
    getCourselevels(): Promise<any>;
    getClubs(): Promise<any>;
    getInstructors(clubId: number): Promise<any>;
    getRooms(clubId: number): Promise<any>;
    getCourses(clubId: number): Promise<any>;
    getClasses(clubId: number, filter: any, accesstoken: string): Promise<any>;
    getPriceInformation(clubId: number, classId: number, accesstoken: string): Promise<any>;
    doReservation(clubId: number, classId: number, accesstoken: string, password: string): Promise<any>;
}
