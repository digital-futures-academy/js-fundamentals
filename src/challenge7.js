class LetterNumber {
    constructor(str, n) {
        this.str = str;
        this.n = n;
    }
    twoDigit(number) {
        let modulo = number % 100;
        return modulo.toString().padStart(2, '0');
    }
    encrypt() {
        const characters = ` abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@£$%^&*()-_=+[]{};:\'"\\|,.<>/?\`~§±1234567890`;
        let encryptedStr = "";
        for (let i = 0; i < this.str.length; ++i) {
            encryptedStr += this.twoDigit(characters.indexOf(this.str[i]) + 1 + this.n);
        }
        return encryptedStr;
    };
};
let letterNumber = new LetterNumber("Hi, Ed!", 302);
console.log(letterNumber.encrypt()); //prints 37128003340756