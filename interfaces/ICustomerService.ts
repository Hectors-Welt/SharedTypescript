import Customer from '../models/Customer'

interface ICustomerService {
    getCustomerByCustomerId(customerId: number): Promise<Customer>
}

export default ICustomerService