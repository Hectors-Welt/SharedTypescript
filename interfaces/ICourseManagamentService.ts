import { ClassFilter } from '../models/CourseManagamentService/ClassFilter';
import { Class } from '../models/CourseManagamentService/Class';
import { Course } from '../models/CourseManagamentService/Course';
import { CourseType } from '../models/CourseManagamentService/CourseType';
import { CourseLevel } from '../models/CourseManagamentService/CourseLevel';
import { Room } from '../models/CourseManagamentService/Room';
import { Appointment } from '../models/CourseManagamentService/Appointment';
import { AppointmentSearch } from '../models/CourseManagamentService/AppointmentSearch';
import { TimeBlock } from '../models/CourseManagamentService/TimeBlock';
import { AppointmentBooking } from '../models/CourseManagamentService/AppointmentBooking';
import { ClassAttendee } from '../models/CourseManagamentService/ClassAttendee';
import { PunishmentContainer } from '../models/CourseManagamentService/PunishmentContainer';

export interface ICourseManagementService {
  getClasses(filter: ClassFilter): Promise<Class[]>;

  getPriceInformation(classId: number, customerId: number): Promise<any>;

  doReservation(classId: number, customerId: number): Promise<any>;

  doCancellation(classId: number, customerId: number): Promise<any>;

  getCourses(): Promise<Course[]>;

  getCourseTypes(): Promise<CourseType[]>;

  getCourseLevels(): Promise<CourseLevel[]>;

  getRooms(): Promise<Room[]>;

  getAppointments(customerId: number): Promise<Appointment[]>;

  lookupFreeTimeBlocks(searchRequest: AppointmentSearch): Promise<TimeBlock[]>;

  bookAppointment(bookingRequest: AppointmentBooking): Promise<void>;

  lookupCounselingTimeBlocks(searchRequest: AppointmentSearch): Promise<TimeBlock[]>;

  lookupReplacements(classId: number): Promise<number[]>;

  setInstructor(classId: number, oldInstructorId: number, newInstructorId: number): Promise<any>;

  closeClass(classId: number, attendees: ClassAttendee[]): Promise<any>;

  cancelClass(classId: number): Promise<any>;

  getPunishments(): Promise<PunishmentContainer[]>;

  getPunishmentByCustomerId(customerId: number): Promise<PunishmentContainer>;

  resetPunishmentForCustomerId(customerId: number): Promise<PunishmentContainer>;
}