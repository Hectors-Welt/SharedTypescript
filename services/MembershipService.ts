import { ContractTemplate } from '../models/MembershipService/ContractTemplate';
import { IMembershipService } from '../interfaces/IMembershipService';
import { Contract } from '../models/MembershipService/Contract';
import { ApiClient } from './ApiClient';
import { CreateContractsCommand } from '../models/MembershipService/CreateContractsCommand';
import { TerminateContractCommand } from '../models/MembershipService/TerminateContractCommand';
import { Recommendation } from '../models/MembershipService/Recommendation';
import { TerminateAllContractsCommand } from '../models/MembershipService/TerminateAllContractsCommand';
import { TerminateAllContractsCommandResult } from '../models/MembershipService/TerminateAllContractsCommandResult';

export class MembershipService implements IMembershipService {
  host: string;
  port: number;
  version: string;
  baseUrl: string;

  constructor(host: string, port: number, version: string) {
    this.host = host;
    this.port = port;
    this.version = version;
    this.baseUrl = `http://${host}:${port}`;
  }

  async getActiveContractNames(): Promise<string[]> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/getActiveContractNames`);
    } catch (err) {
      throw new Error('failed to retrieve active contract names from membership service');
    }
  }

  async getContractTemplatesAvailable(customerId?: number): Promise<ContractTemplate[]> {
    try {
      let route = 'getContractTemplatesAvailable';
      if (customerId) {
        route += `?customerId=${customerId}`;
      }

      return await ApiClient.GET(`${this.baseUrl}/${route}`);
    } catch (err) {
      throw new Error('failed to retrieve contract templates from membership service');
    }
  }

  async getCurrentContractsByCustomerId(customerId: number): Promise<Contract[]> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/getCurrentContractsByCustomerId/${customerId}`);
    } catch (err) {
      throw new Error('failed to retrieve contracts from membership service');
    }
  }

  async getRecommendationsByCustomerId(customerId: number): Promise<Recommendation[]> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/getRecommendationsByCustomerId/${customerId}`);
    } catch (err) {
      throw new Error('failed to retrieve recommendations from membership service');
    }
  }

  async getContractsTerminatedByCustomerId(customerId: number): Promise<Contract[]> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/getContractsTerminatedByCustomerId/${customerId}`);
    } catch (err) {
      throw new Error('failed to retrieve terminated contracts from membership service');
    }
  }

  async rejectPendingMembership(processId: number): Promise<void> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/rejectPendingMembership/${processId}`);
    } catch (err) {
      throw new Error('failed to reject pending mebership from membership service');
    }
  }

  async createContracts(command: CreateContractsCommand): Promise<void> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/createContracts`, command);
    } catch (err) {
      throw new Error('failed to reject pending mebership from membership service');
    }
  }

  async terminateContract(command: TerminateContractCommand): Promise<void> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/commands/terminateContract`, command);
    } catch (err) {
      throw new Error('failed to terminate contract at membership service');
    }
  }

  async terminateAllContracts(command: TerminateAllContractsCommand): Promise<TerminateAllContractsCommandResult> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/commands/terminateAllContracts`, command);
    } catch (err) {
      throw new Error('failed to terminate contracts at membership service');
    }
  }
}
