import { Employee } from '../models/EmployeesService/Employee';
import { IService } from './IService';
import { WorktimeType } from '../models/EmployeesService/WorktimeType';
import { Worktime } from '../models/EmployeesService/Worktime';

export interface IEmployeesService extends IService {
  validateEmployeeByCredentials(firstname: string, lastname: string, password: string): Promise<Employee>;

  getEmployeeById(employeeId: number): Promise<Employee>;
  
  getEmployeeByCustomerId(customerId: number): Promise<Employee>;

  getEmployeesPresent(studioId: number): Promise<Employee[]>;

  getAllEmployees(): Promise<Employee[]>;

  getWorktimeTypes(employeeId: number): Promise<WorktimeType[]>;

  registerWorktime(employeeId: number, worktime: Worktime): Promise<any>;

  getWorktimesRegistered(employeeId: number, from: string, till: string): Promise<Worktime[]>;
}