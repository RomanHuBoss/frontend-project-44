#!/usr/bin/env node

import {Game} from '../src/index.js';
import {getRandomInt} from '../src/cli.js';

class BrainCalcGame extends Game {
    constructor() {
        super();
        this.gameIntro = 'What is the result of the expression?';
    }

    __generateQuestionAndAnswer() {
        const operations = ['+', '-', '*'];
        const firstNumber = getRandomInt(1, 100);
        const secondNumber = getRandomInt(1, 100);
        const operation = operations[getRandomInt(0, 2)];

        this.questionPostfix = `${firstNumber} ${operation} ${secondNumber}`;        
        if (operation === '+') {
            this.correctAnswer = String(firstNumber + secondNumber);
        } else if (operation === '-') {
            this.correctAnswer = String(firstNumber - secondNumber);
        } else if (operation === '*') {
            this.correctAnswer = String(firstNumber * secondNumber);
        }
    }
};

new BrainCalcGame().start();
