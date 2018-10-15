export class ContractTemplate {
  id: number;
  name: string;
  type: string;
  pricePerInterval: number;
  interval: string;
  duration: string;
  renewal: string;
  termination: string;
  isMainContract: boolean;
  freeTestingPhase?: number;
}