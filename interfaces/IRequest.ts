import * as express from 'express'

import Employee from '../models/Employee'

interface IRequest extends express.Request {
	employee: Employee 
}

export default IRequest