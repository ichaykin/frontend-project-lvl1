import readlineSync from 'readline-sync';

export const isEven = number => number % 2 === 0;

export const askUserName = () => {
  return readlineSync.question('May I have your name? ');
};

export const sayWelcome = () => {
  console.log('Welcome to the Brain Games!');
};

export const greetUserWithName = name => {
  console.log(`Hello, ${name}!`);
};

export const getRandomNumber = (to = 20) => {
  return Math.floor(Math.random() * to);
};

export const sayQuestion = number => {
  console.log(`Question: ${number}`);
};

export const getAnswer = () => {
  return readlineSync.question('Your answer: ');
};

export const getCorrectAnswer = number => isEven(number) ? 'yes' : 'no';