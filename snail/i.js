snail = function (array) {
  // enjoy
  console.log(array);
  let arr = [];
  if (array.length > 1) {
    let rows = array.length;
    let columns = array[0].length;
    //snail pattern
    //variants: right,down,left,up patterns
    let goThrow = rows;

    goThrowFunc(goThrow, "right", 0, 0);
    function goThrowFunc(goThrow, pattern, X, Y) {
      switch (pattern) {
        //X - in array in array
        //Y - in array
        case "up":
          for (let i = 0; i < goThrow; i++) {
            arr.push(array[Y][X]);
            Y--;
          }
          if (arr.length < array.length * columns) {
            goThrowFunc(goThrow, "right", (X += 1), (Y += 1));
          }
          break;
        case "down":
          for (let i = 0; i < goThrow; i++) {
            arr.push(array[Y][X]);
            Y++;
          }
          if (arr.length < array.length * columns) {
            goThrowFunc(goThrow, "left", (X -= 1), (Y -= 1));
          }
          break;
        case "right":
          for (let i = 0; i < goThrow; i++) {
            arr.push(array[Y][X]);
            X++;
          }
          if (arr.length < array.length * columns) {
            goThrowFunc(goThrow - 1, "down", (X -= 1), (Y += 1));
          }
          break;
        case "left":
          for (let i = 0; i < goThrow; i++) {
            arr.push(array[Y][X]);
            X--;
          }
          if (arr.length < array.length * columns) {
            goThrowFunc(goThrow - 1, "up", (X += 1), (Y -= 1));
          }
          break;
        default:
          break;
      }
    }

    return arr;
  } else if (array.length == 1 && array[0].length > 0) {
    return array[0];
  } else return [];
};
const array = [[]];
console.log(snail(array));
