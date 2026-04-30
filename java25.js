const steamrollArray = (array) => {
  let flattenedArray = [];
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (Array.isArray(item)) {
      flattenedArray.push(...steamrollArray(item));
    } else {
      flattenedArray.push(item);
    }
  }
  return flattenedArray;
};
console.log(steamrollArray([1, {}, [3, [[4]]]]));
