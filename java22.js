const destroyer = (arr, ...arrs) => {
  return arr.filter((item) => !arrs.includes(item));
};
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
