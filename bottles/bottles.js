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
    let fullBottles = 0;
    let empties = this.divideBy(purchased, 2);
    let caps = this.divideBy(purchased, 2);
    this.result.purchased = this.divideBy(purchased, 2);
    this.result.maxTotalBottles = this.divideBy(purchased, 2);
    return this.result.maxTotalBottles += this.countBottles(fullBottles, empties, caps);
  },
  divideBy: (n1, n2) => {
    return n1 / n2;
  },
  roundDown: (num) => {
    return Math.floor(num);
  },
  recycleBottleParts: function (recycledItem, perEach) {
    let fullBottles = 0;
    while (recycledItem >= perEach) {
      fullBottles += 1;
      recycledItem -= perEach;
    }
    return [fullBottles, recycledItem];
  },
  countBottles: function (full, empty, caps) {
    if (full === 0 && empty < 2 && caps < 4) {
      this.result.leftoverBottles = empty;
      this.result.leftoverCaps = caps;
      return 0;
    }
    let totalRedeemed = 0;
    empty = empty + full;
    caps = caps + full;
    full = 0;
    const recycleBottles = this.recycleBottleParts(empty, 2);
    const recycleCaps = this.recycleBottleParts(caps, 4);
    this.result.fromRecycledBottles += recycleBottles[0];
    this.result.fromRecycledCaps += recycleCaps[0];
    full = recycleBottles[0] + recycleCaps[0];
    empty = recycleBottles[1];
    caps = recycleCaps[1];
    totalRedeemed = full;
    return totalRedeemed += this.countBottles(full, empty, caps);
  },
};


bottles.totalBottles(10); // 15
console.log(bottles.result);
bottles.totalBottles(20); // 35
console.log(bottles.result);
bottles.totalBottles(30); // 55
console.log(bottles.result);
bottles.totalBottles(40); // 75
console.log(bottles.result);

module.exports = { bottles };