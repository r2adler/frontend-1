import readlineSync from 'readline-sync';

const basisOfGames = (description, askQuestion, findAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  // Вывод на экран задания
  console.log(description);

  for (let i = 0; i < 3; i += 1) {
    const question = askQuestion();
    console.log('Question:', question);
    const usersAnswer = readlineSync.question('Your answer: ');

    // Константа для правильного ответа
    const rightAnswer = findAnswer(question);

    if (usersAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${usersAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}". \nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default basisOfGames;
