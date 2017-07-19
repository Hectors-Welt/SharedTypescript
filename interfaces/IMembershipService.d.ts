import ContractTemplate from '../models/ContractTemplate';
interface IMembershipService {
    getContractTemplatesAvailable(): Promise<ContractTemplate[]>;
}
export default IMembershipService;
