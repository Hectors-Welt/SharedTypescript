import ContractTemplate from '../models/ContractTemplate';
import IMembershipService from '../interfaces/IMembershipService';
declare class MembershipService implements IMembershipService {
    private host;
    private port;
    constructor(host: string, port: number);
    getContractTemplatesAvailable(): Promise<ContractTemplate[]>;
}
export default MembershipService;
