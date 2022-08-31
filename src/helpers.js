const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);
const isEven = (number) => number % 2 === 0;
const gcd = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
};
const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
export {
  getRandomNumber, isEven, gcd, isPrime,
};
