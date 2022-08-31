import basisOfGames from '../index.js';
import { getRandomNumber, isPrime } from '../helpers.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => basisOfGames(description, getQuestionAndAnswer);
