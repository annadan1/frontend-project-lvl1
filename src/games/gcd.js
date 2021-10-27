const rules = 'Find the greatest common divisor of given numbers.'

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const greatestDivisor = (num1, num2) => {
    if (!num2) {
      return num1;
    }  
    return greatestDivisor(num2, num1 % num2);
  };

const getNewRound = () => {
    const num1 = getRandomInt(1, 100);
    const num2 = getRandomInt(1, 100);
    const question = `${num1} ${num2}`;
    const correctAnswer = String(greatestDivisor(num1, num2));
    return [question, correctAnswer];
};

export default { rules, getNewRound };