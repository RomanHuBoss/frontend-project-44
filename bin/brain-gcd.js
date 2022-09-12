#!/usr/bin/env node

import Game from '../src/index.js';
import { getRandomInt } from '../src/cli.js';

class BrainGcdGame extends Game {
    constructor() {
        super();
        this.gameIntro = 'Find the greatest common divisor of given numbers.';
    }

    static #getGcd(first, second) {
        let firstNumber = first;
        let secondNumber = second;

        while (firstNumber && secondNumber) {
            if (firstNumber > secondNumber) {
                firstNumber %= secondNumber;
            } else {
                secondNumber %= firstNumber;
            }
        }
        return firstNumber + secondNumber;
    }

    generateQuestionAndAnswer() {
        const firstNumber = getRandomInt(1, 100);
        const secondNumber = getRandomInt(1, 100);

        this.questionPostfix = `${firstNumber} ${secondNumber}`;

        this.correctAnswer = String(BrainGcdGame.#getGcd(firstNumber, secondNumber));
    }
}

new BrainGcdGame().start();
