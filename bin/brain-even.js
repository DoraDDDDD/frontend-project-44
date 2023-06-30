#!/usr/bin/env node
import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

const playGame = () => {
    console.log('Welcome to the Brain Games!');
    const playerName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${playerName}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    const questions = [
        { question: 15, answer: 'no' },
        { question: 6, answer: 'yes' },
        { question: 7, answer: 'no' },
    ];

    for (const { question, answer } of questions) {
        console.log(`Question: ${question}`);
        const playerAnswer = readlineSync.question('Your answer: ');

        if (playerAnswer.toLowerCase() !== answer) {
            console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
            console.log(`Let's try again, ${playerName}!`);
            return;
        }

        console.log('Correct!');
    }

    console.log(`Congratulations, ${playerName}!`);
};

playGame();