import readlineSync from 'readline-sync';

const play = (randomNumber) => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);

    const exitGame = 3;

    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    for (let i = 1; i <= exitGame; i += 1) {
        const [question, correctAnswer] = randomNumber.getNewRound();
        console.log(`Question: ${question}`);
        const answer = readlineSync.question('Your answer: ');

        if (answer !== correctAnswer) {
            console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
            console.log(`Let's try again, ${userName}!`);
            return;
        }
        console.log('Correct!');
    }
    console.log(`Congratulations, ${userName}!`);
};

export default play;