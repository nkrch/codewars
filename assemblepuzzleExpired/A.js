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

  let filteredArr = pieces
    .filter((e) => e.top == false)
    .sort((a, b) => (a.left < b.left && -1) || (a.left > b.left && 1) || 0);

  let filteredArr1 = pieces
    .filter((e) => e.top != false)
    .sort((a, b) => (a.top < b.top && -1) || (a.top > b.top && 1) || 0);

  let filteredArr2 = filteredArr.concat(filteredArr1);

  if (rows == 1) {
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
      prev = 0;
    for (let r = 0; r < rows; r++) {
      finals[r] = [];
      for (let c = 0; c < columns; c++) {
        finals[r][c] = filteredArr2[prev];
        prev++;
      }
    }
    return finals;
  }
}

console.log(
  assemblePuzzle([
    { top: false, left: false, right: "1", bottom: false },
    { top: false, left: "1", right: "2", bottom: false },
    { top: false, left: "10", right: "11", bottom: false },
    { top: false, left: "11", right: "12", bottom: false },
    { top: false, left: "12", right: "13", bottom: false },
    { top: false, left: "13", right: "14", bottom: false },
    { top: false, left: "14", right: "15", bottom: false },
    { top: false, left: "15", right: "16", bottom: false },
    { top: false, left: "16", right: "17", bottom: false },
    { top: false, left: "17", right: "18", bottom: false },
    { top: false, left: "18", right: "19", bottom: false },
    { top: false, left: "19", right: "20", bottom: false },
    { top: false, left: "2", right: "3", bottom: false },
    { top: false, left: "20", right: "21", bottom: false },
    { top: false, left: "21", right: "22", bottom: false },
    { top: false, left: "22", right: "23", bottom: false },
    { top: false, left: "23", right: "24", bottom: false },
    { top: false, left: "24", right: "25", bottom: false },
    { top: false, left: "25", right: "26", bottom: false },
    { top: false, left: "26", right: "27", bottom: false },
    { top: false, left: "27", right: "28", bottom: false },
    { top: false, left: "28", right: "29", bottom: false },
    { top: false, left: "29", right: "30", bottom: false },
    { top: false, left: "3", right: "4", bottom: false },
    { top: false, left: "30", right: "31", bottom: false },
    { top: false, left: "31", right: "32", bottom: false },
    { top: false, left: "32", right: "33", bottom: false },
    { top: false, left: "33", right: "34", bottom: false },
    { top: false, left: "34", right: "35", bottom: false },
    { top: false, left: "35", right: "36", bottom: false },
    { top: false, left: "36", right: "37", bottom: false },
    { top: false, left: "37", right: "38", bottom: false },
    { top: false, left: "38", right: "39", bottom: false },
    { top: false, left: "39", right: "40", bottom: false },
    { top: false, left: "4", right: "5", bottom: false },
    { top: false, left: "40", right: "41", bottom: false },
    { top: false, left: "41", right: "42", bottom: false },
    { top: false, left: "42", right: "43", bottom: false },
    { top: false, left: "43", right: "44", bottom: false },
    { top: false, left: "44", right: "45", bottom: false },
    { top: false, left: "45", right: "46", bottom: false },
    { top: false, left: "46", right: "47", bottom: false },
    { top: false, left: "47", right: "48", bottom: false },
    { top: false, left: "48", right: "49", bottom: false },
    { top: false, left: "49", right: false, bottom: false },
    { top: false, left: "5", right: "6", bottom: false },
    { top: false, left: "6", right: "7", bottom: false },
    { top: false, left: "7", right: "8", bottom: false },
    { top: false, left: "8", right: "9", bottom: false },
    { top: false, left: "9", right: "10", bottom: false },
  ])
);

const puzzle1 = [
  { top: false, left: "4", right: false, bottom: "e" },
  { top: "q", left: "17", right: "18", bottom: false },
  { top: "c", left: "6", right: "7", bottom: "h" },
  { top: false, left: false, right: "1", bottom: "a" },
  { top: "j", left: "12", right: false, bottom: "o" },
  { top: "k", left: false, right: "13", bottom: "p" },
  { top: "o", left: "16", right: false, bottom: "t" },
  { top: "m", left: "14", right: "15", bottom: "r" },
  { top: false, left: "3", right: "4", bottom: "d" },
  { top: "f", left: false, right: "9", bottom: "k" },
  { top: "d", left: "7", right: "8", bottom: "i" },
  { top: "r", left: "18", right: "19", bottom: false },
  { top: "b", left: "5", right: "6", bottom: "g" },
  { top: "g", left: "9", right: "10", bottom: "l" },
  { top: false, left: "2", right: "3", bottom: "c" },
  { top: false, left: "1", right: "2", bottom: "b" },
  { top: "s", left: "19", right: "20", bottom: false },
  { top: "t", left: "20", right: false, bottom: false },
  { top: "e", left: "8", right: false, bottom: "j" },
  { top: "i", left: "11", right: "12", bottom: "n" },
  { top: "l", left: "13", right: "14", bottom: "q" },
  { top: "p", left: false, right: "17", bottom: false },
  { top: "a", left: false, right: "5", bottom: "f" },
  { top: "h", left: "10", right: "11", bottom: "m" },
  { top: "n", left: "15", right: "16", bottom: "s" },
];
console.log(assemblePuzzle(puzzle1));
