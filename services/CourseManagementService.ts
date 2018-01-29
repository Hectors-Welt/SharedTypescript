import * as popsicle from 'popsicle'

import { ICourseManagementService } from "../interfaces/ICourseManagamentService";
import { ClassFilter } from "../models/CourseManagamentService/ClassFilter";
import { Class } from "../models/CourseManagamentService/Class";
import { Course } from '../models/CourseManagamentService/Course';
import { CourseType } from '../models/CourseManagamentService/CourseType';
import { CourseLevel } from '../models/CourseManagamentService/CourseLevel';
import { Room } from '../models/CourseManagamentService/Room';

export class CourseManagementService implements ICourseManagementService {
  constructor(private host: string, private port: number) {}

  getClasses(filter: ClassFilter): Promise<Class[]> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/classes/filter`,
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        },
        body: filter
      })
        .use(popsicle.plugins.parse('json'))
        .then((result) => {
          if(result.status == 200){
            resolve(result.body);
          }
          else {
            reject(new Error('failed to get classes from course management service'));  
          }
        })
        .catch((error) => {
          reject(new Error('failed to get classes from course management service'));
        });
    })
  }

  getPriceInformation(classId: number, customerId: number): Promise<any> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/classes/${classId}/priceInformationForCustomerId/${customerId}`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        }
      })
        .use(popsicle.plugins.parse('json'))
        .then((result) => {
          if(result.status == 200){
            resolve(result.body);
          }
          else {
            reject(new Error('failed to get priceinformation from course management service'));  
          }
        })
        .catch((error) => {
          reject(new Error('failed to get priceinformation from course management service'));
        });
    })
  }

  doReservation(classId: number, customerId: number): Promise<any> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/classes/${classId}/doReservationForCustomerId/${customerId}`,
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        }
      })
        .use(popsicle.plugins.parse('json'))
        .then((result) => {
          if(result.status == 200){
            resolve(result.body);
          }
          else {
            reject(new Error('failed to do reservation at course management service'));  
          }
        })
        .catch((error) => {
          reject(new Error('failed to do reservation at course management service'));
        });
    })
  }

  doCancellation(classId: number, customerId: number): Promise<any> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/classes/${classId}/doCancellationForCustomerId/${customerId}`,
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        }
      })
        .use(popsicle.plugins.parse('json'))
        .then((result) => {
          if(result.status == 200){
            resolve(result.body);
          }
          else {
            reject(new Error('failed to do reservation at course management service'));  
          }
        })
        .catch((error) => {
          reject(new Error('failed to do reservation at course management service'));
        });
    })
  }

  getCourses(): Promise<Course[]> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/courses`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        }
      })
        .use(popsicle.plugins.parse('json'))
        .then((result) => {
          if(result.status == 200){
            resolve(result.body);
          }
          else {
            reject(new Error('failed to get courses from course management service'));  
          }
        })
        .catch((error) => {
          reject(new Error('failed to get courses from course management service'));
        });
    })
  }

  getCourseTypes(): Promise<CourseType[]> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/courseTypes`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        }
      })
        .use(popsicle.plugins.parse('json'))
        .then((result) => {
          if(result.status == 200){
            resolve(result.body);
          }
          else {
            reject(new Error('failed to get course types from course management service'));  
          }
        })
        .catch((error) => {
          reject(new Error('failed to get course types from course management service'));
        });
    })
  }

  getCourseLevels(): Promise<CourseLevel[]> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/courseLevels`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        }
      })
        .use(popsicle.plugins.parse('json'))
        .then((result) => {
          if(result.status == 200){
            resolve(result.body);
          }
          else {
            reject(new Error('failed to get course levels from course management service'));  
          }
        })
        .catch((error) => {
          reject(new Error('failed to get course levels from course management service'));
        });
    })
  }

  getRooms(): Promise<Room[]> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/rooms`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        }
      })
        .use(popsicle.plugins.parse('json'))
        .then((result) => {
          if(result.status == 200){
            resolve(result.body);
          }
          else {
            reject(new Error('failed to get rooms from course management service'));  
          }
        })
        .catch((error) => {
          reject(new Error('failed to get rooms from course management service'));
        });
    })
  }
}