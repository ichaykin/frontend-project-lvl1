#!/usr/bin/env node
import * as cli from '../src/cli.js';
import { brainGame } from '../src/index.js';

cli.sayWelcome();
const userName = cli.askUserName();
cli.greetUserWithName(userName);

const questionDescription = 'What is the result of the expression?';
const questions = [];
const roundCound = cli.getRoundCount();

for (let i = 0; i < roundCound; i += 1) {
    const firstNumber = cli.getRandomNumber();
    const secondNumber = cli.getRandomNumber();
    const operator = cli.getRandomOperator();
    const text = `${firstNumber} ${operator} ${secondNumber}`;
    const currentAnswer = eval(text).toString();

    const question = {
        text: text,
        correctAnswer: currentAnswer
    };

    questions.push(question);
}

const result = brainGame(questionDescription, questions);

if (result) {
    cli.sayCongratulations(userName);
} else {
    cli.sayLetSTryAgain(userName);
}
