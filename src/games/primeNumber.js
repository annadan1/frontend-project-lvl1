const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const isPrime = (number) => {
    if (number === 1) {
        return false
    }
    for (let i = 2; i < number; i += 1) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
};

const getNewRound = () => {
    const question = getRandomInt(1, 1000);
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
    return [question, correctAnswer];
};


export default { rules, getNewRound };