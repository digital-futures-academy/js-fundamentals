// ### Requirements

// We should be able to speed up encoding and decoding messages if we can run a program directly from the command line!

// The command should take 3 arguments[cipher][method][file] and optionally take a[key]

// ##### Option 1
// Running a script that will encrypt the text in `example.txt` using a letter - letter cipher might look like this:
// ```sh
// $ ./cipher.js ll enc example.txt
// ```

// ##### Option 2
// Using an executable command for a letter - number cipher might look like this:
// ```sh
// $ cipher ln enc example.txt 104
// ```

// ### Acceptance Criteria

//     - The result of encryption for a file`example.txt` should create a new file named `example.txt.enc` with the ciphertext
//         - The result of decryption for a file`example.txt.enc` should create a new file named `example.txt` with the plaintext

const letter2numberKey = {
    ' ': '1', 'a': '2', 'b': '3', 'c': '4', 'd': '5', 'e': '6', 'f': '7', 'g': '8', 'h': '9', 'i': '10', 'j': '11', 'k': '12',
    'l': '13', 'm': '14', 'n': '15', 'o': '16', 'p': '17', 'q': '18', 'r': '19', 's': '20', 't': '21', 'u': '22', 'v': '23',
    'w': '24', 'x': '25', 'y': '26', 'z': '27', 'A': '28', 'B': '29', 'C': '30', 'D': '31', 'E': '32', 'F': '33', 'G': '34',
    'H': '35', 'I': '36', 'J': '37', 'K': '38', 'L': '39', 'M': '40', 'N': '41', 'O': '42', 'P': '43', 'Q': '44', 'R': '45',
    'S': '46', 'T': '47', 'U': '48', 'V': '49', 'W': '50', 'X': '51', 'Y': '52', 'Z': '53', '!': '54', '@': '55', '£': '56',
    '$': '57', '%': '58', '^': '59', '&': '60', '*': '61', '(': '62', ')': '63', '-': '64', '_': '65', '=': '66', '+': '67',
    '[': '68', ']': '69', '{': '70', '}': '71', ';': '72', ':': '73', "'": '74', '"': '75', "\\": '76', '|': '77', ',': '78',
    '.': '79', '<': '80', '>': '81', '/': '82', '?': '83', '`': '84', '~': '85', '§': '86', '±': '87', '1': '88', '2': '89',
    '3': '90', '4': '91', '5': '92', '6': '93', '7': '94', '8': '95', '9': '96', '0': '97'
}

const letter2letterKey = {
    " ": "m", "a": "X", "b": "p", "c": "M", "d": "*", "e": "D", "f": "3", "g": "£", "h": "§",
    "i": "t", "j": "Y", "k": "y", "l": "7", "m": ".", "n": "w", "o": "!", "p": "%", "q": "g",
    "r": "A", "s": "u", "t": "2", "u": "J", "v": "9", "w": "_", "x": "@", "y": "[", "z": "L",
    "A": "h", "B": "q", "C": "0", "D": "G", "E": "j", "F": "^", "G": "Z", "H": "]", "I": "I",
    "J": "|", "K": ">", "L": "B", "M": "c", "N": "i", "O": "e", "P": ";", "Q": "~", "R": ":",
    "S": "P", "T": "±", "U": "k", "V": "S", "W": "&", "X": "+", "Y": "l", "Z": "a", "!": " ",
    "@": "R", "£": ",", "$": "}", "%": "n", "^": "z", "&": "F", "*": "8", "(": "C", ")": "-",
    "-": "?", "_": "x", "=": "5", "+": "U", "[": "K", "]": "v", "{": "=", "}": "<", ";": "1",
    ":": "d", "'": "{", '"': "N", '\\': "O", "|": "b", ",": "$", ".": "Q", "<": "H", ">": "(",
    "/": "\\", "?": "4", "`": ")", "~": "s", "§": "6", "±": "V", "1": "o", "2": "W", "3": '"',
    "4": "E", "5": "'", "6": "r", "7": "/", "8": "`", "9": "f", "0": "T"
}

class Cipher {
    constructor(encryptionKey) {
        this.encryptionKey = encryptionKey;
    }

    getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }
}

class LetterNumber extends Cipher {

    encrypt(message, offset) {

        let encryptedMessage = '';

        for (let i = 0; i < message.length; i++) {

            let cipherText = Number(this.encryptionKey[message[i]]) + offset;
            cipherText = (cipherText % 100).toString();

            if (cipherText.length < 2) {
                cipherText = '0' + cipherText;
            }

            encryptedMessage += cipherText;
        }
        return encryptedMessage;
    }

    decrypt(message, offset) {

        let decryptedMessage = '';

        for (let i = 0; i < message.length; i += 2) {

            let cipherText = (Number(message[i] + message[i + 1]) - offset) % 100;

            if (cipherText < 0) { cipherText += 100; }

            cipherText = this.getKeyByValue(this.encryptionKey, cipherText.toString());

            decryptedMessage += cipherText;
        }

        return decryptedMessage;
    }
}

class LetterLetter extends Cipher {

    encrypt(message) {

        let encryptedMessage = '';

        for (let i = 0; i < message.length; i++) {

            let cipherText = this.encryptionKey[message[i]];

            encryptedMessage += cipherText;
        }
        return encryptedMessage;
    }

    decrypt(message) {

        let decryptedMessage = '';

        for (let i = 0; i < message.length; i++) {

            let cipherText = (message[i] + message[i + 1]);
            cipherText = this.getKeyByValue(this.encryptionKey, message[i]);

            decryptedMessage += cipherText;
        }

        return decryptedMessage;
    }
}

const process = require('process');
const fs = require('fs');

const cipherInputs = ['ln', 'll'];
const methodInputs = ['enc', 'dec'];

const args = process.argv.slice(2);

let cipherInput = args[0];
let methodInput = args[1];
let file = args[2];
let key = 0;

if (args[3]) {
    key = Number(args[3]);
}

let cipher;
let output;
let message = fs.readFileSync(file).toString();


if (cipherInput === 'ln') {
    cipher = new LetterNumber(letter2numberKey);
    if (methodInput === 'enc') {

        output = cipher.encrypt(message, key);
        console.log(output);

        let outputPath = args[2] + '.' + args[1];

        fs.writeFile(outputPath, output, err => {
            if (err) {
                console.error(err);
                return
            }
            console.log('Message written in file.');
        })

    } else if (methodInput === 'dec') {

        output = cipher.decrypt(message, key)
        console.log(output);

        let outputPath = args[2].slice(0, -4);

        fs.writeFile(outputPath, output, err => {
            if (err) {
                console.error(err);
                return
            }
            console.log('Message written in new file.');
        })

    } else {
        console.log('Must use either enc, or dec to specify which method to use on message.')
    }
} else {
    cipher = new LetterLetter(letter2letterKey);
    if (methodInput === 'enc') {
        output = cipher.encrypt(message)
        console.log(output)

        let outputPath = args[2] + '.' + args[1];

        fs.writeFile(outputPath, output, err => {
            if (err) {
                console.error(err);
                return
            }
            console.log('Message written in new file.');
        })

    } else if (methodInput === 'dec') {
        output = cipher.decrypt(message)
        console.log(output);
        let outputPath = args[2].slice(0, -4);

        fs.writeFile(outputPath, output, err => {
            if (err) {
                console.error(err);
                return
            }
            console.log('Message written in file.');
        })
    } else {
        console.log('Must use either enc, or dec to specify which method to use on message.')
    }
}

