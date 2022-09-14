#!/usr/bin/env node

import Game from '../src/index.js';
import { getRandomInt } from '../src/cli.js';

Game({
    gameIntro: 'What number is missing in the progression?',
    generator: () => {
        const firstNumber = getRandomInt(1, 100);
        const progressionLength = getRandomInt(5, 20);
        const index2Hide = getRandomInt(0, progressionLength - 1);
        const progressionStep = getRandomInt(1, 10);

        const result = {};
        result.questionPostfix = '';

        for (let i = 0; i < progressionLength; i += 1) {
            if (i > 0) {
                result.questionPostfix += ' ';
            }

            const elem = firstNumber + i * progressionStep;

            if (i === index2Hide) {
                result.correctAnswer = String(elem);
                result.questionPostfix += '..';
            } else {
                result.questionPostfix += elem;
            }
        }
        return result;
    },
});
