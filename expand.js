function expand(expr) {
  let arr = expr.split("^");
  let exprGoer = parseInt(arr[1]);
  arr[0] = arr[0].slice(1, arr[0].length - 1);
  if (arr[0].includes("+")) {
    console.log("+");
  } else if (arr[0].includes("-")) {
    console.log("-");
  }
  return arr;
}

console.log(expand("(r+3b)^3"));
console.log(expand("(-5m+3)^4"));
