const convertHTML = (string) => {
  let convertedString = "";
  for (let i = 0; i < string.length; i++) {
    let newString = string[i];
    if (newString === "&") {
      convertedString += "&amp;";
    } else if (newString === "<") {
      convertedString += "&lt;";
    } else if (newString === ">") {
      convertedString += "&gt;";
    } else if (newString === `"`) {
      convertedString += "&quot;";
    } else if (newString === `'`) {
      convertedString += "&apos;";
    } else {
      convertedString += newString;
    }
  }
  return convertedString;
};

// how to use: console.log(convertHTML("Dolce & Gabbana"));
