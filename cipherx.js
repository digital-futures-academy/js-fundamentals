import { letterLetterCipher, letterNumberCipher } from './src/challenge10.js';
import fs from 'fs';
import path from 'path';
import { Command, Option } from 'commander';

export default function cipherx() {
  // Command
  const program = new Command();

  program
    .name('cipher')
    .description('A command line tool for encrypting and decrypting files.')
    .version('2.0.0')
    .addOption(
      new Option('-e, --encrypt <method>', 'Encrypt a file with the specified method').choices([
        'll',
        'ln',
      ])
    )
    .addOption(
      new Option('-d, --decrypt <method>', 'Decrypt a file with the specified method').choices([
        'll',
        'ln',
      ])
    )
    .requiredOption('-f, --file <path>', 'Specify the path to the file to be processed')
    .option('-k, --key <number>', 'Key used for the LetterNumber encryption')
    .parse(process.argv);

  // Error Handling
  const options = program.opts();

  if (!options.encrypt && !options.decrypt) {
    console.error('Error: Please specify either -e/--encrypt or -d/--decrypt option.');
    program.help();
  }

  if (!options.file) {
    console.error('Error: Please specify the path to the file using -f/--file option.');
    program.help();
  }

  if (options.key && isNaN(options.key)) {
    console.error('Error: Key must be a number.');
    process.exit(1);
  }

  if (options.encrypt && options.decrypt) {
    console.error('Error: Please choose either encryption or decryption, not both.');
    program.help();
  }

  if (!fs.existsSync(options.file)) {
    console.error('Error: File not found.');
    process.exit(1);
  }

  // Logic
  const inputFile = fs.readFileSync(options.file, 'utf8');

  let outputText = '';
  let outputFile = '';

  if (options.encrypt === 'll') {
    outputText = letterLetterCipher.encrypt(inputFile);
    outputFile = `${options.file}.enc`;
  } else if (options.decrypt === 'll') {
    outputText = letterLetterCipher.decrypt(inputFile);
    outputFile = path.join(path.dirname(options.file), path.basename(options.file, '.enc'));
  } else if (options.encrypt === 'ln') {
    outputText = letterNumberCipher.encrypt(inputFile, Number(options.key));
    outputFile = `${options.file}.enc`;
  } else if (options.decrypt === 'ln') {
    outputText = letterNumberCipher.decrypt(inputFile, Number(options.key));
    outputFile = path.join(path.dirname(options.file), path.basename(options.file, '.enc'));
  }

  fs.writeFileSync(outputFile, outputText);

  console.log(`Encrypted text saved to ${outputFile}`);
}
