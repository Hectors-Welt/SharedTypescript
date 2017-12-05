import { IValidationService } from "../interfaces/IValidationService";
export declare class ValidationService implements IValidationService {
    isIbanValid(iban: string): boolean;
    isBicValid(bic: string): boolean;
    isEmailValid(email: string): boolean;
}
