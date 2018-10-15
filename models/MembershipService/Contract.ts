import { Fee } from "./Fee";
import { Limit } from "./Limit";

export class Contract {
  id: number;
  name: string;
  type: string;
  pricePerInterval: number;
  blockUnitsAvailable?: number;
  interval: string;
  duration: string;
  renewal: string;
  termination: string;
  begin: string;
  terminationBefore: string;
  possibleDateOfEnd: string;
  templateId: number;
  isMainContract: boolean;
  cancelledOn: string;
  cancelledTo: string;
  entranceFee?: number;
  partialFee?: number;
  additionalFees: Fee[];
  limits: Limit[];
  freeTestingPhaseActivated: boolean;
}