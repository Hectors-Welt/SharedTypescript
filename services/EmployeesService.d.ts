import { Employee } from '../models/EmployeesService/Employee';
import { IEmployeesService } from '../interfaces/IEmployeesService';
import { WorktimeType } from '../models/EmployeesService/WorktimeType';
import { Worktime } from '../models/EmployeesService/Worktime';
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
    getWorktimeTypes(employeeId: number): Promise<WorktimeType[]>;
    registerWorktime(employeeId: number, worktime: Worktime): Promise<any>;
    getWorktimesRegistered(employeeId: number, from: string, till: string): Promise<Worktime[]>;
}
