import * as IbanTools from 'ibantools'
import * as validator from 'validator'
import * as fs from 'fs'
import * as path from 'path'
import * as popsicle from 'popsicle'
import * as csvtojson from 'csvtojson'

import { IValidationService } from '../interfaces/IValidationService';
import { SclInfo } from '../models/ValidationService/SclInfo';

const url = 'https://www.bundesbank.de/resource/blob/602880/0024289cadc4ec305a1a7b90485b4521/mL/verzeichnis-der-erreichbaren-zahlungsdienstleister-data.csv';

export class ValidationService implements IValidationService {
  private sclEntries = {};

  constructor() {
    this.updateScl();
    setInterval(this.updateScl, 1000 * 60 * 60 * 24);
  }

  isIbanValid(iban: string): boolean {
    return IbanTools.isValidIBAN(iban);
  }

  isBicValid(bic: string): boolean {
    if (bic.length < 8 || bic.length == 9 || bic.length == 10 || bic.length > 11) {
      return false;
    }
    return !!this.getSclInfo(bic);
  }

  getSclInfo(bic: string): SclInfo {
    return this.sclEntries[bic] || this.sclEntries[bic.substr(0, 8)];
  }

  isEmailValid(email: string): boolean {
    return validator.isEmail(email);
  }

  private async updateScl() {
    const result = await popsicle.get(url);

    if (result.status != 200) {
      this.sclEntries = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), 'SCL.json'), 'utf8').toString());
    }

    csvtojson({
      delimiter: ';',
      noheader: true,
      headers: ['bic', 'name', 'sct', 'sdd', 'cor1', 'b2b', 'scc'],
    })
      .fromString(result.body.split('\n').slice(2).join('\n'))
      .on('json', data => this.sclEntries[data.bic] = new SclInfo(data))
      .on('end', () => fs.writeFileSync(path.resolve(process.cwd(), 'SCL.json'), JSON.stringify(this.sclEntries)));
  }
}