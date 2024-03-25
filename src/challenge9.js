class LetterNumberCipher {
    characters = ` abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@£$%^&*()-_=+[]{};:\'"\\|,.<>/?\`~§±1234567890`;
    twoDigit(number) {
        const modulo = number % 100;
        return modulo.toString().padStart(2, '0');
    }
    encrypt(str, n) {
        let encryptedStr = '';
        for (let i = 0; i < str.length; ++i) {
            encryptedStr += this.twoDigit(this.characters.indexOf(str[i]) + 1 + n);
        }
        return encryptedStr;
    }
    splitStringIntoPairs(inputString) {
        return inputString.toString().match(/.{1,2}/g);
    }
    decrypt(encryption, key) {
        const modulo = key % 100;
        const byTwos = this.splitStringIntoPairs(encryption);
        let decryption = '';
        for (let i = 0; i < byTwos.length; ++i) {
            decryption += this.characters[(100 + (byTwos[i] - modulo - 1)) % 100];
        }
        return decryption;
    }
};
const letterNumberCipher = new LetterNumberCipher();
let plaintext = 'Look over there!'
let key = 31045

// Letter Number test cases
console.log(letterNumberCipher.encrypt(plaintext, key)) // "84616157466168516446665451645199"
console.log(letterNumberCipher.decrypt("84616157466168516446665451645199", key)) // 'Look over there!'
