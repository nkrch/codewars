function assemblePuzzle(pieces) {
  console.log(pieces.length);

  const rows = 0 + pieces.filter((el) => el.left === false).length;
  console.log(pieces.filter((el) => el.left == false));
  const columns = pieces.length / rows;
  console.log(rows);
  let arr = [];
  if (rows == 1 && columns == 1) {
    return [pieces];
  }
  for (let r = 0; r < rows; r++) {
    arr[r] = [];
    for (let c = 0; c < columns; c++) {
      if (c == 0 && r == 0) {
        arr[r][c] = pieces.find((el) => el.top === false && el.left == el.top);
      }
      if (c != 0 && r == 0) {
        arr[r][c] = pieces.find((el) => el.left === arr[r][c - 1].right);
      }
      if (r != 0) {
        if (r == rows - 1) {
          arr[r][c] = pieces.find(
            (el) => el.top == arr[r - 1][c].bottom && el.bottom == false
          );
        } else {
          arr[r][c] = pieces.find((el) => el.top === arr[r - 1][c].bottom);
        }
      }
    }
  }
  return arr;
}

console.log(assemblePuzzle(puzzle));
console.log(assemblePuzzle(puzzle1));
console.log(assemblePuzzle(puzzle3));
console.log(assemblePuzzle(puzzle4));
console.log(assemblePuzzle(puzzle5));
console.log(assemblePuzzle(puzzle6));
