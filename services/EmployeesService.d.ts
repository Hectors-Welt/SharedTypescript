import { Employee } from '../models/Employee';
import { IEmployeesService } from '../interfaces/IEmployeesService';
export declare class EmployeesService implements IEmployeesService {
    private host;
    private port;
    constructor(host: string, port: number);
    validateEmployeeByCredentials(name: string, surname: string, password: string): Promise<Employee>;
}
