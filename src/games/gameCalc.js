const rules = 'What is the result of the expression?';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const calc = (num1, num2, operator) => {
  if (operator === '+') {
    return String(num1 + num2);
  } if (operator === '*') {
    return String(num1 * num2);
  }
  return String(num1 - num2);
};

const getNewRound = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const ops = ['+', '-', '*'];
  const openindex = getRandomInt(0, ops.length);
  const operator = ops[openindex];
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calc(num1, num2, operator);
  return [question, correctAnswer];
};

export default { rules, getNewRound };
