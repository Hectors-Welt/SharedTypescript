import { ICourseManagementService } from "../interfaces/ICourseManagamentService";
import { ClassFilter } from "../models/CourseManagamentService/ClassFilter";
import { Class } from "../models/CourseManagamentService/Class";
import { Course } from '../models/CourseManagamentService/Course';
import { CourseType } from '../models/CourseManagamentService/CourseType';
import { CourseLevel } from '../models/CourseManagamentService/CourseLevel';
import { Room } from '../models/CourseManagamentService/Room';
import { Appointment } from '../models/CourseManagamentService/Appointment';
import { AppointmentSearch } from '../models/CourseManagamentService/AppointmentSearch';
import { TimeBlock } from '../models/CourseManagamentService/TimeBlock';
import { AppointmentBooking } from '../models/CourseManagamentService/AppointmentBooking';
export declare class CourseManagementService implements ICourseManagementService {
    private host;
    private port;
    baseUrl: string;
    constructor(host: string, port: number);
    getClasses(filter: ClassFilter): Promise<Class[]>;
    getPriceInformation(classId: number, customerId: number): Promise<any>;
    doReservation(classId: number, customerId: number): Promise<any>;
    doCancellation(classId: number, customerId: number): Promise<any>;
    getCourses(): Promise<Course[]>;
    getCourseTypes(): Promise<CourseType[]>;
    getCourseLevels(): Promise<CourseLevel[]>;
    getRooms(): Promise<Room[]>;
    getAppointments(customerId?: number): Promise<Appointment[]>;
    lookupFreeTimeBlocks(searchRequest: AppointmentSearch): Promise<TimeBlock[]>;
    bookAppointment(appointmentRequest: AppointmentBooking): Promise<void>;
    lookupCounselingTimeBlocks(searchRequest: AppointmentSearch): Promise<TimeBlock[]>;
}
