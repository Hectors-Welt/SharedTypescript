"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationService = void 0;
const IbanTools = require("ibantools");
const validator = require("validator");
class ValidationService {
    isIbanValid(iban) {
        return IbanTools.isValidIBAN(iban);
    }
    isBicValid(bic) {
        if (bic.length < 8 || bic.length == 9 || bic.length == 10 || bic.length > 11) {
            return false;
        }
        return true;
    }
    isEmailValid(email) {
        return validator.isEmail(email);
    }
}
exports.ValidationService = ValidationService;
