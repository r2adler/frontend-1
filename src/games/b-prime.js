import basisOfGames from '../index.js';
import getRandomNumber from '../helpers.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 100);

  let answer = 'yes';
  for (let i = 2; i < question; i += 1) {
    if (question % i === 0) {
      answer = 'no';
      break;
    }
  }
  return [question, answer];
};

export default () => basisOfGames(description, getQuestionAndAnswer);
