import basisOfGames from '../index.js';
import getRandomNumber from '../../helpers.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const askQuestion = () => getRandomNumber(1, 100);

const findAnswer = (num) => {
  let answer = 'yes';
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      answer = 'no';
      break;
    }
  }

  return answer;
};

export default () => basisOfGames(description, askQuestion, findAnswer);
