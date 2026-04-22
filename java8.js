const sumAll = (arr) => {
  let start = Math.min(arr[0], arr[1]);
  let end = Math.max(arr[0], arr[1]);

  let result = 0;

  for (let i = start; i <= end; i++) {
    result += i;
  }

  return result;
};
/* 
 console.log(sumAll([1, 4]));
*/
