#!/usr/bin/env node
import * as cli from '../src/cli.js';
import brainGame from '../src/index.js';

cli.sayWelcome();
const userName = cli.askUserName();
cli.greetUserWithName(userName);

const questionDescription = 'What is the result of the expression?';
const questions = [];
const roundCound = cli.getRoundCount();

for (let i = 0; i < roundCound; i += 1) {
  const progression = cli.getProgression();
  const deletedIndex = cli.getRandomNumber(progression.length);
  const currentAnswer = progression[deletedIndex].toString();
  progression[deletedIndex] = '..';
  const text = progression.join(' ');

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
