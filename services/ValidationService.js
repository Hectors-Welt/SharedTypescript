"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const IbanTools = require("ibantools");
const validator = require("validator");
const fs = require("fs");
const path = require("path");
const popsicle = require("popsicle");
const csvtojson = require("csvtojson");
const SclInfo_1 = require("../models/ValidationService/SclInfo");
const url = 'https://www.bundesbank.de/resource/blob/602880/0024289cadc4ec305a1a7b90485b4521/mL/verzeichnis-der-erreichbaren-zahlungsdienstleister-data.csv';
class ValidationService {
    constructor() {
        this.sclEntries = {};
        this.updateScl();
        setInterval(this.updateScl, 1000 * 60 * 60 * 24);
    }
    isIbanValid(iban) {
        return IbanTools.isValidIBAN(iban);
    }
    isBicValid(bic) {
        if (bic.length < 8 || bic.length == 9 || bic.length == 10 || bic.length > 11) {
            return false;
        }
        return !!this.getSclInfo(bic);
    }
    getSclInfo(bic) {
        return this.sclEntries[bic] || this.sclEntries[bic.substr(0, 8)];
    }
    isEmailValid(email) {
        return validator.isEmail(email);
    }
    updateScl() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield popsicle.get(url);
            if (result.status != 200) {
                this.sclEntries = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), 'SCL.json'), 'utf8').toString());
            }
            csvtojson({
                delimiter: ';',
                noheader: true,
                headers: ['bic', 'name', 'sct', 'sdd', 'cor1', 'b2b', 'scc'],
            })
                .fromString(result.body
                .split('\n')
                .slice(2)
                .join('\n'))
                .on('json', (data) => (this.sclEntries[data.bic] = new SclInfo_1.SclInfo(data)))
                .on('end', () => fs.writeFileSync(path.resolve(process.cwd(), 'SCL.json'), JSON.stringify(this.sclEntries)));
        });
    }
}
exports.ValidationService = ValidationService;
