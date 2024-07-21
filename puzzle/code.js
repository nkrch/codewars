function assemblePuzzle(pieces) {
  function columnsF() {
    let res = 0;
    for (let i = 0; i < pieces.length; i++) {
      if (pieces[i].top == false) {
        res++;
      }
    }
    return res;
  }

  function compare(a, b) {
    console.log(a);
    console.log(b);

    if (a.left < b.left) {
      return -1;
    }
    if (a.left > b.left) {
      return 1;
    }
    // a должно быть равным b
    return 0;
  }

  let puzzle = [],
    buffArr = [],
    columns = columnsF();
  let rows = 1;
  rows = pieces.length / columns;
  console.log(columns, rows);

  let filteredArr2 = pieces.sort(
    (a, b) => (a.top < b.top && -1) || (a.top > b.top && 1) || 0
  );
  if (rows == 1 && columns == 1) {
    return pieces;
  } else if (rows == 1) {
    console.log(rows + " - rows");
    let arr3 = [],
      prev = false;
    for (let i = 0; i < filteredArr2.length; i++) {
      arr3[arr3.length] = filteredArr2.find((el) => el.left == prev);
      console.log(arr3);
      prev++;
    }
    return arr3;
  } else if (columns == 1) {
    console.log(columns + " - columns");
    for (let i = 0; i < filteredArr2.length; i++) {
      console.log("column1");
    }
  } else {
    let finals = [],
      prev = false;
    for (let r = 0; r < rows; r++) {
      finals[r] = [];
      for (let c = 0; c < columns; c++) {
        if (c == 0 && r == 0) {
          finals[r][c] = filteredArr2.find(
            (el) => el.left == false && el.top == false
          );
        } else if (r == 0 && c != 0) {
          finals[r][c] = filteredArr2.find(
            (el) => el.top == false && el.left == prev
          );
        } else if (c == 0 && r != 0) {
          console.log(filteredArr2.filter((el) => el.right == prev)[0]);
          finals[r][c] = filteredArr2.filter(
            (el) => el.left == false && el.right == c + r * columns
          )[0];
          prev = c + r * columns - 1;
        } else {
          finals[r][c] = filteredArr2.find(
            (el) => el.left == r * columns + c - 1
          );
        }
        prev++;
      }
    }
    return finals;
  }
}

console.log(assemblePuzzle(puzzle));
console.log(assemblePuzzle(puzzle1));
console.log(assemblePuzzle(puzzle3));
