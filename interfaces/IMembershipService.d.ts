import { ContractTemplate } from '../models/MembershipService/ContractTemplate';
import { Contract } from '../models/MembershipService/Contract';
import { IService } from './IService';
import { CreateContractsCommand } from '../models/MembershipService/CreateContractsCommand';
import { TerminateContractCommand } from '../models/MembershipService/TerminateContractCommand';
export interface IMembershipService extends IService {
    getContractTemplatesAvailable(): Promise<ContractTemplate[]>;
    getCurrentContractsByCustomerId(customerId: number): Promise<Contract[]>;
    getContractsTerminatedByCustomerId(customerId: number): Promise<Contract[]>;
    rejectPendingMembership(processId: number): Promise<void>;
    createContracts(command: CreateContractsCommand): Promise<void>;
    terminateContracts(command: TerminateContractCommand): Promise<void>;
}
