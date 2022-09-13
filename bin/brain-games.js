#!/usr/bin/env node

import { sayWelcome, askPlayerName, sayHello } from '../src/cli.js';

sayWelcome();
sayHello(askPlayerName());
