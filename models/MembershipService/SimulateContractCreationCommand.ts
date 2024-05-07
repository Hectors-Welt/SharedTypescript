import { CreateContractsTemplateDefinition } from './CreateContractsTemplateDefinition';

export class SimulateContractCreationCommand {
  customerId: number;
  template: CreateContractsTemplateDefinition;
  begin: string;
}
