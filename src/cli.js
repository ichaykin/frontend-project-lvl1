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

export const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random() * operators.length)]
}

export const getRandomNumber = (to = 20) => {
  return Math.floor(Math.random() * to);
};

export const sayCongratulations = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

export const sayLetSTryAgain = (userName) => {
  console.log(`Let's try again, ${userName}!`)
};

export const getRoundCount = () => 3;

export const getNOD = (firstNumber, secondNumber) => {
  if (secondNumber) {
    return getNOD(secondNumber, firstNumber % secondNumber);
  } else {
    return Math.abs(firstNumber);
  }
};

export const getProgression = (length = 10, step) => {
  if (!step) {
    step = getRandomNumber(10);
  }

  const progression = [getRandomNumber(10)];

  for (let i = 1; i < length; i += 1) {
    const nextNumber = progression[i - 1] + step;
    progression.push(nextNumber);
  }

  return progression;
};
