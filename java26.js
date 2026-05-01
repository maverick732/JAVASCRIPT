function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function smallestCommons(arr) {
  let [min, max] = arr.sort((a, b) => a - b);
  let multiple = min;

  for (let i = min + 1; i <= max; i++) {
    multiple = lcm(multiple, i);
  }

  return multiple;
}

console.log(smallestCommons([1, 5])); // 60
