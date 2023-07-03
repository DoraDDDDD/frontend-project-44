#!/usr/bin/env node
import readlineSync from 'readline-sync';

function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function runGame() {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('Find the greatest common divisor of given numbers.');

    for (let i = 0; i < 3; i++) {
        const number1 = getRandomNumber(1, 100);
        const number2 = getRandomNumber(1, 100);
        const correctAnswer = gcd(number1, number2);

        console.log(`Question: ${number1} ${number2}`);
        const userAnswer = readlineSync.question('Your answer: ');


        if (Number(userAnswer) === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }

    console.log(`Congratulations, ${name}!`);
}

runGame();