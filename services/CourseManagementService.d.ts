import { ICourseManagementService } from "../interfaces/ICourseManagamentService";
import { ClassFilter } from "../models/CourseManagamentService/ClassFilter";
import { Class } from "../models/CourseManagamentService/Class";
import { Course } from '../models/CourseManagamentService/Course';
import { CourseType } from '../models/CourseManagamentService/CourseType';
import { CourseLevel } from '../models/CourseManagamentService/CourseLevel';
export declare class CourseManagementService implements ICourseManagementService {
    private host;
    private port;
    constructor(host: string, port: number);
    getClasses(filter: ClassFilter): Promise<Class[]>;
    getCourses(): Promise<Course[]>;
    getCourseTypes(): Promise<CourseType[]>;
    getCourseLevels(): Promise<CourseLevel[]>;
}
