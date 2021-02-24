#!/usr/bin/env node
import * as cli from '../src/cli.js';

cli.sayWelcome();
const userName = cli.askUserName();
cli.greetUserWithName(userName);
