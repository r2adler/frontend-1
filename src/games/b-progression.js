import basisOfGames from '../index.js';
import { getRandomNumber } from '../helpers.js';

const description = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  const num1 = getRandomNumber(1, 50);
  const step = getRandomNumber(1, 10);
  const range = getRandomNumber(5, 10);
  const array = [];
  for (let i = num1; array.length < range; i += step) {
    array.push(i);
  }
  array.splice(getRandomNumber(range), 1, '..');
  const question = array.join(' ');

  let answer;
  if (array.indexOf('..') === 0) {
    answer = array[1] - (array[2] - array[1]);
  } else if (array.indexOf('..') === array.length - 1) {
    answer = (+array[array.length - 2] - +array[array.length - 3]) + +array[array.length - 2];
  } else {
    const nextNumberIndex = array.indexOf('..') + 1;
    const prevNumberIndex = array.indexOf('..') - 1;
    answer = (+array[prevNumberIndex] + (+array[nextNumberIndex] - +array[prevNumberIndex]) / 2);
  }
  return [question, String(answer)];
};

export default () => basisOfGames(description, getQuestionAndAnswer);
