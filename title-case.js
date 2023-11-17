// Takes in a sentence string and returns the string in Title Casing
const titleCase = (str) => {
  // in case the string is all caps, reset to lower case
  const lower = str.toLowerCase();
  // split the sentence into an array
  let splitStr = lower.split(" ");
  // Map over the splitStr array, uppercase the first letter and concatenate with the rest of the word
  splitStr = splitStr.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  // join the array back into a string and return
  return splitStr.join(" ");
};

console.log(titleCase("this is an example")); // => "This Is An Example"
console.log(titleCase("test")); // => "Test"
console.log(titleCase("i r cool")); // => "I R Cool"
console.log(titleCase("WHAT HAPPENS HERE")); // => "What Happens Here"
console.log(titleCase("")); // => ""
console.log(titleCase("A")); // => "A"