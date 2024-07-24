snailCoordinate = (n) => (n % 4 > 0 ? [1 - n, 2, n + 1][(n % 4) - 1] / 2 : 0);
//[0, 1 - n, 2, n + 1][n % 4] / 2;

console.log(snailCoordinate(1)); //0
console.log(snailCoordinate(2)); //1
console.log(snailCoordinate(3)); //2
console.log(snailCoordinate(4)); //0
console.log(snailCoordinate(5)); //-2
console.log(snailCoordinate(6)); //1
console.log(snailCoordinate(7)); //4
console.log(snailCoordinate(8)); //0
console.log(snailCoordinate(12)); //0
console.log(snailCoordinate(13)); //-6
