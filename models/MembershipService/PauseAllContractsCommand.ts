export class PauseAllContractsCommand {
  customerId: number;
  from?: string;
  till?: string;
  employeeId?: number;
  dsb?: boolean = true;
  dryRun: boolean = false;
}
