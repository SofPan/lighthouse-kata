// convert a string to a number
const convertStringToNumber = (str) => {
  return str ? Number(str) : null;
};

// get the last character in a string
const getLastCharacterInString = (str) => {
  return str ? str.charAt(str.length - 1) : "";
};

// get all characters except the last one in a string
const dropCheckDigit = (str) => {
  return str ? str.slice(0, str.length - 1) : "";
};

// double the number
const doubleNumber = (number) => {
  return typeof number === "number" ? number * 2 : "Please enter a number";
};

// throw error if input is not an array
const checkIfIsArray = (input, name) => {
  if (!Array.isArray(input)) {
    throw new Error(`${name} requires an array`);
  }
  return true;
};

// map over an array, convert string elements to number, and double every number with an odd index number
const convertAndDouble = (arr) => {
  checkIfIsArray(arr, "convertAndDouble");

  return arr.map((item, index) => {
    item = convertStringToNumber(item);
    if (index % 2 !== 0) {
      item = doubleNumber(item);
      if (item >= 10) {
        item = item - 9;
      }
    }
    return item;
  });
};

// Sum all values of an array
const sumArray = (arr) => {
  checkIfIsArray(arr, "sumArray");

  let sum = 0;
  for (const item of arr) {
    sum += item;
  }
  return sum;
};

// luhn algorithm check digit calculation
const calculateCheckDigit = (num) => {
  return (10 - (num % 10));
};

const check = (checkNum) => {
  if (!checkNum) {
    throw new Error("Please provide input");
  }
  const checkDigit = convertStringToNumber(getLastCharacterInString(checkNum));
  const payLoad = dropCheckDigit(checkNum).split("");
  const convertAndDoublePayload = convertAndDouble(payLoad);
  const sumPayload = sumArray(convertAndDoublePayload);
  const determineCheckDigit = calculateCheckDigit(sumPayload);
  return checkDigit === determineCheckDigit;
};
console.log(check("17893729974"));
module.exports = {
  check,
  convertStringToNumber,
  getLastCharacterInString,
  dropCheckDigit,
  doubleNumber,
  convertAndDouble,
  sumArray
};