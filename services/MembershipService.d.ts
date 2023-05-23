import { ContractTemplate } from '../models/MembershipService/ContractTemplate';
import { IMembershipService } from '../interfaces/IMembershipService';
import { Contract } from '../models/MembershipService/Contract';
import { CreateContractsCommand } from '../models/MembershipService/CreateContractsCommand';
import { TerminateContractCommand } from '../models/MembershipService/TerminateContractCommand';
import { Recommendation } from '../models/MembershipService/Recommendation';
import { TerminateAllContractsCommand } from '../models/MembershipService/TerminateAllContractsCommand';
import { TerminateContractsCommandResult } from '../models/MembershipService/TerminateContractsCommandResult';
export declare class MembershipService implements IMembershipService {
    host: string;
    port: number;
    version: string;
    baseUrl: string;
    constructor(host: string, port: number, version: string);
    getActiveContractNames(): Promise<string[]>;
    getContractTemplatesAvailable(customerId?: number): Promise<ContractTemplate[]>;
    getCurrentContractsByCustomerId(customerId: number): Promise<Contract[]>;
    getRecommendationsByCustomerId(customerId: number): Promise<Recommendation[]>;
    getContractsTerminatedByCustomerId(customerId: number): Promise<Contract[]>;
    rejectPendingMembership(processId: number): Promise<void>;
    createContracts(command: CreateContractsCommand): Promise<void>;
    terminateContract(command: TerminateContractCommand): Promise<TerminateContractsCommandResult>;
    terminateAllContracts(command: TerminateAllContractsCommand): Promise<TerminateContractsCommandResult>;
}
