#!/usr/bin/env node

import { letterLetterCipher, letterNumberCipher } from './src/challenge10.js';
import fs from 'fs';
import path from 'path';

let arg = process.argv.splice(2);

const [cipher, method, file, key] = arg;

const inputFile = fs.readFileSync(file, 'utf8');

let outputText = '';
let outputFile = '';

if (cipher === 'll') {
  if (method === 'enc') {
    outputText = letterLetterCipher.encrypt(inputFile);
    outputFile = `${file}.enc`;
  } else if (method === 'dec') {
    outputText = letterLetterCipher.decrypt(inputFile);
    outputFile = path.join(path.dirname(file), path.basename(file, '.enc'));
  }
} else if (cipher === 'ln') {
  if (method === 'enc') {
    outputText = letterNumberCipher.encrypt(inputFile, Number(key));
    outputFile = `${file}.enc`;
  } else if (method === 'dec') {
    outputText = letterNumberCipher.decrypt(inputFile, Number(key));
    outputFile = path.join(path.dirname(file), path.basename(file, '.enc'));
  }
}

fs.writeFileSync(outputFile, outputText);

console.log(`Encrypted text saved to ${outputFile}`);
