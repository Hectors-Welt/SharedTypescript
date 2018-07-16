import { Employee } from '../models/EmployeesService/Employee';
import { IEmployeesService } from '../interfaces/IEmployeesService';
import { ApiClient } from './ApiClient';

export class EmployeesService implements IEmployeesService {
  baseUrl: string;

  constructor(private host: string, private port: number) {
    this.baseUrl = `http://${host}:${port}`;
  }

  async validateEmployeeByCredentials(name: string, surname: string, password: string): Promise<Employee> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/validateEmployeeByCredentials`, {
        name,
        surname,
        password,
      });
    } catch (err) {
      throw new Error('failed to validate credentials at employees service');
    }
  }

  async getEmployeeByCustomerId(customerId: number): Promise<Employee> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/getEmployeeByCustomerId/${customerId}`);
    } catch (err) {
      throw new Error(`failed to retrieve employee from employees service: ${err.message}`);
    }
  }

  async getEmployeesPresent(studioId: number): Promise<Employee[]> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/getEmployeesPresentInClub/${studioId}`);
    } catch (err) {
      throw new Error(`failed to retrieve employees from employees service: ${err.message}`);
    }
  }

  async getAllEmployees(): Promise<Employee[]> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/employees`);
    } catch (err) {
      throw new Error(`failed to retrieve employees from employees service: ${err.message}`);
    }
  }
}