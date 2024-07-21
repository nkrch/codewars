const divNum = (a, b) => {
  let res = a,
    devs = 0;
  if (b < a) {
    return "Error";
  }

  if (a == b) return a;

  for (let i = a; i <= b; i++) {
    let devs2 = 0;
    for (let e = 1; e <= i; e++) {
      if (i % e == 0) devs2++;
    }
    if (devs2 > devs) {
      devs = devs2;
      res = i;
    }
  }
  return res;
};
