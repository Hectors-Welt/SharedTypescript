"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IbanTools = require("ibantools");
const validator_1 = require("validator");
const fs = require("fs");
const path = require("path");
const popsicle = require("popsicle");
const csvtojson = require("csvtojson");
const SclInfo_1 = require("../models/ValidationService/SclInfo");
const url = "http://www.bundesbank.de/Redaktion/DE/Downloads/Aufgaben/Unbarer_Zahlungsverkehr/SEPA/verzeichnis_der_erreichbaren_zahlungsdienstleister.csv?__blob=publicationFile";
class ValidationService {
    constructor() {
        this.sclEntries = {};
        const self = this;
        popsicle.request({
            url,
            method: 'GET'
        })
            .then((result) => {
            console.log(result);
            if (result.status != 200) {
                return Promise.reject(new Error("file not found"));
            }
            const csv = result.body.split('\n').slice(2).join('\n');
            csvtojson({
                delimiter: ";",
                noheader: true,
                headers: ["bic", "name", "sct", "sdd", "cor1", "b2b", "scc"]
            })
                .fromString(csv)
                .on('json', (data, index) => {
                self.sclEntries[data.bic] = new SclInfo_1.SclInfo(data);
            })
                .on('end', () => {
                fs.writeFileSync(path.resolve(process.cwd(), 'SCL.json'), JSON.stringify(self.sclEntries));
            });
        })
            .catch(error => {
            this.sclEntries = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), 'SCL.json'), 'utf8').toString());
        });
    }
    isIbanValid(iban) {
        return IbanTools.isValidIBAN(iban);
    }
    isBicValid(bic) {
        return this.sclEntries[bic] || this.sclEntries[bic.substr(0, 8)] ? true : false;
    }
    getSclInfo(bic) {
        return this.sclEntries[bic] || this.sclEntries[bic.substr(0, 8)];
    }
    isEmailValid(email) {
        return validator_1.default.isEmail(email);
    }
}
exports.ValidationService = ValidationService;
