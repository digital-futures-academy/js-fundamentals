const { charSet1 } = require("../data/charSets");

class LetterNumber {
    constructor(charSet) {
        this.charDict = LetterNumber.parseCharSet(charSet);
    }

    static parseCharSet(charSet) {
        return charSet.split("\n").reduce((acc, curr) => {
            const pairSplit = curr.split(", ");
            acc[pairSplit[0]] = pairSplit[1];
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

const letterNumber = new LetterNumber(charSet1);

console.log(letterNumber.encrypt("a", 1));
console.log(letterNumber.encrypt("Ed", 4));
console.log(letterNumber.encrypt("Hi, Ed!", 302));