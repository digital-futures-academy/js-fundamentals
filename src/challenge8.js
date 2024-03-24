class LetterNumber {
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
    decrypt(encryption, key) {
        function splitStringWithoutRepeating(inputString) {
            const usedChars = new Set();
            const outputArray = [];
            for (let i = 0; i < inputString.length - 1; i += 2) {
                const currentPair = inputString.slice(i, i + 2);
                if (!usedChars.has(currentPair)) {
                    outputArray.push(currentPair);
                    usedChars.add(currentPair);
                }
            }
            return outputArray;
        }
        let decryption = '';
        for (let i = 0; i < byTwos.length; ++i) {
            decryption += this.characters[byTwos[i]];
        }
        return decryption;
    }
};
const letterNumber = new LetterNumber();
console.log(letterNumber.encrypt("Hi, Ed!", 0));
console.log(letterNumber.decrypt(35107801320554, 0))