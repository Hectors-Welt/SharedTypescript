import * as express from 'express';

import { Employee } from '../models/EmployeesService/Employee';

export interface IRequest extends express.Request {
  employee: Employee;
}