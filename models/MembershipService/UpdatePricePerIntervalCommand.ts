export class UpdatePricePerIntervalCommand {
  contractId: number;
  newPricePerInterval: number;
  newPricePerIntervalAt: string;
  employeeId?: number;
  note: string;
}