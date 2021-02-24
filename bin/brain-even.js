#!/usr/bin/env node
import * as cli from '../src/cli.js';

cli.sayWelcome();
const userName = cli.askUserName();
cli.greetUserWithName(userName);

const requiredAnswersCount = 3;
let isSuccess = true;
console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < requiredAnswersCount; i += 1) {
    const randomNumber = cli.getRandomNumber();

    cli.sayQuestion(randomNumber);
    const answer = cli.getAnswer();
    const correctAnswer = cli.getCorrectAnswer(randomNumber);

    if (correctAnswer === answer) {
        console.log('Correct!');
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${userName}!`)
        isSuccess = false;
        break;
    }
}

if (isSuccess) {
    console.log(`Congratulations, ${userName}!`);
}
