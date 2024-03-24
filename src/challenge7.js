class LetterNumber {
    twoDigit(number) {
        const modulo = number % 100;
        return modulo.toString().padStart(2, '0');
    }
    encrypt(str, n) {
        const characters = ` abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@£$%^&*()-_=+[]{};:\'"\\|,.<>/?\`~§±1234567890`;
        let encryptedStr = '';
        for (let i = 0; i < str.length; ++i) {
            encryptedStr += this.twoDigit(characters.indexOf(str[i]) + 1 + n);
        }
        return encryptedStr;
    };
};
const letterNumber = new LetterNumber();
console.log(letterNumber.encrypt("a", 1)); //prints 03
console.log(letterNumber.encrypt("Ed", 4)); //prints 3609
console.log(letterNumber.encrypt("Hi, Ed!", 302)); //prints 37128003340756