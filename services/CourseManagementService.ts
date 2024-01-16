import { ICourseManagementService } from '../interfaces/ICourseManagementService';
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
import { ApiClient } from './ApiClient';
import { ClassAttendee } from '../models/CourseManagementService/ClassAttendee';
import { PunishmentContainer } from '../models/CourseManagementService/PunishmentContainer';
import { ReservationResult } from '../models/CourseManagementService/ReservationResult';
import { ClickAndMeetSettings } from '../models/CourseManagementService/ClickAndMeetSettings';
import { DeleteAppointmentCommandResult } from '../models/CourseManagementService/DeleteAppointmentCommandResult';

export class CourseManagementService implements ICourseManagementService {
  host: string;
  port: number;
  version: string;
  baseUrl: string;

  constructor(host: string, port: number, version: string) {
    this.host = host;
    this.port = port;
    this.version = version;
    this.baseUrl = `http://${host}:${port}`;
  }

  async getClickAndMeetSettings(): Promise<ClickAndMeetSettings> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/clickAndMeet`);
    } catch (err) {
      throw new Error('failed to get click and meet settings from course management service');
    }
  }

  async getClasses(filter: ClassFilter): Promise<Class[]> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/classes/filter`, filter);
    } catch (err) {
      throw new Error('failed to get classes from course management service');
    }
  }

  async getPriceInformationForClass(classId: number, customerId: number): Promise<any> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/classes/${classId}/priceInformationForCustomerId/${customerId}`);
    } catch (err) {
      throw new Error('failed to get price information from course management service');
    }
  }

  async bookCustomerIntoClass(classId: number, customerId: number): Promise<ReservationResult> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/classes/${classId}/doReservationForCustomerId/${customerId}`);
    } catch (err) {
      throw new Error('failed to book customer into class at course management service');
    }
  }

  async cancelCustomerFromClass(classId: number, customerId: number): Promise<any> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/classes/${classId}/doCancellationForCustomerId/${customerId}`);
    } catch (err) {
      throw new Error('failed to cancel customer from class at course management service');
    }
  }

  async getCourses(): Promise<Course[]> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/courses`);
    } catch (err) {
      throw new Error('failed to get courses from course management service');
    }
  }

  async getCourseTypes(): Promise<CourseType[]> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/courseTypes`);
    } catch (err) {
      throw new Error('failed to get course types from course management service');
    }
  }

  async getCourseLevels(): Promise<CourseLevel[]> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/courseLevels`);
    } catch (err) {
      throw new Error('failed to get course levels from course management service');
    }
  }

  async getRooms(): Promise<Room[]> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/rooms`);
    } catch (err) {
      new Error('failed to get rooms from course management service');
    }
  }

  async getAppointments(customerId?: number): Promise<Appointment[]> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/appointments/byCustomerId/${customerId}`);
    } catch (err) {
      throw new Error('failed to get appointments from course management service');
    }
  }

  async lookupFreeTimeBlocks(searchRequest: AppointmentSearch): Promise<TimeBlock[]> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/appointments/lookupFreeTimeBlocks`, searchRequest);
    } catch (err) {
      throw new Error('failed to get time blocks from course management service');
    }
  }

  async lookupNextFreeTimeBlocks(appointmentId: number, searchRequest: AppointmentSearch): Promise<TimeBlock[]> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/appointments/${appointmentId}/lookupNextFreeTimeBlocks`, searchRequest);
    } catch (err) {
      throw new Error('failed to get time blocks from course management service');
    }
  }

  async bookAppointment(appointmentRequest: AppointmentBooking): Promise<ReservationResult> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/appointments/bookAppointment`, appointmentRequest);
    } catch (err) {
      throw new Error('failed to book appointment at course management service');
    }
  }

  async moveAppointment(appointmentId: number, appointmentRequest: AppointmentBooking): Promise<void> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/appointments/${appointmentId}/move`, appointmentRequest);
    } catch (err) {
      throw new Error('failed to move appointment at course management service');
    }
  }

  async cancelAppointment(appointmentId: number): Promise<DeleteAppointmentCommandResult> {
    try {
      return await ApiClient.DELETE(`${this.baseUrl}/appointments/${appointmentId}`);
    } catch (err) {
      throw new Error('failed to cancel appointment at course management service');
    }
  }

  async lookupCounselingTimeBlocks(searchRequest: AppointmentSearch): Promise<TimeBlock[]> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/appointments/lookupCounselingTimeBlocks`, searchRequest);
    } catch (err) {
      throw new Error('failed to get time blocks from course management service');
    }
  }

  async lookupReplacements(classId: number): Promise<number[]> {
    try {
      return (await ApiClient.GET(`${this.baseUrl}/classes/${classId}/lookupReplacements`)).employeeIds;
    } catch (err) {
      throw new Error('failed to get replacements from course management service');
    }
  }

  async setInstructor(
    classId: number,
    oldInstructorId: number,
    newInstructorId: number,
    markAsReplacement: boolean = true,
  ): Promise<any> {
    try {
      return await ApiClient.POST(
        `${this.baseUrl}/classes/${classId}/replace/${oldInstructorId}/with/${newInstructorId}?markAsReplacement=${markAsReplacement}`,
      );
    } catch (err) {
      throw new Error('failed to set instructor at course management service');
    }
  }

  async closeClass(classId: number, attendees: ClassAttendee[]): Promise<any> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/classes/${classId}/close`, attendees);
    } catch (err) {
      throw new Error('failed to close class at course management service');
    }
  }

  async cancelClass(classId: number): Promise<any> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/classes/${classId}/cancel`);
    } catch (err) {
      throw new Error('failed to cancel class at course management service');
    }
  }

  async getPunishments(): Promise<PunishmentContainer[]> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/punishments`);
    } catch (err) {
      new Error('failed to get punishments from course management service');
    }
  }

  async getPunishmentByCustomerId(customerId: number): Promise<PunishmentContainer> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/punishments/${customerId}`);
    } catch (err) {
      new Error('failed to get punishment by customerId from course management service');
    }
  }

  async resetPunishmentForCustomerId(customerId: number): Promise<PunishmentContainer> {
    try {
      return await ApiClient.DELETE(`${this.baseUrl}/punishments/${customerId}`);
    } catch (err) {
      new Error('failed to reset punishment for customerId at course management service');
    }
  }
}
