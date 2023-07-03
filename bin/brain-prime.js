#!/usr/bin/env node
import readlineSync from 'readline-sync';

function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

function playPrimeGame() {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

    let correctAnswers = 0;
    const rounds = 3;

    for (let i = 0; i < rounds; i++) {
        const number = Math.floor(Math.random() * 100) + 1;
        console.log(`Question: ${number}`);

        const userAnswer = readlineSync.question('Your answer: ');
        const correctAnswer = isPrime(number) ? 'yes' : 'no';

        if (userAnswer === correctAnswer) {
            console.log('Correct!');
            correctAnswers++;
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }

    console.log(`Congratulations, ${name}!`);
}

playPrimeGame();