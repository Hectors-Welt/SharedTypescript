import { ContractTemplate } from '../models/MembershipService/ContractTemplate';
import { IMembershipService } from '../interfaces/IMembershipService';
import { Contract } from '../models/MembershipService/Contract';
import { ApiClient } from './ApiClient';

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