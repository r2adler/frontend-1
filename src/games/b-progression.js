import basisOfGames from '../index.js';
import { getRandomNumber, setProgression } from '../helpers.js';

const description = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  const start = getRandomNumber(1, 50);
  const range = getRandomNumber(5, 10);
  const step = getRandomNumber(1, 10);
  const array = setProgression(start, range, step);
  const answer = array.splice(getRandomNumber(0, array.length - 1), 1, '..');
  return [array.join(' '), String(answer)];
};

export default () => basisOfGames(description, getQuestionAndAnswer);
