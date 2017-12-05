export interface IValidationService {
    isIbanValid(iban: string): boolean;
    isBicValid(bic: string): boolean;
    isEmailValid(email: string): boolean;
}
