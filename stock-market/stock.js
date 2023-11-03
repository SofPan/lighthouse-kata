/*
  Given a list of stock prices for a given day,
  return the maximum profit made by buying a given price,
  then selling later on
*/
/**
 * @function maxprofit takes in an array of prices (numbers)
 * @returns maximum profit or -1 if no profit is possible
 */
const checkIfIsArray = (arr, name) => {
  if (!Array.isArray(arr)) {
    throw new Error(`${name} requires an array`);
  }
  return true;
};

const sortPrices = (arr) => {
  checkIfIsArray(arr, "sortPrices");
  return arr.sort((a, b) => {
    return a - b;
  });
};

const maxProfit = (prices) => {
  checkIfIsArray(prices, "maxProfit");
  let max = -1;
  // for (let i = 0; i < prices.length; i++) {

  // }
  return max;
};
console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]));
module.exports = { maxProfit, checkIfIsArray, sortPrices };