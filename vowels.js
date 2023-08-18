const numberOfVowels = function(data) {
  // create an array of vowels to compare against the data
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let total = 0;
  for (let i = 0; i < data.length; i++){
    // loop a second time to compare each vowel to the current letter
    for (let j = 0; j < vowels.length; j++){
      if (data[i] === vowels[j]){
        total++;
      }
    }
  }
  return total;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));