function solution(n, m) {
  let arr = [],
    devi = 0;
  n = parseInt(n);
  m = parseInt(m);

  for (i = n; i <= m; i++) {
    for (d = 2; d <= i; d++) {
      if (i % d == 0) {
        devi++;
      }
      if (d == i && devi == 4) {
        arr.push(BigInt(i));
      }
      if (d == i) devi = 0;
    }
  }
  return arr;
}
console.log(solution(2n, 100n));

/*function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(n, m) {
  const primes = [];
  for (let i = 2; i <= m; i++) {
    if (isPrime(i)) primes.push(i);
  }

  const arr = [];
  for (let i = parseInt(n); i <= parseInt(m); i++) {
    let devi = 0;
    for (const prime of primes) {
      if (prime * prime > i) break;
      if (i % prime === 0) {
        devi++;
        if (devi > 4) break;
      }
    }
    if (devi === 4) arr.push(BigInt(i));
  }
  return arr;
}

console.log(solution(2n, 100n));
 */
