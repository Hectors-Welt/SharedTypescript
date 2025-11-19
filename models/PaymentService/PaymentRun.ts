export class PaymentRun {
    id: number;
    type: string;
    financialClaims: [FinancialClaim];
}

export class FinancialClaim {
    id: number;
    customerId: number;
    iban: string;
    totalAmount: number;
    netAmount: number;
    note: string;
    items: [FinancialClaimItem];
}

export class FinancialClaimItem {
    id: number;
    executionDate: string;
    accountingCode: number;
    amount: number;
    netAmount: number;
    note: string;
    vatPercent: number;
    vatAmount: number;
}