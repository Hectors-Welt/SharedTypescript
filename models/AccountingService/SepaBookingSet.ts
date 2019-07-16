import { SepaBookingPosition } from './SepaBookingPosition';

export class SepaBookingSet {
  id: number;
  amount: number;
  date: string;
  executionDate: string;
  note: string;
  bookingPositions: SepaBookingPosition[];
}
