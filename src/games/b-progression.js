import basisOfGames from '../index.js';
import { getRandomNumber, progression } from '../helpers.js';

const description = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  const array = progression(getRandomNumber(1, 50), getRandomNumber(5, 10), getRandomNumber(1, 10));
  const answer = array.splice(getRandomNumber(0, array.length - 1), 1, '..');
  return [array.join(' '), String(answer)];
};

export default () => basisOfGames(description, getQuestionAndAnswer);
