import { CreateContractsTemplateDefinition } from './CreateContractsTemplateDefinition';
export declare class SimulateContractCreationCommand {
    mainTemplate?: number;
    template?: CreateContractsTemplateDefinition;
    additionalTemplates: CreateContractsTemplateDefinition[];
    additionalTemplatesToBookAfterFreeTestingPhase: CreateContractsTemplateDefinition[];
    additionalTemplatesToBookAtTheEnd: CreateContractsTemplateDefinition[];
    begin: string;
}
