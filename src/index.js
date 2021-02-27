import readlineSync from 'readline-sync';

export default (questionDescription, questions) => {
  let isSuccess = true;

  console.log(questionDescription);

  for (let i = 0; i < questions.length; i += 1) {
    console.log(`Question: ${questions[i].text}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const { correctAnswer } = questions[i];

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      isSuccess = false;
      break;
    }
  }

  return isSuccess;
};
