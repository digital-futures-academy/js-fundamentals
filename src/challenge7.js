class LetterNumber {
    constructor(str, n) {
        this.str = str;
        this.n = n;
    }
    encrypt() {
        const characters = ` abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@£$%^&*()-_=+[]{};:\'"\\|,.<>/?\`~§±1234567890`;
        let encryptedStr = "";
        for (let i = 0; i < this.str.length; ++i) {
            encryptedStr += characters.indexOf(this.str[i]) + 1 + this.n;
        }
        return encryptedStr;
    };
};
let letterNumber = new LetterNumber("Ed", 4);
console.log(letterNumber)
console.log(letterNumber.encrypt("Ed", 4));