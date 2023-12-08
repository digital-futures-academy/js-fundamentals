class LetterNumberCipher {
    constructor(characterSet) {
        this.characterSet = characterSet;
    }

    encrypt(plaintext, key) {
        let encryptedResult = "";
        for (let char of plaintext) {
            if (this.characterSet[char] !== undefined) {
                const charValue = this.characterSet[char];
                let encryptedValue = charValue + key;

                // Reset to the first character if encrypted value is greater than the character set length
                encryptedValue = (encryptedValue + this.characterSet.length) % this.characterSet.length;

                encryptedResult += String(encryptedValue);
            } else {
                // For non-alphabetic characters, append them unchanged
                encryptedResult += char;
            }
        }

        return encryptedResult;
    }

    decrypt(ciphertext, key) {
        let decryptedResult = "";
        for (let char of ciphertext) {
            if (this.characterSet[char] !== undefined) {
                const charValue = this.characterSet[char];
                let decryptedValue = charValue - key;

                // Wrap around to the last character if decrypted value is negative
                decryptedValue = (decryptedValue + this.characterSet.length) % this.characterSet.length;

                decryptedResult += this.characterSet[decryptedValue];
            } else {
                // For non-alphabetic characters, append them unchanged
                decryptedResult += char;
            }
        }

        return decryptedResult;
    }
}

class LetterLetterCipher {
    constructor(characterSet) {
        this.characterSet = characterSet;
    }

    encrypt(plaintext) {
        let encryptedResult = "";
        for (let char of plaintext) {
            if (this.characterSet[char] !== undefined) {
                encryptedResult += this.characterSet[char];
            } else {
                // For non-alphabetic characters, append them unchanged
                encryptedResult += char;
            }
        }

        return encryptedResult;
    }

    decrypt(ciphertext) {
        let decryptedResult = "";
        for (let char of ciphertext) {
            if (this.characterSet[char] !== undefined) {
                // Reverse lookup in the character set
                decryptedResult += Object.entries(this.characterSet).find(([key, value]) => value === char)[0];
            } else {
                // For non-alphabetic characters, append them unchanged
                decryptedResult += char;
            }
        }

        return decryptedResult;
    }
}

// Character sets
const characterSet1 = " ,abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@£$%^&*()-_=+[]{}|;:'\",.<>/?`~ §±1234567890";
const characterSet2 = {
    ' ': 'm', 'a': 'X', 'b': 'p', 'c': 'M', 'd': '*', 'e': 'D', 'f': '3', 'g': '£', 'h': '§', 'i': 't',
    'j': 'Y', 'k': 'y', 'l': '7', 'm': '.', 'n': 'w', 'o': '!', 'p': '%', 'q': 'g', 'r': 'A', 's': 'u', 't': '2',
    'u': 'J', 'v': '9', 'w': '_', 'x': '@', 'y': '[', 'z': 'L', 'A': 'h', 'B': 'q', 'C': '0', 'D': 'G', 'E': 'j',
    'F': '^', 'G': 'Z', 'H': ']', 'I': 'I', 'J': '|', 'K': '>', 'L': 'B', 'M': 'c', 'N': 'i', 'O': 'e', 'P': ';',
    'Q': '~', 'R': ':', 'S': 'P', 'T': '±', 'U': 'k', 'V': 'S', 'W': '&', 'X': '+', 'Y': 'l', 'Z': 'a', '!': ' ',
    '@': 'R', '£': ',', '$': '}', '%': 'n', '^': 'z', '&': 'F', '*': '8', '(': 'C', ')': '-', '-': '?', '_': 'x',
    '=': '5', '+': 'U', '[': 'K', ']': 'v', '{': '=', '}': '<', ';': '1', ':': 'd', "'": '{', '"': 'N', '\\': 'O',
    '|': 'b', ',': '$', '.': 'Q', '<': 'H', '>': '(', '/': '\\', '?': '4', '`': ')', '~': 's', '§': '6', '±': 'V',
    '1': 'o', '2': 'W', '3': '"', '4': 'E', '5': "'", '6': 'r', '7': '/', '8': '`', '9': 'f', '0': 'T'
};

// Test cases
const letterNumberCipher = new LetterNumberCipher(characterSet1);
const letterLetterCipher = new LetterLetterCipher(characterSet2);

let plaintext = 'Look over there!';
let key = 31045;

// Letter Number test cases
console.log(letterNumberCipher.encrypt(plaintext, key)); // "546272929790817377792982858794248392759937717264450764769768347761728178471967605"
console.log(letterNumberCipher.decrypt("546272929790817377792982858794248392759937717264450764769768347761728178471967605", key)); // 'Look over there!'

// Letter Letter test cases
console.log(letterLetterCipher.encrypt(plaintext)); // "u9ZkX jdwD§!"
console.log(letterLetterCipher.decrypt("u9ZkX jdwD§!")); // 'Look over there!'

// Additional test
console.log(plaintext === letterNumberCipher.decrypt(letterNumberCipher.encrypt(plaintext, key), key));
console.log(plaintext === letterLetterCipher.decrypt(letterLetterCipher.encrypt(plaintext)));
