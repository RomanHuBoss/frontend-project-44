#!/usr/bin/env node

import {Game} from '../src/index.js';
import {getRandomInt} from '../src/cli.js';

class BrainGcdGame extends Game {
    constructor() {
        super();
        this.gameIntro = 'Find the greatest common divisor of given numbers.';
    }

    __getGcd(firstNumber, secondNumber) {
        while (firstNumber && secondNumber) {
            if (firstNumber > secondNumber) {
                firstNumber %= secondNumber;
            } else {
                secondNumber %= firstNumber;
            }
        }
        return firstNumber + secondNumber;        
    }

    __generateQuestionAndAnswer() {
        const firstNumber = getRandomInt(1, 100);
        const secondNumber = getRandomInt(1, 100);

        this.questionPostfix = `${firstNumber} ${secondNumber}`;        

        this.correctAnswer = String(this.__getGcd(firstNumber, secondNumber));
    }
};

new BrainGcdGame().start();
