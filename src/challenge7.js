const fs = require("fs");
const path = require("path");

class LetterNumber {
    constructor(charSet) {
        this.charDict = LetterNumber.parseCharSet(charSet);
    }

    static parseCharSet(charSet) {
        return charSet.split("\n").slice(1).reduce((acc, curr) => {
            const pairSplit = curr.split(", ");
            acc[pairSplit[0]] = pairSplit[1].replace("\r", "");
            return acc;
        }, {});
    }

    encrypt(str, offset) {
        return str.split("").reduce((acc, curr) => {
            if (!this.charDict[curr]) return acc;
            const adjusted = (i => i > 99 ? i % 100 : i)(parseInt(this.charDict[curr]) + offset);
            const minTwo = adjusted < 10 ? `0${adjusted}` : `${adjusted}`;
            return acc + minTwo;
        }, "")
    }
}

fs.readFile(path.resolve(process.cwd(), "data", "charSet1.txt"), "utf-8", (err, data) => {
    const letterNumber = new LetterNumber(data);

    console.log(letterNumber.encrypt("a", 1));
    console.log(letterNumber.encrypt("Ed", 4));
    console.log(letterNumber.encrypt("Hi, Ed!", 302));
});

