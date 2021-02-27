#!/usr/bin/env node
import * as cli from '../src/cli.js';
import brainGame from '../src/index.js';

cli.sayWelcome();
const userName = cli.askUserName();
cli.greetUserWithName(userName);

const questionDescription = 'Find the greatest common divisor of given numbers.';
const questions = [];
const roundCound = cli.getRoundCount();

for (let i = 0; i < roundCound; i += 1) {
  const firstNumber = cli.getRandomNumber();
  const secondNumber = cli.getRandomNumber();

  const text = `${firstNumber} ${secondNumber}`;
  const currentAnswer = cli.getNOD(firstNumber, secondNumber).toString();

  const question = {
    text,
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
