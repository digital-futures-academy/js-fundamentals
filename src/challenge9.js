// #### Requirements

// We have a new requirement! We need to build a letter - letter substitution cipher quickly so we can decrypt the next message that pops into our pocket mysteriously!

//     - NB: Use[characterSet1](https://gist.github.com/dearshrewdwit/691c71616995ad2430ab309aa9998745) for the Letter Number cipher and [characterSet2](https://gist.github.com/dearshrewdwit/5c4f0460066c16d14e512576a446403a) for the Letter Letter cipher
//         - NB: Ciphers should assume a valid character set
//     - NB: Create more test cases to help you develop your program and cover different code paths.

// ### Acceptance Criteria
//         ```js
// let plaintext = 'Look over there!'
// let key = 31045

// // Letter Number test cases
// console.log(letterNumberCipher.encrypt(plaintext, key)) // "84616157466168516446665451645199"
// console.log(letterNumberCipher.decrypt("84616157466168516446665451645199", key)) // 'Look over there!'

// // Letter Letter test cases
// console.log(letterLetterCipher.encrypt(plaintext)) // "B!!ym!9DAm2§DAD "
// console.log(letterLetterCipher.decrypt("B!!ym!9DAm2§DAD ")) // 'Look over there!'

// // another way to test your program
// console.log(plaintext === letterNumberCipher.decrypt(letterNumberCipher.encrypt(plaintext, key), key))
// console.log(plaintext === letterLetterCipher.decrypt(letterLetterCipher.encrypt(plaintext)))
// ```

// ### Mysterious Message in Pocket

//     > ~JtMy m & DmwDD * mXm * tu2AXM2t!w mewMDm[!JmADX * m2§tum.DuuX£D$m3tw * m2§DmM!..Jwt2[mM§XwwD7mwX.D * mNAXw * !.Nm!wmGtuM!A * $mXw * mu§XADmXmAXw * !.m3XM2mAD£XA * tw£mXw[mtwuDM2m ? mpJ2mt2m§Xum2!mpDmXp!J2mtwuDM2u m ^ tw£DAumMA!uuD * m2§tum_t77m * tu2AXM2mXw * mu7!_m * !_wm2§Dm % D! % 7DmMAXMytw£m2§DuDmMt %§DAu

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

const letterNumberCipher = new LetterNumber(letter2numberKey);
const letterLetterCipher = new LetterLetter(letter2letterKey);

let plaintext = 'Look over there!'
let key = 31045

console.log(letterNumberCipher.encrypt(plaintext, key))
console.log(letterNumberCipher.decrypt("84616157466168516446665451645199", key))

console.log(letterLetterCipher.encrypt(plaintext))
console.log(letterLetterCipher.decrypt("B!!ym!9DAm2§DAD "))

console.log(plaintext === letterNumberCipher.decrypt(letterNumberCipher.encrypt(plaintext, key), key))
console.log(plaintext === letterLetterCipher.decrypt(letterLetterCipher.encrypt(plaintext)))