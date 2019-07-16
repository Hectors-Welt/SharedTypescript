import { SclInfo } from '../models/ValidationService/SclInfo';

export interface IValidationService {
  isIbanValid(iban: string): boolean;

  isBicValid(bic: string): boolean;

  getSclInfo(bic: string): SclInfo;

  isEmailValid(email: string): boolean;
}
