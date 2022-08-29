import basisOfGames from '../index.js';
import getRandomNumber from '../../helpers.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const askQuestion = () => {
  const num = getRandomNumber(1, 10);
  return num;
};

const findAnswer = (num) => ((num % 2 === 0) ? 'yes' : 'no');

export default () => basisOfGames(description, askQuestion, findAnswer);
