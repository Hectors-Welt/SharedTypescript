import { SepaBookingPosition } from "./SepaBookingPosition";
export declare class SepaBookingSet {
    id: number;
    amount: number;
    date: string;
    executionDate: string;
    note: string;
    bookingPositions: SepaBookingPosition[];
}
