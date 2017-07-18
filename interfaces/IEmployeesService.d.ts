import Employee from '../models/Employee';
interface IEmployeesService {
    validateEmployeeByCredentials(firstname: string, lastname: string, password: string): Promise<Employee>;
}
export default IEmployeesService;
