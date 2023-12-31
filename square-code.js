const squareCode = (message) => {
  // remove spaces
  let str = message.replaceAll(" ", "");
  // determine square by length of message with spaces removed
  const square = Math.ceil(Math.sqrt(str.length));
  const squareArray = [];
  const output = [];

  /*
    while str still has characters available:
    1) extract characters needed to make a row based on square variable
    2) push the row to the square array
    3) redefine str variable from square to final character
  */
  while (str.length > 0) {
    let row = str.slice(0, square);
    squareArray.push(row);
    str = str.slice(square, str.length);
  }

  // Iterate over squareArray
  for (let i = 0; i < squareArray.length; i++) {
    // Hold for individual characters until a full row is collected
    const hold = [];
    for (let j = 0; j < squareArray.length; j++) {
      // Add characters to hold
      hold.push(squareArray[j][i]);
      /*
        if we have reached the end of the loop:
          1) push a joined hold array to the final output
          2) reset the hold array to a length of 0
      */
      if (j === squareArray.length - 1) {
        output.push(hold.join(""));
        hold.length = 0;
      }
    }
  }

  return output.join(" ");

};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(
  squareCode("if man was meant to stay on the ground god would have given us roots")
);