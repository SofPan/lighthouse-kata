const chai = require('chai');
const assert = chai.assert;

const bottles = require('../bottles');

describe("countBottles", () => {
  it("should return an array of numbers", () => {
    const expected = [5, 0];
    const actual = bottles.bottles.recycleBottleParts(10, 2);
    assert.deepStrictEqual(actual, expected);
  });
});

describe("totalBottles", () => {
  //
});