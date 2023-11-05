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
    this.result.purchased = this.divideBy(purchased, 2);
    const bottlesPurchased = this.result.purchased;
    return this.result.maxTotalBottles += this.bottleCounter(bottlesPurchased, 0, 0);
  },
  divideBy: (n1, n2) => {
    return n1 / n2;
  },
  roundDown: (num) => {
    return Math.floor(num);
  },
  bottleCounter: function (fullBottles, emptyBottles, bottleCaps) {
    // if (fullBottles < 1 && emptyBottles < 2 && bottleCaps < 4) {
    console.log(fullBottles, emptyBottles, bottleCaps);
    if (emptyBottles < 2 && bottleCaps < 4 && fullBottles < 1) {
      return "base case";
    }
    let empties = emptyBottles + fullBottles;
    let caps = 9;
    let redeemEmpties = (empties - (empties % 2)) / 2;
    let redeemCaps = caps % 4;

    console.log(redeemEmpties, redeemCaps);
    // let redeemedBottles = redeemEmpties + redeemCaps;

    // empties = empties - redeemEmpties;
    // caps = caps - redeemCaps;
    // return redeemedBottles;
    // return this.bottleCounter(redeemedBottles, empties, caps);
  }
};

const countBottles = (recycledItem, perEach) => {
  let fullBottles = 0;
  while (recycledItem > perEach) {
    fullBottles += 1;
    recycledItem -= perEach;
  }
  return [fullBottles, recycledItem];
};

let empties = 9;
let each = 2;
console.log(countBottles(empties, each));

// console.log(bottles.totalBottles(10)); // 15
// console.log(totalBottles(20)); // 35
// console.log(totalBottles(30)); // 55
// console.log(totalBottles(40)); // 75

module.exports = { bottles };