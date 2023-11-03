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

const totalBottles = (investment) => {
  const purchased = investment / 2;
};

console.log(totalBottles(10)); // 15
// console.log(totalBottles(20)); // 35
// console.log(totalBottles(30)); // 55
// console.log(totalBottles(40)); // 75