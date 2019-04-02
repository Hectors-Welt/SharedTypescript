import { Employee } from '../models/EmployeesService/Employee';
import { IEmployeesService } from '../interfaces/IEmployeesService';
import { ApiClient } from './ApiClient';
import { WorktimeType } from '../models/EmployeesService/WorktimeType';
import { Worktime } from '../models/EmployeesService/Worktime';

export class EmployeesService implements IEmployeesService {
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

  async getWorktimeTypes(employeeId: number): Promise<WorktimeType[]> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/employees/${employeeId}/worktimetypes`);
    } catch (err) {
      throw new Error(`failed to retrieve worktime types from employees service: ${err.message}`);
    }
  }

  async registerWorktime(employeeId: number, worktime: Worktime): Promise<any> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/employees/${employeeId}/worktimes`, worktime);
    } catch (err) {
      throw new Error(`failed to register worktime at employees service: ${err.message}`);
    }
  }

  async getWorktimesRegistered(employeeId: number, from: string, till: string): Promise<Worktime[]> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/employees/${employeeId}/worktimes?from=${from}&till=${till}`);
    } catch (err) {
      throw new Error(`failed to retrieve registered worktimes from employees service: ${err.message}`);
    }
  }
}