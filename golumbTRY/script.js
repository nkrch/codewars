function golumb(given, n) {
  function max() {
    let newGiven = given.split(" ");
    let newGiven2 = [];
    newGiven.forEach((element) => {
      newGiven2[newGiven2.length] = parseInt(element);
    });
    let max = Math.max.apply(null, newGiven2);
    console.log(max);
    return max;
  }

  function aFormula(n) {
    let formula = Math.pow(phi(), 2 - phi()) * Math.pow(n, phi() - 1);
    /* let n1=n-1;
let formula1=1+()*/
    return formula;
  }

  function phi() {
    return (1 + Math.sqrt(5)) / 2;
  }

  function finalFormula(n) {
    let n1 = n - 1;
    let finals = 1 + aFormula(n - aFormula(aFormula(n1)));
    return Math.round(finals);
  }

  let result = [1];
  if (max() > 1) {
    for (let i = 2; i <= max(); i++) {
      let iter = finalFormula(i);
      for (let a = 0; a < iter; a++) {
        result[result.length] = i;
      }
    }
  } else {
    result = [1];
  }

  return result;
}

console.log(golumb("1 2 3 4 5 6 7 8 9 10"));
