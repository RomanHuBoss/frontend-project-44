#!/usr/bin/env node
/* eslint-disable no-underscore-dangle */

import readlineSync from 'readline-sync';
import { askPlayerName, sayWelcome } from './cli.js';

export default class Game {
    static #maxRoundsQuantity = 3;

    #playerName = null;

    #currentRound = 0;

    #correctAnswersQuantity = 0;

    #currentAnswer = null;

    #isFinished = false;

    gameIntro = null;

    questionPostfix = null;

    correctAnswer = null;

    start() {
        sayWelcome();
        this.#playerName = askPlayerName();
        this.#sayHello();
        this.#showGameIntro();

        while (!this.#isFinished && this.#currentRound < Game.#maxRoundsQuantity) {
            this.#nextRound();
        }

        this.#finish();
    }

    #nextRound() {
        this.generateQuestionAndAnswer();
        this.#showQuestion();
        this.#getCurrentAnswer();
        this.#estimateAnswer();
        this.#currentRound += 1;
    }

    #estimateAnswer() {
        if (this.#currentAnswer !== this.correctAnswer) {
            this.#isFinished = true;
            this.#sayWrongAnswer();
            this.#sayTryAgain();
        } else {
            this.#correctAnswersQuantity += 1;
            Game.#sayCorrectAnswer();
        }
    }

    #showQuestion() {
        console.log(`Question: ${this.questionPostfix}`);
    }

    #getCurrentAnswer() {
        this.#currentAnswer = readlineSync.question('Your answer: ');
    }

    #finish() {
        if (this.#correctAnswersQuantity === Game.#maxRoundsQuantity) {
            this.#sayCongratulations();
        }
    }

    #sayHello() {
        console.log(`Hello, ${this.#playerName}!`);
    }

    #showGameIntro() {
        console.log(this.gameIntro);
    }

    #sayCongratulations() {
        console.log(`Congratulations, ${this.#playerName}!`);
    }

    #sayWrongAnswer() {
        console.log(`'${this.#currentAnswer}' is wrong answer ;(. Correct answer was '${this.correctAnswer}'.`);
    }

    static #sayCorrectAnswer() {
        console.log('Correct!');
    }

    #sayTryAgain() {
        console.log(`Let's try again, ${this.#playerName}!`);
    }
}
