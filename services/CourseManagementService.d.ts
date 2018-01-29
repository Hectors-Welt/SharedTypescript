import { ICourseManagementService } from "../interfaces/ICourseManagamentService";
import { ClassFilter } from "../models/CourseManagamentService/ClassFilter";
import { Class } from "../models/CourseManagamentService/Class";
import { Course } from '../models/CourseManagamentService/Course';
import { CourseType } from '../models/CourseManagamentService/CourseType';
import { CourseLevel } from '../models/CourseManagamentService/CourseLevel';
import { Room } from '../models/CourseManagamentService/Room';
export declare class CourseManagementService implements ICourseManagementService {
    private host;
    private port;
    constructor(host: string, port: number);
    getClasses(filter: ClassFilter): Promise<Class[]>;
    getClass(classId: number, customerId?: number): Promise<any>;
    getPriceInformation(classId: number, customerId: number): Promise<any>;
    doReservation(classId: number, customerId: number): Promise<any>;
    doCancellation(classId: number, customerId: number): Promise<any>;
    getCourses(): Promise<Course[]>;
    getCourseTypes(): Promise<CourseType[]>;
    getCourseLevels(): Promise<CourseLevel[]>;
    getRooms(): Promise<Room[]>;
}
