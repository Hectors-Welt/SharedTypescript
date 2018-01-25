import { ICourseManagementService } from "../interfaces/ICourseManagamentService";
import { ClassFilter } from "../models/CourseManagamentService/ClassFilter";
import { Class } from "../models/CourseManagamentService/Class";
export declare class CourseManagementService implements ICourseManagementService {
    private host;
    private port;
    constructor(host: string, port: number);
    getClasses(filter: ClassFilter): Promise<Class[]>;
}
