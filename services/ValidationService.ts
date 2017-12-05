import * as IbanTools from 'ibantools'
import validator from 'validator'
import * as fs from 'fs'
import * as popsicle from 'popsicle'
import * as csvtojson from 'csvtojson'

import { IValidationService } from "../interfaces/IValidationService";
import { SclInfo } from '../models/ValidationService/SclInfo';

const url = "http://www.bundesbank.de/Redaktion/DE/Downloads/Aufgaben/Unbarer_Zahlungsverkehr/SEPA/verzeichnis_der_erreichbaren_zahlungsdienstleister.csv?__blob=publicationFile";

export class ValidationService implements IValidationService {

    private sclEntries = {};

    constructor() {
        const self = this;

        popsicle.request({
            url,
            method: 'GET'
        })
            .then((result) => {
                const csv = result.body.split('\n').slice(2).join('\n');

                csvtojson({
                    delimiter: ";",
                    noheader: true,
                    headers: ["bic", "name", "sct", "sdd", "cor1", "b2b", "scc"]
                })
                    .fromString(csv)
                    .on('json', (data, index) => {
                        self.sclEntries[data.bic] = new SclInfo(data);
                    })
                    .on('end', () => {
                        fs.writeFileSync("SCL.json", JSON.stringify(self.sclEntries));
                    })
            })
            .catch(error => {
                this.sclEntries = require('../SCL.json');
            })            
    }

    isIbanValid(iban: string): boolean {
        return IbanTools.isValidIBAN(iban);
    }
    
    isBicValid(bic: string): boolean {
        return this.sclEntries[bic] || this.sclEntries[bic.substr(0,8)] ? true : false;
    }
    
    getSclInfo(bic: string): SclInfo {
        return this.sclEntries[bic] || this.sclEntries[bic.substr(0,8)]
    }

    isEmailValid(email: string): boolean {
        return validator.isEmail(email);
    }
}