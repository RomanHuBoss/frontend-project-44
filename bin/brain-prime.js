#!/usr/bin/env node

import Game from '../src/index.js';
import { getRandomInt } from '../src/cli.js';

Game({
  gameIntro: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  generator: () => {
    const number = getRandomInt(1, 100);

    const result = {};
    result.questionPostfix = number;

    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(number); i += 1) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }

    result.correctAnswer = isPrime ? 'yes' : 'no';

    return result;
  },
});
