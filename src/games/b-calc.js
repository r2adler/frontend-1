import basisOfGames from '../index.js';
import getRandomNumber from '../../helpers.js';

const description = 'What is the result of the expression?';

const askQuestion = () => {
  const randomOperator = () => {
    const simbols = ['+', '-', '*'];
    return simbols[getRandomNumber(0, simbols.length - 1)];
  };
  const operator = randomOperator();
  const a = getRandomNumber(1, 10);
  const b = getRandomNumber(1, 10);
  const result = [a, operator, b];
  return result.join(' ');
};

const findAnswer = (result) => {
  const [a, oper, b] = result.split(' ');
  let correctAnswer;
  switch (oper) {
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
      throw new Error(`Unknown order state: '${oper}'!`);
  }
  return String(correctAnswer);
};

export default () => basisOfGames(description, askQuestion, findAnswer);
