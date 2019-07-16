import { expect } from 'chai';
import { ValidationService } from '../../services/ValidationService';

describe('ValidationService', () => {
  before(() => {
    this.service = new ValidationService();
  });

  it('isIbanValid', () => {
    expect(this.service.isIbanValid('2323')).to.be.false;
    expect(this.service.isIbanValid('DE27100777770209299700')).to.be.true;
  });

  it('isBicValid', () => {
    expect(this.service.isBicValid('2323')).to.be.false;
  });

  it('isEmailValid', () => {
    expect(this.service.isEmailValid('cool@s')).to.be.false;
    expect(this.service.isEmailValid('me@mail.com')).to.be.true;
  });
});
