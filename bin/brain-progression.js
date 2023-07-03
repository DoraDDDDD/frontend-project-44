#!/usr/bin/env node
import readlineSync from 'readline-sync';

function generateArithmeticProgression(length) {
    const progression = [];
    let start = Math.floor(Math.random() * 10) + 1; // Начальное число прогрессии
    const step = Math.floor(Math.random() * 5) + 1; // Шаг прогрессии

    for (let i = 0; i < length; i++) {
        progression.push(start);
        start += step;
    }

    return progression;
}

function hideNumberInProgression(progression, position) {
    const hiddenProgression = [...progression];
    hiddenProgression[position] = '..';
    return hiddenProgression;
}

function playProgressionGame() {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);

    console.log('What number is missing in the progression?');

    let correctAnswers = 0;
    const rounds = 3;

    for (let i = 0; i < rounds; i++) {
        const progressionLength = Math.floor(Math.random() * 6) + 5; // Случайная длина прогрессии от 5 до 10
        const progression = generateArithmeticProgression(progressionLength);
        const hiddenPosition = Math.floor(Math.random() * progressionLength); // Случайная позиция скрытого числа
        const hiddenProgression = hideNumberInProgression(progression, hiddenPosition);

        const question = hiddenProgression.join(' ');
        console.log(`Question: ${question}`);

        const userAnswer = readlineSync.question('Your answer: ');
        const correctAnswer = progression[hiddenPosition].toString();

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

playProgressionGame();

