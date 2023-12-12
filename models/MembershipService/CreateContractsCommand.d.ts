export declare class CreateContractsCommand {
    customerId: number;
    mainTemplate?: number;
    template?: CreateContractsTemplateDefinition;
    additionalTemplates: CreateContractsTemplateDefinition[];
    additionalTemplatesToBookAfterFreeTestingPhase: CreateContractsTemplateDefinition[];
    additionalTemplatesToBookAtTheEnd: CreateContractsTemplateDefinition[];
    note: string;
    employeeId?: number;
    begin: string;
    recruiterId?: number;
    createSystem?: number;
    waitForCustomerConfirmation: boolean;
}
export declare class CreateContractsTemplateDefinition {
    templateId: number;
    templateType: string;
}
