import { Employee } from '../models/EmployeesService/Employee';
import { IEmployeesService } from '../interfaces/IEmployeesService';
export declare class EmployeesService implements IEmployeesService {
    host: string;
    port: number;
    version: string;
    baseUrl: string;
    constructor(host: string, port: number, version: string);
    validateEmployeeByCredentials(name: string, surname: string, password: string): Promise<Employee>;
    getEmployeeByCustomerId(customerId: number): Promise<Employee>;
    getEmployeesPresent(studioId: number): Promise<Employee[]>;
    getAllEmployees(): Promise<Employee[]>;
}
