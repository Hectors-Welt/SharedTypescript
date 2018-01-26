import { ICourseManagementService } from "../interfaces/ICourseManagamentService";
import { ClassFilter } from "../models/CourseManagamentService/ClassFilter";
import { Class } from "../models/CourseManagamentService/Class";
import { Course } from '../models/CourseManagamentService/Course';
export declare class CourseManagementService implements ICourseManagementService {
    private host;
    private port;
    constructor(host: string, port: number);
    getClasses(filter: ClassFilter): Promise<Class[]>;
    getCourses(): Promise<Course[]>;
}
