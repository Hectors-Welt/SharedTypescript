import { ClassFilter } from "../models/CourseManagamentService/ClassFilter";
import { Class } from "../models/CourseManagamentService/Class";
import { Course } from "../models/CourseManagamentService/Course";

export interface ICourseManagementService {
    getClasses(filter: ClassFilter): Promise<Class[]>
    getCourses(): Promise<Course[]>
}