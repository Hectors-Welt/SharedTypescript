export declare class PaymentRun {
    id: number;
    type: string;
    financialClaims: [FinancialClaim];
}
export declare class FinancialClaim {
    id: number;
    customerId: number;
    iban: string;
    totalAmount: number;
    netAmount: number;
    note: string;
    items: [FinancialClaimItem];
}
export declare class FinancialClaimItem {
    id: number;
    executionDate: string;
    accountingCode: number;
    amount: number;
    netAmount: number;
    note: string;
    vatPercent: number;
    vatAmount: number;
}
