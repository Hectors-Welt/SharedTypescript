import { ContractTemplate } from '../models/MembershipService/ContractTemplate';
import { IMembershipService } from '../interfaces/IMembershipService';
import { Contract } from '../models/MembershipService/Contract';
import { ApiClient } from './ApiClient';

export class MembershipService implements IMembershipService {
  baseUrl: string;

  constructor(private host: string, private port: number) {
    this.baseUrl = `http://${host}:${port}`;
  }

  async getContractTemplatesAvailable(): Promise<ContractTemplate[]> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/getContractTemplatesAvailable`);
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

  async getContractsTerminatedByCustomerId(customerId: number): Promise<Contract[]> {
    try {
      return await ApiClient.GET(`${this.baseUrl}/getContractsTerminatedByCustomerId/${customerId}`);
    } catch (err) {
      throw new Error('failed to retrieve terminated contracts from membership service');
    }
  }
}