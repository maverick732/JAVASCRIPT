const getIndexToIns = (array, num) => {
  let sortedArray = array.sort((a, b) => a - b);
  const index = sortedArray.findIndex((n) => n >= num);
  return index === -1 ? sortedArray.length : index;
};
console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
