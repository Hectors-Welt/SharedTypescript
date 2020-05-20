import { ContractTemplate } from '../models/MembershipService/ContractTemplate';
import { Contract } from '../models/MembershipService/Contract';
import { IService } from './IService';
import { CreateContractsCommand } from '../models/MembershipService/CreateContractsCommand';
import { TerminateContractCommand } from '../models/MembershipService/TerminateContractCommand';
import { Recommendation } from '../models/MembershipService/Recommendation';

export interface IMembershipService extends IService {
  getActiveContractNames(): Promise<string[]>;

  getContractTemplatesAvailable(): Promise<ContractTemplate[]>;

  getCurrentContractsByCustomerId(customerId: number): Promise<Contract[]>;

  getRecommendationsByCustomerId(customerId: number): Promise<Recommendation[]>;

  getContractsTerminatedByCustomerId(customerId: number): Promise<Contract[]>;

  rejectPendingMembership(processId: number): Promise<void>;

  createContracts(command: CreateContractsCommand): Promise<void>;

  terminateContract(command: TerminateContractCommand): Promise<void>;
}
