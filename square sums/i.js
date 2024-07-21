function square_sums_row(n) {
  //
  let arr = [],
    sortedArr = [];
  for (let i = 0; i < n; i++) {
    sortedArr[sortedArr.length] = i;
  }
  console.log(sortedArr);
  return n;
}

console.log(square_sums_row(16));
console.log(square_sums_row(15));
