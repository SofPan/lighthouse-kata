const chai = require('chai');
const assert = chai.assert;

const maxProfit = require('../stock');

describe("maxProfit", () => {
  it("should return the maximum profit made by buying at a given price then selling later on", () => {
    const expected = 16;
    const actual = maxProfit([45, 24, 35, 31, 40, 38, 11]);
    assert.strictEqual(actual, expected);
  });
  it("should return -1 when profit is not possible", () => {
    const expected = -1;
    const actual = maxProfit([5, 4, 3, 2, 1]);
    assert.strictEqual(actual, expected);
  });
  it("should throw an error when anything other than an array is passed in", () => {
    const expected = "maxProfit requires an array";
    const actual = maxProfit(123);
    assert.throws(actual, Error, expected);
  });
});