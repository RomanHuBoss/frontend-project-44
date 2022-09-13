#!/usr/bin/env node

import Game from '../src/index.js';
import { getRandomInt } from '../src/cli.js';

class BrainProgressionGame extends Game {
    constructor() {
        super();
        this.gameIntro = 'What number is missing in the progression?';
    }

    generateQuestionAndAnswer() {
        const firstNumber = getRandomInt(1, 100);
        const progressionLength = getRandomInt(5, 20);
        const index2Hide = getRandomInt(0, progressionLength - 1);
        const progressionStep = getRandomInt(1, 10);

        this.questionPostfix = '';

        for (let i = 0; i < progressionLength; i += 1) {
            if (i > 0) {
                this.questionPostfix += ' ';
            }

            const elem = firstNumber + i * progressionStep;

            if (i === index2Hide) {
                this.correctAnswer = String(elem);
                this.questionPostfix += '..';
            } else {
                this.questionPostfix += elem;
            }
        }
    }
}

new BrainProgressionGame().start();
