const chai = require('chai');
const assert = chai.assert;

const check = require('../check');

describe("convertStringToNumber function", () => {
  it("should return a number when a string is passed", () => {
    const expected = 123;
    const actual = check.convertStringToNumber("123");
    assert.strictEqual(actual, expected);
  });
  it("should return null when nothing is passed", () => {
    const expected = null;
    const actual = check.convertStringToNumber();
    assert.strictEqual(actual, expected);
  });
});

describe("getLastCharacterInString function", () => {
  it("should return the last character of a string", () => {
    const expected = "o";
    const actual = check.getLastCharacterInString("hello");
    assert.strictEqual(actual, expected);
  });
  it("should return an empty string when nothing is passed", () => {
    const expected = "";
    const actual = check.getLastCharacterInString();
    assert.strictEqual(actual, expected);
  });
});

describe("dropCheckDigit function", () => {
  it("should return all characters in a string except the last one", () => {
    const expected = "hi ther";
    const actual = check.dropCheckDigit("hi there");
    assert.strictEqual(actual, expected);
  });
  it("should return an empty string when nothing is passed", () => {
    const expected = "";
    const actual = check.dropCheckDigit();
    assert.strictEqual(actual, expected);
  });
});

describe("doubleNumber", () => {
  it("should return the result of a number multiplied by two", () => {
    const expected = 4;
    const actual = check.doubleNumber(2);
    assert.strictEqual(actual, expected);
  });

  it("should return Please enter a number; when anything other than a number is passed in", () => {
    const expected = "Please enter a number";
    const actual = check.doubleNumber("hello there");
    assert.strictEqual(actual, expected);
  });
});

describe("convertAndDouble", () => {
  it("should convert an array to strings to an array of numbers, and double every number with an odd index", () => {
    const expected = [1, 4, 3, 8, 5];
    const actual = check.convertAndDouble([1, 2, 3, 4, 5]);
    assert.deepStrictEqual(actual, expected);
  });
  it("should throw an error when an array is not passed in", () => {
    const expected = "convertAndDouble requires an array";
    const actual = () => check.convertAndDouble("1");
    assert.throws(actual, Error, expected);
  });
});

describe("sumArray", () => {
  it("should return the sum total of an array of numbers", () => {
    const expected = 6;
    const actual = check.sumArray([1, 2, 3]);
    assert.strictEqual(actual, expected);
  });
  it("should throw an error when an array is not passed in", () => {
    const expected = "sumArray requires an array";
    const actual = () => check.sumArray("1");
    assert.throws(actual, Error, expected);
  });
});

describe("check function", () => {
  it("should return an error when nothing is passed in", () => {
    const expected = "Please provide input";
    const actual = () => check.check();
    assert.throws(actual, Error, expected);
  });
  it("should return true when the check digit matches", () => {
    const expected = true;
    const actual = check.check("17893729974");
    assert.strictEqual(actual, expected);
  });
  it("should return false when the check digit does not match", () => {
    const expected = false;
    const actual = check.check("17893729975");
    assert.strictEqual(actual, expected);
  });
});