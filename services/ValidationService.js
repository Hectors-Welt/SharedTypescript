"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IbanTools = require("ibantools");
const validator_1 = require("validator");
class ValidationService {
    isIbanValid(iban) {
        return IbanTools.isValidIBAN(iban);
    }
    isBicValid(bic) {
        return IbanTools.isValidBIC(bic);
    }
    isEmailValid(email) {
        return validator_1.default.isEmail(email);
    }
}
exports.ValidationService = ValidationService;
