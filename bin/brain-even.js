#!/usr/bin/env node

import greetings from '../src/cli.js';
import readlineSync from 'readline-sync';

const name = greetings();
const maxQuestions = 3;
while (true) {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    for (let i = 0; i < maxQuestions; i += 1) {
        const number = Math.ceil(Math.random()*100);

        const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

        console.log(`Quesiton: ${number}`);

        const answer = readlineSync.question('Your answer: ');

        if (answer !== correctAnswer) {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            break;
        }
        console.log('Correct!');        
        
        if (i === maxQuestions - 1) {
            console.log(`Congratulations, ${name}!`);
        }
    }
}
