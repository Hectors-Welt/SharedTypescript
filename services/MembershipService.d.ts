import { ContractTemplate } from '../models/ContractTemplate';
import { IMembershipService } from '../interfaces/IMembershipService';
export declare class MembershipService implements IMembershipService {
    private host;
    private port;
    constructor(host: string, port: number);
    getContractTemplatesAvailable(): Promise<ContractTemplate[]>;
}
