import { describe } from 'mocha';
import { expect } from 'chai';
import { sum } from './my-math';

describe('my-math', () => {
  describe('sum function', () => {
    // it('should add positive numbers', () => {
    //   // Given / Arrange
    //   const nb1 = 1;
    //   const nb2 = 2;

    //   // When / Act
    //   const result = sum(nb1, nb2);

    //   // Then / Assert
    //   expect(result).to.equal(3);
    // });
    it('should add positive numbers', () => {
      expect(sum(1, 2)).to.equal(3);
    });
  });
});
