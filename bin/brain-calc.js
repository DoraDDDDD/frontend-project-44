#!/usr/bin/env node
import readline from 'readline';

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    const operator = ['+', '-', '*'][Math.floor(Math.random() * 3)];
    const question = num1 + ' ' + operator + ' ' + num2;
    return question;
}

function calculateAnswer(question) {
    const [num1, operator, num2] = question.split(' ');
    const n1 = parseInt(num1);
    const n2 = parseInt(num2);

    if (operator === '+') {
        return n1 + n2;
    } else if (operator === '-') {
        return n1 - n2;
    } else if (operator === '*') {
        return n1 * n2;
    }
}

function playGame() {
    console.log('brain-calc');
    console.log('Welcome to the Brain Games!');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('May I have your name? ', (name) => {
        console.log(`Hello, ${name}!`);

        let correctAnswers = 0;

        const askQuestion = () => {
            const question = generateQuestion();
            const correctAnswer = calculateAnswer(question);

            console.log('What is the result of the expression?');
            console.log(`Question: ${question}`);

            rl.question('Your answer: ', (userAnswer) => {
                const answer = parseInt(userAnswer);
                if (isNaN(answer)) {
                    console.log('Your answer should be an integer. Let\'s try again!');
                    askQuestion();
                    return;
                }

                if (answer === correctAnswer) {
                    console.log('Correct!');
                    correctAnswers++;
                } else {
                    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
                    console.log(`Let's try again, ${name}!`);
                    rl.close();
                    return;
                }

                if (correctAnswers < 3) {
                    askQuestion();
                } else {
                    console.log(`Congratulations, ${name}!`);
                    rl.close();
                }
            });
        };

        askQuestion();
    });
}

playGame();