/*
  ----- Bottle Recycling Program -----
  => For every 2 empty bottles, get 1 free (full) pop
  => For every 4 bottle caps, git 1 free (full) pop
  => Each bottle costs $2

  ----- Inputs -----
  => $10 -- should be 15
  => $20 -- should be 35
  => $30 -- should be 55
  => $40 -- should be 75
  => argv -- take in a dollar amount from user and output details

  ----- Outputs -----
  => Output max full bottles
  => Breakdown {
      purchased,
      fromRecycledBottles,
      fromRecycledCaps,
      leftoverBottles,
      leftoverCaps
  }
*/

const bottles = {
  result: {
    purchased: 0,
    fromRecycledBottles: 0,
    fromRecycledCaps: 0,
    maxTotalBottles: 0,
    leftoverBottles: 0,
    leftoverCaps: 0
  },
  totalBottles: function (purchased) {
    // Each bottle of pop costs $2
    // this.result.purchased = this.divideBy(purchased, 2);
    let fullBottles = purchased;
  },
  divideBy: (n1, n2) => {
    return n1 / n2;
  },
  roundDown: (num) => {
    return Math.floor(num);
  },
  countBottles: function (recycledItem, perEach) {
    let fullBottles = 0;
    while (recycledItem > perEach) {
      fullBottles += 1;
      recycledItem -= perEach;
    }
    return [fullBottles, recycledItem];
  },
};

// console.log(bottles.totalBottles(10)); // 15
// console.log(totalBottles(20)); // 35
// console.log(totalBottles(30)); // 55
// console.log(totalBottles(40)); // 75

module.exports = { bottles };