#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { askPlayerName, sayWelcome } from './cli.js';

export default class Game {
    maxRoundsQuantity = 3;

    playerName = null;

    gameIntro = null;

    currentRound = 0;

    correctAnswersQuantity = 0;

    questionPostfix = null;

    correctAnswer = null;

    currentAnswer = null;

    isFinished = false;

    start() {
        sayWelcome();
        this.playerName = askPlayerName();
        this.#sayHello();
        this.#showGameIntro();

        while (!this.isFinished && this.currentRound < this.maxRoundsQuantity) {
            this.#nextRound();
        }

        this.#finish();
    }

    #nextRound() {
        this.generateQuestionAndAnswer();
        this.#showQuestion();
        this.#getCurrentAnswer();
        this.#estimateAnswer();
        this.currentRound += 1;
    }

    #estimateAnswer() {
        if (this.currentAnswer !== this.correctAnswer) {
            this.#sayWrongAnswer();
            this.#sayTryAgain();
            this.isFinished = true;
        } else {
            Game.#sayCorrectAnswer();
            this.correctAnswersQuantity += 1;
        }
    }

    #showQuestion() {
        console.log(`Question: ${this.questionPostfix}`);
    }

    #getCurrentAnswer() {
        this.currentAnswer = readlineSync.question('Your answer: ');
    }

    #finish() {
        if (this.correctAnswersQuantity === this.maxRoundsQuantity) {
            this.#sayCongratulations();
        }
    }

    #sayHello() {
        console.log(`Hello, ${this.playerName}!`);
    }

    #showGameIntro() {
        console.log(this.gameIntro);
    }

    #sayCongratulations() {
        console.log(`Congratulations, ${this.playerName}!`);
    }

    #sayWrongAnswer() {
        console.log(`'${this.currentAnswer}' is wrong answer ;(. Correct answer was '${this.correctAnswer}'.`);
    }

    static #sayCorrectAnswer() {
        console.log('Correct!');
    }

    #sayTryAgain() {
        console.log(`Let's try again, ${this.playerName}!`);
    }
}
