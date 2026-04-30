const whatIsInAName = (arr, obj) => {
  return arr.filter((item) =>
    Object.keys(obj).every((key) => item[key] === obj[key]),
  );
};
console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" },
  ),
);
