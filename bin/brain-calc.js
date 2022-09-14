#!/usr/bin/env node

import Game from '../src/index.js';
import { getRandomInt } from '../src/cli.js';

Game({
    gameIntro: 'What is the result of the expression?',
    generator: () => {
        const operations = ['+', '-', '*'];
        const firstNumber = getRandomInt(1, 100);
        const secondNumber = getRandomInt(1, 100);
        const operation = operations[getRandomInt(0, 2)];

        const result = {};
        result.questionPostfix = `${firstNumber} ${operation} ${secondNumber}`;

        if (operation === '+') {
            result.correctAnswer = String(firstNumber + secondNumber);
        } else if (operation === '-') {
            result.correctAnswer = String(firstNumber - secondNumber);
        } else if (operation === '*') {
            result.correctAnswer = String(firstNumber * secondNumber);
        }

        return result;
    },
});
