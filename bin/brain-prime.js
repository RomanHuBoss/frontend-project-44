#!/usr/bin/env node

import Game from '../src/index.js';
import { getRandomInt } from '../src/cli.js';

class BrainPrimeGame extends Game {
    constructor() {
        super();
        this.gameIntro = 'Answer "yes" if given number is prime. Otherwise answer "no".';
    }

    static #isPrime(n) {
        for (let i = 2; i <= Math.sqrt(n); i += 1) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }

    generateQuestionAndAnswer() {
        const number = getRandomInt(1, 1000);

        this.questionPostfix = number;
        this.correctAnswer = BrainPrimeGame.#isPrime(number) ? 'yes' : 'no';
    }
}

new BrainPrimeGame().start();
