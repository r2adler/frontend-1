import basisOfGames from '../index.js';
import { getRandomNumber, isEven } from '../helpers.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 10);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => basisOfGames(description, getQuestionAndAnswer);
