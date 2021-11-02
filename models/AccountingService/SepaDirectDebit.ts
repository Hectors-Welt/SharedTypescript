import { SepaPosition } from "./SepaPosition";

export class SepaDirectDebit {
    referenceNumber: number;
    text: string;
    executedAt: string;
    totalAmount: number;
    positions: SepaPosition[];
}