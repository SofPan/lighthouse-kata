const calculateChange = (total, cash) => {
  // define denominations for incrementing
  let denoms = {
    twentyDollar: 0,
    tenDollar: 0,
    fiveDollar: 0,
    twoDollar: 0,
    oneDollar: 0,
    quarter: 0,
    dime: 0,
    nickle: 0,
    penny: 0,
  };
  // calculate the difference between cash and total
  let diff = cash - total;

  // while there is change left to calculate, increment denominations
  while (diff > 0) {
    if (diff > 2000) {
      denoms.twentyDollar = denoms.twentyDollar + 1;
      diff = diff - 2000;
    } else if (diff > 1000) {
      denoms.tenDollar = denoms.tenDollar + 1;
      diff = diff - 1000;
    } else if (diff > 500) {
      denoms.fiveDollar = denoms.fiveDollar + 1;
      diff = diff - 500;
    } else if (diff > 200) {
      denoms.twoDollar = denoms.twoDollar + 1;
      diff = diff - 200;
    } else if (diff > 100) {
      denoms.oneDollar = denoms.oneDollar + 1;
      diff = diff - 100;
    } else if (diff > 25) {
      denoms.quarter = denoms.quarter + 1;
      diff = diff - 25;
    } else if (diff > 10) {
      denoms.dime = denoms.dime + 1;
      diff = diff - 10;
    } else if (diff > 5) {
      denoms.nickle = denoms.nickle + 1;
      diff = diff - 5;
    } else {
      denoms.penny = denoms.penny + 1;
      diff = diff - 1;
    }
  }

  let totalChange = {};
  // Only add denominations with a value to the totalChange object
  for (const val in denoms) {
    if (denoms[val] !== 0) {
      totalChange[val] = denoms[val];
    }
  }

  return totalChange;

};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
