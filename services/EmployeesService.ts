import * as popsicle from 'popsicle'
import { Employee } from '../models/Employee'
import { IEmployeesService } from '../interfaces/IEmployeesService'

export class EmployeesService implements IEmployeesService {

  constructor(private host: string, private port: number) {

  }

  validateEmployeeByCredentials(name: string, surname: string, password: string): Promise<Employee> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/validateEmployeeByCredentials`,
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json'
        },
        body: {
          name,
          surname,
          password
        }
      })
        .use(popsicle.plugins.parse('json'))
        .then((result) => {
          if (result.status !== 200) {
            reject(new Error("failed to validate credentials at employees service"));
          }
          else {
            resolve(result.body);
          }
        })
        .catch((error) => {
          reject(new Error("failed to validate credentials at employees service"));
        })
    })
  }
}