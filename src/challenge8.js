const fs = require('fs');

class LetterNumber {
    constructor() { }

    addKeyValue = (key, value) => this[key] = value;

    // If the 'key' is in the class, return the value, otherwise return the key
    findKey = key => this[key] ? this[key] : key;

    findValue(value) {
        for (const key in this) {
            if (this[key] == value) {
                return key;
            }
        }
        return null;
    }

    encryptCheckValue(value) {
        while (value > 99) {
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

    decrypt(string, key) {
        let decrypted = '';
        for (let i = 0; i < string.length; i += 2) {
            let num = parseInt(string[i] + string[i + 1]) - key;
            while (num < 0) {
                num += 99;
            }
            decrypted += this.findValue(num);
        }
        return decrypted;
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

    const plaintext = "hello, world";
    const key = 5;

    console.log(plaintext === letterNumber.decrypt(letterNumber.encrypt(plaintext, key), key));
})

// Take txt file and insert data into a table
function insertIntoClass(letterNumber, text) {
    // Split the text into rows
    const rows = text.toString().split('\n');

    // Assuming the first row contains headers
    const headers = rows[0].split(', ');

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