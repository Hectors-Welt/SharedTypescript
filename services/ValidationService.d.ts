import { IValidationService } from "../interfaces/IValidationService";
import { SclInfo } from '../models/ValidationService/SclInfo';
export declare class ValidationService implements IValidationService {
    private sclEntries;
    constructor();
    isIbanValid(iban: string): boolean;
    isBicValid(bic: string): boolean;
    getSclInfo(bic: string): SclInfo;
    isEmailValid(email: string): boolean;
}
