function procArrInt(listNum) {
  // your code here\
  let devsHghest = 0, //the highest devisors quantity
    arrOfNum = []; //arrayOfObjects

  listNum.forEach((el) => {
    let devEl = 0;
    for (let i = 1; i <= el; i++) {
      if (el % i == 0) {
        devEl++;
      }
    }
    arrOfNum[arrOfNum.length] = { num: el, devisors: devEl };
  });
  arrOfNum = arrOfNum.sort(
    (a, b) =>
      (a.devisors < b.devisors && 1) || (a.devisors > b.devisors && -1) || 0
  );

  const rating = arrOfNum.filter((el) => el.devisors == arrOfNum[0].devisors);
  const primes = arrOfNum.filter((el) => el.devisors <= 2);
  let ratingNums = [];
  for (i = 0; i < rating.length; i++) {
    ratingNums[ratingNums.length] = rating[i].num;
  }
  ratingNums = ratingNums.sort((a, b) => (a > b && 1) || (a < b && -1) || 0);
  return [listNum.length, primes.length, [arrOfNum[0].devisors, ratingNums]];
}

const arr1 = [
  66, 36, 49, 40, 73, 12, 77, 78, 76, 8, 50, 20, 85, 22, 24, 68, 26, 59, 92, 93,
  30,
];
console.log(procArrInt(arr1));

arr2 = [
  267, 273, 271, 145, 275, 150, 487, 169, 428, 50, 314, 444, 445, 67, 458, 211,
  58, 95, 357, 486, 359, 491, 108, 493, 247, 379,
];

console.log(procArrInt(arr2));

var list1 = [
  386, 5, 149, 278, 160, 91, 424, 429, 305, 436, 52, 58, 188, 190, 288, 72, 458,
  460, 461, 462, 207, 211, 214, 335, 356, 381,
];

console.log(procArrInt(list1));

const left2 = [
  386, 5, 149, 278, 160, 91, 424, 429, 305, 436, 52, 58, 188, 190, 288, 72, 458,
  460, 461, 462, 207, 211, 214, 335, 356, 381,
];

console.log(procArrInt(left2));
