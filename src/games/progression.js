const rules = 'What number is missing in the progression?'

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getProgression = (start, step, end) => {
    const arr = [];
    for (let i = start; arr.length <= end; i += step) {
        arr.push(i)
    }
    return arr;
};

const getNewRound = () => {
    const start = getRandomInt(1, 15);
    const end = getRandomInt(5, 10);
    const step = getRandomInt(1, 10);
    const progression = getProgression(start, step, end);
    const missedNumber = getRandomInt(2, (end - 1));
    const correctAnswer = String(progression[missedNumber]);

    progression[missedNumber] = '..';

    const question = progression.join(' ');

    return [question, correctAnswer];
};


export default { rules, getNewRound };