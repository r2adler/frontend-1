import basisOfGames from '../index.js';
import { getGcd, getRandomNumber } from '../helpers.js';

const description = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswer = () => {
  const a = getRandomNumber(1, 100);
  const b = getRandomNumber(1, 100);
  const question = `${a} ${b}`;
  const answer = getGcd(a, b);
  return [question, String(answer)];
};

export default () => basisOfGames(description, getQuestionAndAnswer);
