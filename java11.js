const sumFibs = (n) => {
  let a = 1;
  let b = 1;
  let sum = 0;

  while (a <= n) {
    if (a % 2 !== 0) {
      sum += a;
    }

    let temp = a + b;
    a = b;
    b = temp;
  }

  return sum;
};
// how to use: console.log(sumFibs(1000));
