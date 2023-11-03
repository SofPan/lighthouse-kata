/*
  Given a list of stock prices for a given day,
  return the maximum profit made by buying a given price,
  then selling later on
*/
/**
 * @function maxprofit takes in an array of prices (numbers)
 * @returns maximum profit or -1 if no profit is possible
 */

const maxProfit = (prices) => {
  if (!Array.isArray(prices)) {
    throw new Error("maxProfit requires an array");
  }
  // code here
};
console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]));
module.exports = maxProfit;