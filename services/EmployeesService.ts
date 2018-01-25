import * as popsicle from 'popsicle';
import { Employee } from '../models/EmployeesService/Employee';
import { IEmployeesService } from '../interfaces/IEmployeesService';

export class EmployeesService implements IEmployeesService {

  constructor(private host: string, private port: number) { }

  validateEmployeeByCredentials(name: string, surname: string, password: string): Promise<Employee> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/validateEmployeeByCredentials`,
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
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
          reject(new Error('failed to validate credentials at employees service'));
        }
        else {
          resolve(result.body);
        }
      })
      .catch((error) => {
        reject(new Error('failed to validate credentials at employees service'));
      });
    });
  }

  getEmployeeByCustomerId(customerId: number): Promise<Employee> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/getEmployeeByCustomerId/${customerId}`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        },
      })
      .use(popsicle.plugins.parse('json'))
      .then((result) => {
        if (result.status !== 200) {
          reject(new Error(`failed to retrieve employee from employees service`))
        }
        resolve(result.body);
      })
      .catch((error) => {
        reject(new Error(`failed to retrieve employee from employees service: ${error.message}`));
      })
    })
  }

  getEmployeesPresent(studioId: number): Promise<Employee[]> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/getEmployeesPresentInClub/${studioId}`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        },
      })
      .use(popsicle.plugins.parse('json'))
      .then((result) => {
        if (result.status !== 200) {
          reject(new Error(`failed to retrieve employees from employees service`))
        }
        resolve(result.body);
      })
      .catch((error) => {
        reject(new Error(`failed to retrieve employees from employees service: ${error.message}`));
      })
    })
  }

  getAllEmployees(): Promise<Employee[]> {
    return new Promise((resolve, reject) => {
      popsicle.request({
        url: `http://${this.host}:${this.port}/employees`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json',
        },
      })
      .use(popsicle.plugins.parse('json'))
      .then((result) => {
        if (result.status !== 200) {
          reject(new Error(`failed to retrieve employees from employees service`))
        }
        resolve(result.body);
      })
      .catch((error) => {
        reject(new Error(`failed to retrieve employees from employees service: ${error.message}`));
      })
    })
  }
}