const chai = require('chai');
const assert = chai.assert;

const stock = require('../stock');

describe("checkIfIsArray", () => {
  it("should return true if argument is an array", () => {
    const expected = true;
    const actual = stock.checkIfIsArray([1, 2]);
    assert.strictEqual(actual, expected);
  });
  it("should throw an error when argument is not an array", () => {
    const expected = "Test requires an array";
    const actual = () => stock.checkIfIsArray(123, "Test");
    assert.throws(actual, Error, expected);
  });
});

describe("sortPrices", () => {
  it("should return a sorted array when passed an array of numbers", () => {
    const expected = [1, 2, 3, 4, 5];
    const actual = stock.sortPrices([3, 4, 2, 5, 1]);
    assert.deepStrictEqual(actual, expected);
  });
  it("should throw an error when argument is not an array", () => {
    const expected = "sortPrices requires an array";
    const actual = () => stock.sortPrices(123);
    assert.throws(actual, Error, expected);
  });
});

describe("findDiff", () => {
  it("should return a positive number when n1 > n2", () => {
    const expected = 3;
    const actual = stock.findDiff(5, 2);
    assert.strictEqual(actual, expected);
  });
  it("should return a negative number when n1 < n2", () => {
    const expected = -1;
    const actual = stock.findDiff(2, 3);
    assert.strictEqual(actual, expected);
  });
});

describe("maxProfit", () => {
  it("should return the maximum profit made by buying at a given price then selling later on", () => {
    const expected = 16;
    const actual = stock.maxProfit([45, 24, 35, 31, 40, 38, 11]);
    assert.strictEqual(actual, expected);
  });
  it("should return -1 when profit is not possible", () => {
    const expected = -1;
    const actual = stock.maxProfit([5, 4, 3, 2, 1]);
    assert.strictEqual(actual, expected);
  });
  it("should throw an error when anything other than an array is passed in", () => {
    const expected = "maxProfit requires an array";
    const actual = () => stock.maxProfit(123);
    assert.throws(actual, Error, expected);
  });
});