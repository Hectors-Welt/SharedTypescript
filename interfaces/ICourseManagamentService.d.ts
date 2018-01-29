import { ClassFilter } from "../models/CourseManagamentService/ClassFilter";
import { Class } from "../models/CourseManagamentService/Class";
import { Course } from "../models/CourseManagamentService/Course";
import { CourseType } from "../models/CourseManagamentService/CourseType";
import { CourseLevel } from "../models/CourseManagamentService/CourseLevel";
import { Room } from "../models/CourseManagamentService/Room";
export interface ICourseManagementService {
    getClasses(filter: ClassFilter): Promise<Class[]>;
    getPriceInformation(classId: number, customerId: number): Promise<any>;
    doReservation(classId: number, customerId: number): Promise<any>;
    getCourses(): Promise<Course[]>;
    getCourseTypes(): Promise<CourseType[]>;
    getCourseLevels(): Promise<CourseLevel[]>;
    getRooms(): Promise<Room[]>;
}
