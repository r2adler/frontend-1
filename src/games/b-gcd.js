import basisOfGames from '../index.js';
import getRandomNumber from '../../helpers.js';

const description = 'Find the greatest common divisor of given numbers.';

const askQuestion = () => {
  const a = getRandomNumber(1, 100);
  const b = getRandomNumber(1, 100);
  return (`${a} ${b}`);
};

const findAnswer = (question) => {
  const [num1, num2] = question.split(' ');
  let a = Number(num1);
  let b = Number(num2);
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return String(a);
};

export default () => basisOfGames(description, askQuestion, findAnswer);
