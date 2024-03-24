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
    splitStringIntoPairs(inputString) {
        return inputString.toString().match(/.{1,2}/g);
    }
    decrypt(encryption, key) {
        const modulo = key % 100;
        const byTwos = this.splitStringIntoPairs(encryption);
        let decryption = '';
        for (let i = 0; i < byTwos.length; ++i) {
            decryption += this.characters[Math.abs(byTwos[i] - modulo) - 1];
        }
        return decryption;
    }
};
const letterNumber = new LetterNumber();
console.log(letterNumber.encrypt("Hi, Ed!", 0));
console.log(letterNumber.splitStringIntoPairs('0681497203762572077292808186837291878577878677459172878672928772928081917275818880779025'))
console.log(letterNumber.decrypt('0681497203762572077292808186837291878577878677459172878672928772928081917275818880779025', 4771));