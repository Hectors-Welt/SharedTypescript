import * as popsicle from 'popsicle'

import { ICourseManagementService } from "../interfaces/ICourseManagamentService";
import { ClassFilter } from "../models/CourseManagamentService/ClassFilter";
import { Class } from "../models/CourseManagamentService/Class";
import { Course } from '../models/CourseManagamentService/Course';

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
}