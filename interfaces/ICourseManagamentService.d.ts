import { ClassFilter } from "../models/CourseManagamentService/ClassFilter";
import { Class } from "../models/CourseManagamentService/Class";
import { Course } from "../models/CourseManagamentService/Course";
import { CourseType } from "../models/CourseManagamentService/CourseType";
import { CourseLevel } from "../models/CourseManagamentService/CourseLevel";
export interface ICourseManagementService {
    getClasses(filter: ClassFilter): Promise<Class[]>;
    getCourses(): Promise<Course[]>;
    getCourseTypes(): Promise<CourseType[]>;
    getCourseLevels(): Promise<CourseLevel[]>;
}
