const rules = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = (number) => number % 2 === 0;

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getNewRound = () => {
    const question = getRandomInt(1, 100);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    return [question, correctAnswer];
};

export default { rules, getNewRound };
