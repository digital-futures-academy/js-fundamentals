const { charSet1, charSet2 } = require("../data/charSets");

class Encrypter {
    constructor(charSet) {
        this.charDict = LetterNumber.parseCharSet(charSet);
    }

    static parseCharSet(charSet) {
        return charSet.split("\n").reduce((acc, curr) => {
            const pairSplit = curr.split(", ");
            acc.byChar[pairSplit[0]] = pairSplit[1];
            acc.byVal[pairSplit[1]] = pairSplit[0];
            return acc;
        }, {byChar: {}, byVal: {}});
    }
}

class LetterNumber extends Encrypter {
    encrypt(str, offset) {
        return str.split("").reduce((acc, curr) => {
            const val = this.charDict.byChar[curr];
            if (!val) return acc;
            const encoded = (v => v > 99 ? v % 100 : v)(parseInt(val) + offset);
            const minTwo = encoded < 10 ? `0${encoded}` : `${encoded}`;
            return acc + minTwo;
        }, "");
    }

    decrypt(str, offset) {
        let out = "";

        for (let i=2; i<=str.length; i+=2) {
            const encoded = parseInt(str.slice(i-2, i));
            const decoded = (v => v > 99 ? `${v % 100}` : `${v}`)(100 - ((offset - encoded) % 100));
            out += this.charDict.byVal[decoded] || "";
        }

        return out;
    }
}

class LetterLetter extends Encrypter {
    encrypt(str) {
        return str.split("").reduce((acc, curr) => acc + (this.charDict.byChar[curr] || ""), "");
    }

    decrypt(str) {
        return str.split("").reduce((acc, curr) => acc + (this.charDict.byVal[curr] || ""), "");
    }
}

const letterNumberCipher = new LetterNumber(charSet1);
const letterLetterCipher = new LetterLetter(charSet2);

let plaintext = 'Look over there!'
let key = 31045

// Letter Number test cases
console.log(letterNumberCipher.encrypt(plaintext, key)) // "84616157466168516446665451645199"
console.log(letterNumberCipher.decrypt("84616157466168516446665451645199", key)) // 'Look over there!'

// Letter Letter test cases
console.log(letterLetterCipher.encrypt(plaintext)) // "B!!ym!9DAm2§DAD "
console.log(letterLetterCipher.decrypt("B!!ym!9DAm2§DAD ")) // 'Look over there!'