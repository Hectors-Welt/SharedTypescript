export class CreateContractsCommand {
    customerId: number;
    mainTemplate: number;
    additionalTemplates: CreateContractsTemplateDefinition[];
    additionalTemplatesToBookAtTheEnd: CreateContractsTemplateDefinition[];
    note: string;
    employeeId?: number;
    begin: string;
    recruiterId?: number;
    createSystem?: number;
    waitForCustomerConfirmation: boolean;
}

export class CreateContractsTemplateDefinition {
    templateId: number;
    templateType: string;
}