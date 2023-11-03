/*
  Given a list of stock prices for a given day,
  return the maximum profit made by buying a given price,
  then selling later on
*/
// Check if argument is an array
const checkIfIsArray = (arr, name) => {
  if (!Array.isArray(arr)) {
    throw new Error(`${name} requires an array`);
  }
  return true;
};

// sort ascending
const sortPrices = (arr) => {
  checkIfIsArray(arr, "sortPrices");
  return arr.sort((a, b) => {
    return a - b;
  });
};

// subtract two digits
const findDiff = (n1, n2) => {
  return n2 - n1;
};

/**
 * @function maxProfit takes in an array of prices (numbers)
 * @param prices an array of prices
 * @returns maximum profit or -1 if no profit is possible
 */
const maxProfit = (prices) => {
  checkIfIsArray(prices, "maxProfit");
  let max = -1;
  for (let i = 0; i < prices.length; i++) {
    // sort from the next index to the end of the array
    const sortRight = sortPrices(prices.slice(i + 1));
    // subtract the current number from the largest available
    const diff = findDiff(sortRight[sortRight.length - 1], prices[i]);
    // if the difference is greater than current max, redefine max
    if (diff > max) {
      max = diff;
    }
  }
  return max;
};
console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]));
module.exports = { maxProfit, checkIfIsArray, sortPrices };