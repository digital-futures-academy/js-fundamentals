// #### Requirements
// I want to be able to add a simple key to my encryption that offsets the table value by the given amount.

// Your implementation should
//     - Be well - encapsulated using a `class` called`LetterNumber`
//         - Use this[character set](https://gist.github.com/dearshrewdwit/691c71616995ad2430ab309aa9998745)
// - Be agnostic to the actual values - the character values might change

// NB: plaintext = starting string.ciphertext = encrypted string
// NB: Each encrypted plaintext character should never be more than two ciphertext characters.If the evaluation of the encrypted character value is > 99, then reset from 0 and continue adding.Consequently, each encrypted plaintext character should always be two ciphertext characters: if the encrypted plaintext character results in a value of '8'  it should be '08' in ciphertext characters.See below for more test cases.

// ### Acceptance Criteria
//     ```js
// letterNumber.encrypt("a", 1) // "03"
// letterNumber.encrypt("Ed", 4) // "3609"
// letterNumber.encrypt("Hi, Ed!", 302) // "37128003340756"
// ```


// _ * Shout out to AydanAwan from mse - 2103 - a who spotted an off - by - one bug in the original version of this
// challenge!_


const encryptionKey = {
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

class LetterNumber {

    constructor(encryptionKey) {
        this.encryptionKey = encryptionKey;
    }

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
}

const letterNumber = new LetterNumber(encryptionKey)

console.log(letterNumber.encrypt('a', 1));
console.log(letterNumber.encrypt("Ed", 4));
console.log(letterNumber.encrypt("Hi, Ed!", 302));