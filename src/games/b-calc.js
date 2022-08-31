import basisOfGames from '../index.js';
import { getRandomNumber } from '../helpers.js';

const description = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
  const simbols = ['+', '-', '*'];
  const a = getRandomNumber(1, 10);
  const b = getRandomNumber(1, 10);
  const operator = simbols[getRandomNumber(0, simbols.length - 1)];
  const question = `${a} ${operator} ${b}`;

  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = Number(a) + Number(b);
      break;
    case '-':
      correctAnswer = Number(a) - Number(b);
      break;
    case '*':
      correctAnswer = Number(a) * Number(b);
      break;
    default:
      throw new Error(`Unknown order state: '${operator}'!`);
  }
  return [question, String(correctAnswer)];
};

export default () => basisOfGames(description, getQuestionAndAnswer);
