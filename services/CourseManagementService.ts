import * as popsicle from 'popsicle'

import { ICourseManagementService } from "../interfaces/ICourseManagamentService";
import { ClassFilter } from "../models/CourseManagamentService/ClassFilter";
import { Class } from "../models/CourseManagamentService/Class";

export class CourseManagementService implements ICourseManagementService {
  constructor(private host: string, private port: number) {}
  
  getClasses(filter: ClassFilter): Promise<Class[]> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/getClasses`,
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        },
        body: filter
      })
        .use(popsicle.plugins.parse('json'))
        .then((result) => {
          resolve(result.body);
        })
        .catch((error) => {
          reject(new Error('failed to get classes from course management service'));
        });
    })
  }
}