#!/usr/bin/env node

const fs=require('fs').promises;
const Cipher = require('./src/challenge11.js');
const charset = process.argv[2]||"invalid";
const fileName = process.argv[3]||"invalid";
const key = Math.floor(process.argv[4]) || 0;

if(typeof (key) != Number && key < 0) {
    console.log('Invalid key, key must be a positive integer');
    console.log('Usage $ cipher <path/to/dictionaryName.txt> <path/to/file[.txt||.txt.enc]> <optional key[integer]>');
    process.exit(1);
}

if(!charset.endsWith('.txt')) {
    console.log('Invalid dictionaryName extension, use .txt');
    console.log('Usage $ cipher <path/to/dictionaryName.txt> <path/to/file[.txt||.txt.enc]> <optional key[integer]>');
    process.exit(1);
}
if (!fileName.endsWith('.txt') && !fileName.endsWith('.enc')) {
    console.log('Invalid fileName use .txt or .txt.enc'); console.log('Usage $ cipher <path/to/charSetName.txt> <path/to/file[.txt||.txt.enc]> <optional key[integer]>');
     process.exit(1);
}

const validate = async (charset) => {
    console.log(__dirname)
    const validationArray = await fs.readFile(`${__dirname}/src/data/validation.txt`, 'utf-8');
    actualCharSet = await fs.readFile(charset, 'utf-8');
    const charSetArray = actualCharSet.split('\n');

    //test for 97 required chars
    charSetArray.forEach(char => {
        if (!validationArray.includes(char.split(', ')[0])) {
            console.log(`Invalid charset ${charset} (must be a set of 97 unique characters)`);
            console.log('Usage $ cipher <path/to/charSetName.txt> <path/to/file[.txt||.txt.enc]> <optional key[integer]>');
            process.exit(1);
        }
    })
    //test for duplicates
    const uniqueChars = [...new Set(charSetArray.map(char => char.split(', ')[1].toString()))];
    if (uniqueChars.length != 97) {
        console.log(`Invalid charset ${charset} (must contain 97 unique substitutions)`);
        console.log('Usage $ cipher <path/to/charSetName.txt> <path/to/file[.txt||.txt.enc]> <optional key[integer]>');
        process.exit(1);
     
    }
    //test for valid integers, must be between 0 and 99
    if (charSetArray.every((element) => Number.isInteger(+element.split(', ')[1]))) {
        if (!charSetArray.every((element) => +element.split(', ')[1] < 100)) {
            console.log(`Invalid charset ${charset} (must be a number between 0 and 99)`);
            console.log('Usage $ cipher <path/to/charSetName.txt> <path/to/file[.txt||.txt.enc]> <optional key[integer]>');
            process.exit(1);
        }
    }
    //test for valid strings, must be single character
    else if (!charSetArray.every(element => element.split(', ')[1].length === 1)) {
        console.log(`Invalid charset ${charset} (must be a single character)`);
        console.log('Usage $ cipher <path/to/charSetName.txt> <path/to/file[.txt||.txt.enc]> <optional key[integer]>');
        process.exit(1);

    }
}

validate(charset)
    .then(() => {
        console.log('Charset validated');
        const cipher = new Cipher(charset);
        if (fileName.endsWith('.txt')) return cipher.encode(fileName, key);
        else
            return cipher.decode(fileName, key)
    }
)

