const pairElement = (dna) => {
  let result = [];
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "A") {
      result.push(["A, T"]);
    } else if (dna[i] === "T") {
      result.push(["T, A"]);
    } else if (dna[i] === "C") {
      result.push(["C, G"]);
    } else if (dna[i] === "G") {
      result.push(["G, C"]);
    }
  }
  return result;
};

// how to use: console.log(pairElement("ATCGA"))
