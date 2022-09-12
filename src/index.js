#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {askPlayerName, sayWelcome} from '../src/cli.js';

export class Game {
    maxRoundsQuantity = 3;
    playerName = null;
    gameIntro = null;    
    currentRound = 0;
    correctAnswersQuantity = 0;
    questionPostfix = null;
    correctAnswer = null;
    currentAnswer = null;
    isFinished = false;

    constructor() {
    }

    start() {
        sayWelcome();
        this.playerName = askPlayerName();
        this.__sayHello();
        this.__showGameIntro();

        while (!this.isFinished && this.currentRound < this.maxRoundsQuantity) {
            this.__nextRound();
        }        

        this.__finish();
    }

    __nextRound() {
        this.__generateQuestionAndAnswer();
        this.__showQuestion();
        this.__getCurrentAnswer();        
        this.__estimateAnswer();
        
        this.currentRound += 1;    
    }


    __estimateAnswer() {
        if (this.currentAnswer !== this.correctAnswer) {
            console.log(`'${this.currentAnswer}' is wrong answer ;(. Correct answer was '${this.correctAnswer}'.`);
            console.log(`Let's try again, ${this.playerName}!`);

            this.isFinished = true;
        }
        else {
            console.log(`Correct!`);
            this.correctAnswersQuantity += 1;
        }
    }

    __showQuestion() {
        console.log(`Question: ${this.questionPostfix}`);
    }

    __getCurrentAnswer() {
        this.currentAnswer = readlineSync.question('Your answer: ');
    }

    __finish() {
        if (this.correctAnswersQuantity === this.maxRoundsQuantity) {
            this.__sayCongratulations();
        }
    }

    __sayHello() {
        console.log(`Hello, ${this.playerName}!`);
    }

    __showGameIntro() {
        console.log(this.gameIntro);
    }

    __sayCongratulations() {
        console.log(`Congratulations, ${this.playerName}!`);
    }  

    __sayWrongAnswer() {
        console.log(`'${this.currentAnswer}' is wrong answer ;(. Correct answer was '${this.correctAnswer}'.`);
    }

    __sayCorrectAnswer() {
        console.log('Correct!');
    }

    __sayTryAgain() {
        console.log(`Let's try again, ${this.playerName}!`);
    }
};




