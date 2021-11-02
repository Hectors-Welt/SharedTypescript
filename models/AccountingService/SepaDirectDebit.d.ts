import { SepaPosition } from "./SepaPosition";
export declare class SepaDirectDebit {
    referenceNumber: number;
    text: string;
    executedAt: string;
    totalAmount: number;
    positions: SepaPosition[];
}
