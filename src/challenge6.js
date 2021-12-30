const fs = require('fs')
const characterSet = fs.readFileSync('character_set.txt', 'utf8');

// split input into array by lines:
const characterPairs = characterSet.split('\n');
// remove heading in table of values:
characterPairs.shift();

// pairs as length 2 arrays:
for (i = 0; i < characterPairs.length; i++) {
    characterPairs[i] = characterPairs[i].split(', ');
}

// create two arrays containing plaintext values and cyphertext values respectively:
const plainValues = [];
const cypherValues = [];
for (pair of characterPairs) {
    plainValues.push(pair[0]);
    cypherValues.push(pair[1]);

    // // This makes all cypher values 2 digits long (as per Challenge 7):
    // if (pair[1].length === 1) {
    //     cypherValues.push("0" + pair[1])
    // } else { cypherValues.push(pair[1]) };
}
// we now have two arrays, with elements at corresponding index denoting the plaintext value and it's cyphertext counterpart

// There may be a better way to process and format this input... but this should work for (most) .txt files of the given format. 

function encrypt(plaintext) {
    // A function to encrypt plain text based on substitution (where table of values previously split into two arrays plainValues and cypherValues).
    let cyphertext = '';
    for (i = 0; i < plaintext.length; i++) {
        let valueIndex = plainValues.indexOf(plaintext[i]);
        //console.log(valueIndex);
        cyphertext += cypherValues[valueIndex];
        //console.log(cyphertext);
    }
    return cyphertext;
}

// Implementation contained in a class as per Challenge 7.
function LetterNumber() {
    // A class to contain the cypher methods.
    this.encrypt = encrypt;
}

const encryptor = new LetterNumber();
const message1 = "E";
const message2 = "d";
const message3 = "Ed";
const message4 = "Hi, Ed!";
const encryptedMessage1 = encryptor.encrypt(message1);
const encryptedMessage2 = encryptor.encrypt(message2);
const encryptedMessage3 = encryptor.encrypt(message3);
const encryptedMessage4 = encryptor.encrypt(message4);

console.log(encryptedMessage1);
console.log(encryptedMessage2);
console.log(encryptedMessage3);
console.log(encryptedMessage4);

// We see that the following test cases pass:
// "E" -> "32"
// "d" -> "5"
// "Ed" -> "325"
// "Hi, Ed!" -> "351078132554"