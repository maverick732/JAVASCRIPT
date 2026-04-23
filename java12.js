const dropElements = (array, func) => {
  let filteredArray = [];
  let found = false;

  for (let i = 0; i < array.length; i++) {
    if (!found && func(array[i])) {
      found = true;
    }

    if (found) {
      filteredArray.push(array[i]);
    }
  }

  return filteredArray;
};

console.log(
  dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
  }),
);
