import { ClassFilter } from '../models/CourseManagementService/ClassFilter';
import { Class } from '../models/CourseManagementService/Class';
import { Course } from '../models/CourseManagementService/Course';
import { CourseType } from '../models/CourseManagementService/CourseType';
import { CourseLevel } from '../models/CourseManagementService/CourseLevel';
import { Room } from '../models/CourseManagementService/Room';
import { Appointment } from '../models/CourseManagementService/Appointment';
import { AppointmentSearch } from '../models/CourseManagementService/AppointmentSearch';
import { TimeBlock } from '../models/CourseManagementService/TimeBlock';
import { AppointmentBooking } from '../models/CourseManagementService/AppointmentBooking';
import { ClassAttendee } from '../models/CourseManagementService/ClassAttendee';
import { PunishmentContainer } from '../models/CourseManagementService/PunishmentContainer';
import { IService } from './IService';
import { ReservationResult } from '../models/CourseManagementService/ReservationResult';
import { ClickAndMeetSettings } from '../models/CourseManagementService/ClickAndMeetSettings';
import { CancellationResult } from '../models/CourseManagementService/CancellationResult';
import { CommandResult } from '../models/CourseManagementService/CommandResult';

export interface ICourseManagementService extends IService {
  getClasses(filter: ClassFilter): Promise<Class[]>;

  getPriceInformationForClass(classId: number, customerId: number): Promise<any>;

  bookCustomerIntoClass(classId: number, customerId: number): Promise<ReservationResult>;

  cancelCustomerFromClass(classId: number, customerId: number): Promise<CancellationResult>;

  getCourses(): Promise<Course[]>;

  getCourseTypes(): Promise<CourseType[]>;

  getCourseLevels(): Promise<CourseLevel[]>;

  getRooms(): Promise<Room[]>;

  getAppointments(customerId: number): Promise<Appointment[]>;

  lookupFreeTimeBlocks(searchRequest: AppointmentSearch): Promise<TimeBlock[]>;

  lookupNextFreeTimeBlocks(appointmentId: number, searchRequest: AppointmentSearch): Promise<TimeBlock[]>;

  bookAppointment(bookingRequest: AppointmentBooking): Promise<ReservationResult>;

  moveAppointment(appointmentId: number, bookingRequest: AppointmentBooking): Promise<CommandResult>;

  cancelAppointment(appointmentId: number): Promise<CommandResult>;

  lookupCounselingTimeBlocks(searchRequest: AppointmentSearch): Promise<TimeBlock[]>;

  lookupReplacements(classId: number): Promise<number[]>;

  setInstructor(
    classId: number,
    oldInstructorId: number,
    newInstructorId: number,
    markAsReplacement?: boolean,
  ): Promise<any>;

  closeClass(classId: number, attendees: ClassAttendee[]): Promise<any>;

  cancelClass(classId: number): Promise<any>;

  getPunishments(): Promise<PunishmentContainer[]>;

  getPunishmentByCustomerId(customerId: number): Promise<PunishmentContainer>;

  resetPunishmentForCustomerId(customerId: number): Promise<PunishmentContainer>;

  getClickAndMeetSettings(): Promise<ClickAndMeetSettings>;
}
