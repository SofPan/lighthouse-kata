const convertLetterToAscii = (char) => {
  return char.charCodeAt(0);
};

const convertAsciiToLetter = (char) => {
  return String.fromCharCode(char);
};

const encrypt = (plaintext, key) => {
  let result = "";
  for (let i = 0; i < plaintext.length; i++) {
    if (plaintext[i] !== " ") {
      let convertedChar = convertLetterToAscii(plaintext[i]) + key;
      if (convertedChar < 97) {
        let wrapNum = 97 - convertedChar - 1;
        convertedChar = 122 - wrapNum;
      }
      if (convertedChar > 122) {
        let wrapNum = convertedChar - 122 - 1;
        convertedChar = 97 + wrapNum;
      }
      convertedChar = convertAsciiToLetter(convertedChar);
      result += convertedChar;
    } else {
      result += " ";
    }
  }
  return result;
};

module.exports = { encrypt };