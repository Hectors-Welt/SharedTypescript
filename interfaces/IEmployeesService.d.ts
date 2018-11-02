import { Employee } from '../models/EmployeesService/Employee';
import { IService } from './IService';
export interface IEmployeesService extends IService {
    validateEmployeeByCredentials(firstname: string, lastname: string, password: string): Promise<Employee>;
    getEmployeeByCustomerId(customerId: number): Promise<Employee>;
    getEmployeesPresent(studioId: number): Promise<Employee[]>;
    getAllEmployees(): Promise<Employee[]>;
}
