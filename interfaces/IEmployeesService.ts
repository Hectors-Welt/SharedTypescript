import { Employee } from '../models/Employee'

export interface IEmployeesService {
  validateEmployeeByCredentials(firstname: string, lastname: string, password: string): Promise<Employee>
}