#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { askPlayerName, sayWelcome, sayHello } from './cli.js';

const Game = (params) => {
    const maxRoundsQuantity = 3;
    const { gameIntro, generator } = params;

    let playerName = null;
    let currentRound = null;
    let correctAnswersQuantity = 0;
    let isFinished = false;
    let questionPostfix = null;
    let correctAnswer = null;
    let currentAnswer = null;

    const showGameIntro = () => {
        console.log(gameIntro);
    };

    const showQuestion = () => {
        console.log(`Question: ${questionPostfix}`);
    };

    const getCurrentAnswer = () => {
        currentAnswer = readlineSync.question('Your answer: ');
    };

    const sayWrongAnswer = () => {
        console.log(`'${currentAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    };

    const sayTryAgain = () => {
        console.log(`Let's try again, ${playerName}!`);
    };

    const sayCorrectAnswer = () => {
        console.log('Correct!');
    };

    const estimateAnswer = () => {
        if (currentAnswer !== correctAnswer) {
            isFinished = true;
            sayWrongAnswer();
            sayTryAgain();
        } else {
            correctAnswersQuantity += 1;
            sayCorrectAnswer();
        }
    };

    const nextRound = () => {
        ({ questionPostfix, correctAnswer } = generator());

        showQuestion();
        getCurrentAnswer();
        estimateAnswer();
        currentRound += 1;
    };

    const sayCongratulations = () => {
        console.log(`Congratulations, ${playerName}!`);
    };

    const finish = () => {
        if (correctAnswersQuantity === maxRoundsQuantity) {
            sayCongratulations();
        }
    };

    const start = () => {
        sayWelcome();
        playerName = askPlayerName();
        sayHello(playerName);
        showGameIntro();

        while (!isFinished && currentRound < maxRoundsQuantity) {
            nextRound();
        }

        finish();
    };

    start();
};

export default Game;
