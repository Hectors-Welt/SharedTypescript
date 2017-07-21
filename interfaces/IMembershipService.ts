import { ContractTemplate } from '../models/ContractTemplate';

export interface IMembershipService {
  getContractTemplatesAvailable(): Promise<ContractTemplate[]>;
}