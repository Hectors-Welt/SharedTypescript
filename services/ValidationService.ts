import * as IbanTools from 'ibantools';
import * as validator from 'validator';

import { IValidationService } from '../interfaces/IValidationService';

export class ValidationService implements IValidationService {

  isIbanValid(iban: string): boolean {
    return IbanTools.isValidIBAN(iban);
  }

  isBicValid(bic: string): boolean {
    if (bic.length < 8 || bic.length == 9 || bic.length == 10 || bic.length > 11) {
      return false;
    }
    return true;
  }

  isEmailValid(email: string): boolean {
    return validator.isEmail(email);
  }
}
