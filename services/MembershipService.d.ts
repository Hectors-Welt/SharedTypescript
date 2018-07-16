import { ContractTemplate } from '../models/MembershipService/ContractTemplate';
import { IMembershipService } from '../interfaces/IMembershipService';
import { Contract } from '../models/MembershipService/Contract';
export declare class MembershipService implements IMembershipService {
    private host;
    private port;
    baseUrl: string;
    constructor(host: string, port: number);
    getContractTemplatesAvailable(): Promise<ContractTemplate[]>;
    getCurrentContractsByCustomerId(customerId: number): Promise<Contract[]>;
    getContractsTerminatedByCustomerId(customerId: number): Promise<Contract[]>;
}
