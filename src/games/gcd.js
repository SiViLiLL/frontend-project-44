import numberGenerate from '../utilits.js';
import startGame from '../index.js';

const calculateGcd = (firstNumber, secondNumber) => {
  let divider = firstNumber <= secondNumber ? firstNumber : secondNumber;
  let divisible = divider === firstNumber ? secondNumber : firstNumber;
  while (divider <= divisible) {
    if (divisible % divider !== 0) {
      const helper = divider;
      divider = divisible % divider;
      divisible = helper;
    } else {
      return divider;
    }
  }
  return divider;
};

const generateDataOfRound = () => {
  const minNumber = 0;
  const maxNumber = 1000;
  const firstNumber = numberGenerate(minNumber, maxNumber);
  const secondNumber = numberGenerate(minNumber, maxNumber);
  const coupleOfNumbers = `${firstNumber} ${secondNumber}`;
  const answerOfRound = `${calculateGcd(firstNumber, secondNumber)}`;
  return { questionData: coupleOfNumbers, answer: answerOfRound };
};

export default () => {
  startGame(generateDataOfRound, 'Find the greatest common divisor of given numbers.');
};
