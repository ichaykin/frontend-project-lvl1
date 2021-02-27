#!/usr/bin/env node
import readlineSync from "readline-sync";

export const brainGame = (questionDescription, questions) => {
    let isSuccess = true;

    console.log(questionDescription);

    for (const question of questions) {
        console.log(`Question: ${question.text}`);
        const userAnswer = readlineSync.question('Your answer: ');
        const correctAnswer = question.correctAnswer;

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
