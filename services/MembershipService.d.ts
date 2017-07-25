import { ContractTemplate } from '../models/MembershipService/ContractTemplate';
import { IMembershipService } from '../interfaces/IMembershipService';
export declare class MembershipService implements IMembershipService {
    private host;
    private port;
    constructor(host: string, port: number);
    getContractTemplatesAvailable(): Promise<ContractTemplate[]>;
}
