import { ContractTemplate } from '../models/MembershipService/ContractTemplate';
import { IMembershipService } from '../interfaces/IMembershipService';
import { Contract } from '../models/MembershipService/Contract';
import { CreateContractsCommand } from '../models/MembershipService/CreateContractsCommand';
import { TerminateContractCommand } from '../models/MembershipService/TerminateContractCommand';
import { Recommendation } from '../models/MembershipService/Recommendation';
import { TerminateAllContractsCommand } from '../models/MembershipService/TerminateAllContractsCommand';
import { TerminateContractsCommandResult } from '../models/MembershipService/TerminateContractsCommandResult';
import { CreateContractsCommandResult } from '../models/MembershipService/CreateContractsCommandResult';
import { UpdatePricePerIntervalCommand } from '../models/MembershipService/UpdatePricePerIntervalCommand';
import { UpdatePricePerIntervalCommandResult } from '../models/MembershipService/UpdatePricePerIntervalCommandResult';
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
    createContracts(command: CreateContractsCommand): Promise<CreateContractsCommandResult>;
    terminateContract(command: TerminateContractCommand): Promise<TerminateContractsCommandResult>;
    terminateAllContracts(command: TerminateAllContractsCommand): Promise<TerminateContractsCommandResult>;
    updatePricePerInterval(command: UpdatePricePerIntervalCommand): Promise<UpdatePricePerIntervalCommandResult>;
}
