#!/usr/bin/env node

import Game from '../src/index.js';
import { getRandomInt } from '../src/cli.js';

class BrainEvenGame extends Game {
    constructor() {
        super();
        this.gameIntro = 'Answer "yes" if the number is even, otherwise answer "no".';
    }

    _generateQuestionAndAnswer() {
        const number = getRandomInt(1, 100);

        this.questionPostfix = number;
        this.correctAnswer = (number % 2) === 0 ? 'yes' : 'no';
    }
}

new BrainEvenGame().start();
