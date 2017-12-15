import { ContractTemplate } from '../models/MembershipService/ContractTemplate';
import { Contract } from '../models/MembershipService/Contract';
export interface IMembershipService {
    getContractTemplatesAvailable(): Promise<ContractTemplate[]>;
    getCurrentContractsByCustomerId(customerId: number): Promise<Contract[]>;
}
