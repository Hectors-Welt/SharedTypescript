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
import { ApiClient } from './ApiClient';

export class CourseManagementService implements ICourseManagementService {
  baseUrl: string;

  constructor(private host: string, private port: number) {
    this.baseUrl = `http://${host}:${port}`;
  }

  async getClasses(filter: ClassFilter): Promise<Class[]> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/classes/filter`, filter);
    } catch (err) {
      throw new Error('failed to get classes from course management service');
    }
  }

  async getPriceInformation(classId: number, customerId: number): Promise<any> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/classes/${classId}/priceInformationForCustomerId/${customerId}`);
    } catch (err) {
      throw new Error('failed to get priceinformation from course management service');
    }
  }

  async doReservation(classId: number, customerId: number): Promise<any> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/classes/${classId}/doReservationForCustomerId/${customerId}`);
    } catch (err) {
      throw new Error('failed to do reservation at course management service');
    }
  }

  async doCancellation(classId: number, customerId: number): Promise<any> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/classes/${classId}/doCancellationForCustomerId/${customerId}`);
    } catch (err) {
      throw new Error('failed to do cancellation at course management service');
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

  async bookAppointment(appointmentRequest: AppointmentBooking): Promise<void> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/appointments/bookAppointment`, appointmentRequest);
    } catch (err) {
      throw new Error('failed to book appointment at course management service');
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
}