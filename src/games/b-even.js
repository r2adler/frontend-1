import basisOfGames from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 10);
  const answer = (question % 2 === 0) ? 'yes' : 'no';
  return [question, answer];
};

export default () => basisOfGames(description, getQuestionAndAnswer);
