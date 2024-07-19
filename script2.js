function countRedBeads(n) {
  let finals;
  if (n % 2 == 0) {
    finals = n * 1.998;
  } else {
    finals = (n - 1) * 2;
  }
  return Math.round(finals);
}

console.log(countRedBeads(970));
