import { describe } from 'mocha';
import { expect } from 'chai';
import { racineCarre } from './racineCarre';

describe('racineCarre function', () => {
  it('should return sqrt', () => {
    expect(racineCarre(4)).to.equal(2);
  });
  it('should throw with negative number', () => {
    expect(() => racineCarre(-1)).to.throw();
  });
});
