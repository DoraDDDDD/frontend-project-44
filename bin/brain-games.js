#!/usr/bin/env node
import { getName } from '../src/cli.js';

const result = getName();
console.log(`Hello, ${result}!`);
