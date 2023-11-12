/*
    On the given file 'challenges/challenge7-aydan.md'
    'Hi, Ed!', 302 encrypts to 37128003340756

    However, by just checking the first letter (H = 35)
    if we had 302 to 35 and subtract 99 till we get 99 or less we obtain:
    (302 + 35) - 99 - 99 - 99 = 40

    My encrypted version: 40158306371059
*/

const fs = require('fs');

class LetterNumber {
    constructor() { }

    addKeyValue = (key, value) => this[key] = value;

    // If the 'key' is in the class, return the value, otherwise return the key
    findKey = key => this[key] ? this[key] : key;

    encryptCheckValue(value) {
        while (value > 99) {
            console.log(value)
            value -= 99;
        }
        return value;
    }

    encrypt(string, change) {
        let encrypted = '';
        for (let i = 0; i < string.length; i++) {
            let value = parseInt(this.findKey(string[i])) + change;
            value = this.encryptCheckValue(value);
            if (value < 10) {
                value = 0 + value.toString();
            }
            encrypted += value.toString();
        }
        return encrypted;
    }
}

let letterNumber = new LetterNumber();

// Read txt file
fs.readFile('src/character_set.txt', (err, data) => {
    // Check that file exists
    if (err) {
        console.log(err);
        return;
    }

    // Insert data into table
    letterNumber = insertIntoClass(letterNumber, data);

    const plaintext = "Hi, Ed!";
    let cyphertext = letterNumber.encrypt(plaintext, 302);
    console.log(cyphertext);
})

// Take txt file and insert data into a table
function insertIntoClass(letterNumber, text) {
    // Split the text into rows
    const rows = text.toString().split('\n');

    // Assuming the first row contains headers
    const headers = rows[0].split(', ');
    const data = [];

    // For each row, take the first word to use as a 'key' and the second one to use as a value
    for (let i = 1; i < rows.length; i++) {
        const row = rows[i].split(', ');
        if (row.length === headers.length) {
            const changeRow = parseInt(row[1].replace('/r', '')).toString();
            letterNumber.addKeyValue(row[0], changeRow);
        }
    }

    return letterNumber;
}