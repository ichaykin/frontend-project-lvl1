#!/usr/bin/env node
import * as cli from '../src/cli.js';
import brainGame from '../src/index.js';

cli.sayWelcome();
const userName = cli.askUserName();
cli.greetUserWithName(userName);

const questionDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const questions = [];
const roundCound = cli.getRoundCount();

for (let i = 0; i < roundCound; i += 1) {
  const randomNumber = cli.getRandomNumber();
  const currentAnswer = cli.isEven(randomNumber) ? 'yes' : 'no';

  const question = {
    text: randomNumber,
    correctAnswer: currentAnswer,
  };

  questions.push(question);
}

const result = brainGame(questionDescription, questions);

if (result) {
  cli.sayCongratulations(userName);
} else {
  cli.sayLetSTryAgain(userName);
}
