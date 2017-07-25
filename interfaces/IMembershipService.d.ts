import { ContractTemplate } from '../models/MembershipService/ContractTemplate';
export interface IMembershipService {
    getContractTemplatesAvailable(): Promise<ContractTemplate[]>;
}
