"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentType = void 0;
var PaymentType;
(function (PaymentType) {
    PaymentType[PaymentType["Cash"] = 1] = "Cash";
    PaymentType[PaymentType["DirectDebit"] = 2] = "DirectDebit";
    PaymentType[PaymentType["Remittance"] = 3] = "Remittance";
    PaymentType[PaymentType["BistroAccount"] = 4] = "BistroAccount";
    PaymentType[PaymentType["XCash"] = 6] = "XCash";
    PaymentType[PaymentType["SepaDirectDebit"] = 7] = "SepaDirectDebit";
    PaymentType[PaymentType["Commission"] = 8] = "Commission";
    PaymentType[PaymentType["Paycult"] = 9] = "Paycult";
    PaymentType[PaymentType["CardPayments"] = 10] = "CardPayments";
    PaymentType[PaymentType["Paypal"] = 26] = "Paypal";
    PaymentType[PaymentType["Mollie"] = 28] = "Mollie";
})(PaymentType = exports.PaymentType || (exports.PaymentType = {}));
