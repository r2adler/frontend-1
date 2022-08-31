const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);
const isEven = (number) => number % 2 === 0;

export { getRandomNumber, isEven };
