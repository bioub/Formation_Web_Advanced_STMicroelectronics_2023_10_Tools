import { describe } from 'mocha';
import { expect } from 'chai';
import { dejaSaisis } from './dejaSaisis';

describe('dejaSaisis function', () => {
  it('should return les nombres saisis', () => {
    expect(dejaSaisis([1, 2])).to.equal('Vous avez déjà saisi : 1 | 2');
  });
  it('should return les nombres saisis', () => {
    expect(dejaSaisis([])).to.be.undefined;
  });
});
