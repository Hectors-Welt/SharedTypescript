import { Employee } from '../models/EmployeesService/Employee';

export interface IEmployeesService {
  validateEmployeeByCredentials(firstname: string, lastname: string, password: string): Promise<Employee>;
}