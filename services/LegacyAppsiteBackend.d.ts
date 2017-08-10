import { ILegacyAppsiteBackend } from '../interfaces/ILegacyAppsiteBackend';
export declare class LegacyAppsiteBackend implements ILegacyAppsiteBackend {
    private host;
    private port;
    constructor(host: string, port: number);
    login(loginRequest: any): Promise<any>;
    getAppsettings(): Promise<any>;
    getCoursetypes(): Promise<any>;
    getCourselevels(): Promise<any>;
    getClubs(): Promise<any>;
    getInstructors(clubId: number): Promise<any>;
    getRooms(clubId: number): Promise<any>;
    getCourses(clubId: number): Promise<any>;
    getClasses(clubId: number, filter: any): Promise<any>;
}
