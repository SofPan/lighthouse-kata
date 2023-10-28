const makeCase = (input, casing) => {
  let words = input.split(" ");
  for (let i = 0; i < words.length; i++) {
    // if the case is camel, pascal, or title, replace the first letter with the uppercase version
    if (
      (casing === "camel" && i !== 0) ||
      casing === "pascal" ||
      casing === "title"
    ) {
      words[i] = words[i].replace(words[i][0], words[i][0].toUpperCase());
    }
    /*
      if casing is vowels, find the vowels and replace with uppercase
      OR if casing is consonants, uppercase all letters that are not vowels
    */

    if (casing === "vowel" || casing === "consonant") {
      const vowels = ["a", "e", "i", "o", "u"];
      for (let j = 0; j < words[i].length; j++) {
        if (
          (casing === "vowel" && vowels.includes(words[i][j])) ||
          (casing === "consonant" && !vowels.includes(words[i][j]))
        ) {
          words[i] = words[i].replace(words[i][j], words[i][j].toUpperCase());
        }
      }
    }
  }

  // casing without spaces
  if (casing === "camel" || casing === "pascal") {
    words = words.join("");
    // casing that uses underscores
  } else if (casing === "snake" || casing === ["upper", "snake"]) {
    words = words.join("_");
    if (casing === ["upper", "snake"]) {
      words = words.toUpperCase();
    }
    // casing that uses hyphens
  } else if (casing === "kebab") {
    words = words.join("-");
    // casing that uses spaces
  } else {
    words = words.join(" ");
  }

  return words;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
