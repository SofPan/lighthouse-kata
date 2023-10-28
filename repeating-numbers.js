const repeatNumbers = (data) => {
  let output = [];
  //for each array in the data set
  for (const arr of data) {
    // loop the specified number of times and push the value to the output array
    for (let i = 0; i < arr[1]; i++) {
      output.push(arr[0]);
    }
    // if the array is not the last in the data set, add a comma to the output array
    if (data.indexOf(arr) !== data.length - 1) {
      output.push(', ');
    }
  }
  // join the output array into a string and return the value
  return output.join('');
};

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);