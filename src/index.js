import readlineSync from 'readline-sync';

const basisOfGames = (description, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(description);

  for (let i = 0; i < 3; i += 1) {
    const [question, answer] = getQuestionAndAnswer();

    console.log('Question:', question);
    const usersAnswer = readlineSync.question('Your answer: ');

    if (usersAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${usersAnswer}" is wrong answer ;(. Correct answer was "${answer}". \nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default basisOfGames;
