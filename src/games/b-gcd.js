import basisOfGames from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswer = () => {
  let a = getRandomNumber(1, 100);
  let b = getRandomNumber(1, 100);
  const question = `${a} ${b}`;

  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  const answer = String(a);
  return [question, answer];
};

export default () => basisOfGames(description, getQuestionAndAnswer);
