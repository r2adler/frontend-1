import basisOfGames from '../index.js';
import getRandomNumber from '../../helpers.js';

const description = 'What number is missing in the progression?';

const askQuestion = () => {
  const num1 = getRandomNumber(1, 50);
  const step = getRandomNumber(1, 10);
  const range = getRandomNumber(5, 10);
  const arrow = [];
  for (let i = num1; arrow.length < range; i += step) {
    arrow.push(i);
  }
  arrow.splice(getRandomNumber(range), 1, '..');
  return arrow.join(' ');
};

const findAnswer = (currentArrow) => {
  const arrow = currentArrow.split(' ');
  let answer;
  if (arrow.indexOf('..') === 0) {
    answer = arrow[1] - (arrow[2] - arrow[1]);
  } else if (arrow.indexOf('..') === arrow.length - 1) {
    answer = (+arrow[arrow.length - 2] - +arrow[arrow.length - 3]) + +arrow[arrow.length - 2];
  } else {
    const nextNumberIndex = arrow.indexOf('..') + 1;
    const prevNumberIndex = arrow.indexOf('..') - 1;
    answer = (+arrow[prevNumberIndex] + (+arrow[nextNumberIndex] - +arrow[prevNumberIndex]) / 2);
  }
  return String(answer);
};

export default () => basisOfGames(description, askQuestion, findAnswer);
