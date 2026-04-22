const titleCase = (title) => {
  let words = title.split(" ");
  let result = "";

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    result += word[0].toUpperCase() + word.slice(1).toLowerCase();

    if (i < words.length - 1) {
      result += " ";
    }
  }

  return result;
};
