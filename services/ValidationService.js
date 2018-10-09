"use strict";
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
        popsicle.get(url)
            .then((result) => {
            if (result.status != 200) {
                return Promise.reject(new Error('file not found'));
            }
            csvtojson({
                delimiter: ';',
                noheader: true,
                headers: ['bic', 'name', 'sct', 'sdd', 'cor1', 'b2b', 'scc'],
            })
                .fromString(result.body.split('\n').slice(2).join('\n'))
                .on('json', data => this.sclEntries[data.bic] = new SclInfo_1.SclInfo(data))
                .on('end', () => fs.writeFileSync(path.resolve(process.cwd(), 'SCL.json'), JSON.stringify(this.sclEntries)));
        })
            .catch(() => this.sclEntries = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), 'SCL.json'), 'utf8').toString()));
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
}
exports.ValidationService = ValidationService;
