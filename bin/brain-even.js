#!/usr/bin/env node

import Game from '../src/index.js';
import { getRandomInt } from '../src/cli.js';

Game({
  gameIntro: 'Answer "yes" if the number is even, otherwise answer "no".',
  generator: () => {
    const number = getRandomInt(1, 100);

    const result = {};
    result.questionPostfix = number;
    result.correctAnswer = (number % 2) === 0 ? 'yes' : 'no';

    return result;
  },
});
