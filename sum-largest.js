const sumLargestNumbers = (data) => {
  let firstNum = 0;
  let secondNum = 0;

  for (let i = 0; i < data.length; i++) {
    /*
      if the current index is greater than firstNum,
        set secondNum to firstNum,
        then set firstNum to current index
    */
    if (data[i] > firstNum) {
      secondNum = firstNum;
      firstNum = data[i];
    }
  }
  return firstNum + secondNum;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));