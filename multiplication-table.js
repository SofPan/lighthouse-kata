const multiplicationTable = (maxValue) => {
  // define output array
  const output = [];
  // nested loop up to maxValue for each
  for (let i = 1; i <= maxValue; i++) {
    for (let j = 1; j <= maxValue; j++) {
      /*
        push to output the value of i time j
        convert the multiplied value to a string
        add space after for better legibility
      */
      output.push((i * j).toString() + ' ');
      // if the maxValue has been reached, add a new line
      if (j === maxValue) {
        output.push('\n');
      }
    }
  }
  // join the output array into a string and return
  /*
    NOTE: I opted to add space above instead of here
    because joining with space was adding it after
    the newline character and it caused indentation
    in the final output.
  */
  return output.join('');
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));