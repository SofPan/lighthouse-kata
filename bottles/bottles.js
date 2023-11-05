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

const userInput = process.argv.slice(2);

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
    let fullBottles = 0;
    let empties = this.divideBy(purchased, 2);
    let caps = this.divideBy(purchased, 2);
    const res = this.result;
    res.purchased = this.divideBy(purchased, 2);
    res.maxTotalBottles = this.divideBy(purchased, 2);
    res.maxTotalBottles += this.countBottles(fullBottles, empties, caps);
    return `
    TOTAL BOTTLES: ${res.maxTotalBottles}
    REMAINING BOTTLES: ${res.leftoverBottles}
    REMAINING CAPS: ${res.leftoverCaps}
    TOTAL EARNED:
      BOTTLES: ${res.fromRecycledBottles}
      CAPS: ${res.fromRecycledCaps}
    `;
  },
  divideBy: (n1, n2) => {
    return n1 / n2;
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


// bottles.totalBottles(10); // 15
// bottles.totalBottles(20); // 35
// bottles.totalBottles(30); // 55
// bottles.totalBottles(40); // 75
console.log(bottles.totalBottles(userInput));

module.exports = { bottles };