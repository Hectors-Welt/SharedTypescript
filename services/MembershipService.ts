import { ContractTemplate } from '../models/MembershipService/ContractTemplate';
import { IMembershipService } from '../interfaces/IMembershipService';
import { Contract } from '../models/MembershipService/Contract';
import { ApiClient } from './ApiClient';
import { CreateContractsCommand } from '../models/MembershipService/CreateContractsCommand';
import { TerminateContractCommand } from '../models/MembershipService/TerminateContractCommand';
import { Recommendation } from '../models/MembershipService/Recommendation';
import { TerminateAllContractsCommand } from '../models/MembershipService/TerminateAllContractsCommand';
import { TerminateContractsCommandResult } from '../models/MembershipService/TerminateContractsCommandResult';
import { CreateContractsCommandResult } from '../models/MembershipService/CreateContractsCommandResult';
import { UpdatePricePerIntervalCommand } from '../models/MembershipService/UpdatePricePerIntervalCommand';
import { UpdatePricePerIntervalCommandResult } from '../models/MembershipService/UpdatePricePerIntervalCommandResult';
import { PauseAllContractsCommand } from '../models/MembershipService/PauseAllContractsCommand';
import { PauseAllContractsCommandResult } from '../models/MembershipService/PauseAllContractsCommandResult';
import { SimulateContractCreationCommand } from '../models/MembershipService/SimulateContractCreationCommand';
import { SimulateContractCreationCommandResult } from '../models/MembershipService/SimulateContractCreationCommandResult';
import { MemberContractStatus } from '../models/MembershipService/MemberContractStatus';

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

  async getActiveMembersContractStatus(): Promise<MemberContractStatus[]> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/getActiveMembersContractStatus`);
    } catch (err) {
      throw new Error('failed to retrieve active members contract status from membership service');
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
      return await ApiClient.POST(`${this.baseUrl}/rejectPendingMembership/${processId}`, null, null, true);
    } catch (err) {
      throw new Error('failed to reject pending mebership from membership service');
    }
  }

  async createContracts(command: CreateContractsCommand): Promise<CreateContractsCommandResult> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/commands/createContracts`, command, null, true);
    } catch (err) {
      return {
        success: false,
        message: 'failed to create contracts at membership service',
        errors: [err],
        contracts: null,
      };
    }
  }

  async simulateContractCreation(command: SimulateContractCreationCommand): Promise<SimulateContractCreationCommandResult> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/commands/simulateOnlineMembership`, command, null, true);
    } catch (err) {
      return {
        success: false,
        message: 'failed to simulate contract creation at membership service',
        errors: [err], 
        returnCode: null,
        simulationData: null,
      };
    }
  }

  async terminateContract(command: TerminateContractCommand): Promise<TerminateContractsCommandResult> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/commands/terminateContract`, command,  null, true);
    } catch (err) {
      return {
        success: false,
        message: 'failed to terminate contract at membership service',
        errors: [err],
      };
    }
  }

  async terminateAllContracts(command: TerminateAllContractsCommand): Promise<TerminateContractsCommandResult> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/commands/terminateAllContracts`, command, null, true);
    } catch (err) {
      return {
        success: false,
        message: 'failed to terminate contracts at membership service',
        errors: [err],
      };
    }
  }

  async pauseAllContracts(command: PauseAllContractsCommand): Promise<PauseAllContractsCommandResult> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/commands/pauseAllContracts`, command, null, true);
    } catch (err) {
      return {
        success: false,
        message: 'failed to pause contracts at membership service',
        errors: [err],
        returnCode: null,
      };
    }
  }

  async updatePricePerInterval(command: UpdatePricePerIntervalCommand): Promise<UpdatePricePerIntervalCommandResult> {
    try {
      return await ApiClient.POST(`${this.baseUrl}/commands/updatePricePerInterval`, command, null, true);
    } catch (err) {
      return {
        success: false,
        message: 'failed to update price at membership service',
        errors: [err],
        returnCode: null,
      };
    }
  }
}
