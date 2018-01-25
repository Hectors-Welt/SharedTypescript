import { Employee } from '../models/EmployeesService/Employee';

export interface IEmployeesService {
  validateEmployeeByCredentials(firstname: string, lastname: string, password: string): Promise<Employee>
  getEmployeeByCustomerId(customerId: number): Promise<Employee>
  getEmployeesPresent(studioId: number): Promise<Employee[]>
}