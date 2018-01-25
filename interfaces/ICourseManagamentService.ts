import { ClassFilter } from "../models/CourseManagamentService/ClassFilter";
import { Class } from "../models/CourseManagamentService/Class";

export interface ICourseManagementService {
    getClasses(filter: ClassFilter): Promise<Class[]>
}