const fs = require("fs");
const path = require("path");

class LetterNumber {
    constructor(charSet) {
        this.charDict = LetterNumber.parseCharSet(charSet);
    }

    static parseCharSet(charSet) {
        return charSet.split("\n").slice(1).reduce((acc, curr) => {
            const pairSplit = curr.split(", ");
            const char = pairSplit[0];
            const val = pairSplit[1].replace("\r", "");
            acc.byChar[char] = val;
            acc.byVal[val] = char;
            return acc;
        }, {byChar: {}, byVal: {}});
    }

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

fs.readFile(path.resolve(process.cwd(), "data", "charSet1.txt"), "utf-8", (err, data) => {
    const letterNumber = new LetterNumber(data);

    console.log(letterNumber.decrypt("0681497203762572077292808186837291878577878677459172878672928772928081917275818880779025", 4771));
    console.log(letterNumber.decrypt("21774590777279878686737286777776729287727587857772938872958192807273728677957287867750", 4771))
    console.log(letterNumber.decrypt("0772928081868372077280739477728293919272928077729280818679507299728477929277903584779292779072919374919281929392818786727581888077902572107792459172768772819225", 4771))
});