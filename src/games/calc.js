import numberGenerate from '../utilits.js';
import startGame from '../index.js';

const getOperation = () => {
  const operations = ['*', '-', '+'];
  return operations[Math.floor(Math.random() * operations.length)];
};

const calculateExpression = (firstArg, secondArg, operation) => {
  switch (operation) {
    case '+':
      return firstArg + secondArg;
    case '-':
      return firstArg - secondArg;
    case '*':
      return firstArg * secondArg;
    default:
      return 'operation not defined';
  }
};

const generateDataOfRound = () => {
  const minNumber = 0;
  const maxNumber = 1000;
  const firstArg = numberGenerate(minNumber, maxNumber);
  const secondArg = numberGenerate(minNumber, maxNumber);
  const operation = getOperation();
  const expression = `${firstArg} ${operation} ${secondArg}`;
  const answerOfRound = `${calculateExpression(firstArg, secondArg, operation)}`;
  return { questionData: expression, answer: answerOfRound };
};

export default () => {
  startGame(generateDataOfRound, 'What is the result of the expression?');
};