#!/usr/bin/env node

import Game from '../src/index.js';
import { getRandomInt } from '../src/cli.js';

Game({
    gameIntro: 'Find the greatest common divisor of given numbers.',
    generator: () => {
        let firstNumber = getRandomInt(1, 100);
        let secondNumber = getRandomInt(1, 100);

        const result = {};
        result.questionPostfix = `${firstNumber} ${secondNumber}`;

        while (firstNumber && secondNumber) {
            if (firstNumber > secondNumber) {
                firstNumber %= secondNumber;
            } else {
                secondNumber %= firstNumber;
            }
        }

        result.correctAnswer = String(firstNumber + secondNumber);

        return result;
    },
});
