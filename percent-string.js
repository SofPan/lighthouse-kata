const urlEncode = function(text) {
  let newText = text.split("");
  for(let i = 0; i < newText.length; i++){
    if (newText[i] === " "){
      newText[i] = "%20";
    }
  }
  return newText.join('');
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));