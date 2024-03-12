import { letterLetterCipher, letterNumberCipher } from './src/challenge10.js';
import fs from 'fs';
import path from 'path';

export default function ciphery() {
  let arg = process.argv.splice(2);

  const [charset, method, file, key] = arg;

  const inputFile = fs.readFileSync(file, 'utf8');

  let outputText = '';
  let outputFile = '';

  if (charset === 'll') {
    if (method === 'enc') {
      outputText = letterLetterCipher.encrypt(inputFile);
      outputFile = `${file}.enc`;
    } else if (method === 'dec') {
      outputText = letterLetterCipher.decrypt(inputFile);
      outputFile = path.join(path.dirname(file), path.basename(file, '.enc'));
    }
  } else if (charset === 'ln') {
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
}
