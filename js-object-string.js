const urlDecode = function (text) {
  const parts = text.split("&");
  let output = {};

  for (let pair of parts){
    if (pair.includes("%20")){
      pair = pair.replaceAll("%20", " ");
    }

    pair = pair.split("=");
    output[pair[0]] = pair[1];
  }
  return output;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);