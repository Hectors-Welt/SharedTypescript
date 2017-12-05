import { IValidationService } from "../interfaces/IValidationService";
import * as IbanTools from 'ibantools'
import validator from 'validator'

export class ValidationService implements IValidationService {
    isIbanValid(iban: string): boolean {
        return IbanTools.isValidIBAN(iban);
    }
    isBicValid(bic: string): boolean {
        return IbanTools.isValidBIC(bic);
    }
    isEmailValid(email: string): boolean {
        return validator.isEmail(email);
    }
}