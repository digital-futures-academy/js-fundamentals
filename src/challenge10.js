const { charSet1, charSet2 } = require("../data/charSets");
const fs = require("fs");

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

// Script
// Run with "node src/challenge10 ...args"

const [cipher, method, file, _key] = process.argv.slice(2);

const ciphers = ["ll", "ln"];
const methods = ["enc", "dec"];
const key = parseInt(_key);

const isNan = (val) => val !== val;

if (!ciphers.includes(cipher)) throw new Error(`Expected ${cipher} to be one of: ${ciphers.join(", ")}.`);
if (!methods.includes(method)) throw new Error(`Expected ${method} to be one of: ${methods.join(", ")}.`);
if (!file) throw new Error("No input file was provided.");
if (_key && isNan(key)) throw new Error(`Expected ${key} to be a number.`);

const encrypter = {
    ln: () => new LetterNumber(charSet1),
    ll: () => new LetterLetter(charSet2)
}[cipher]();

console.log("Reading file...");

fs.readFile(`${process.cwd()}/${file}`, "utf-8", (err, data) => {
    if (err) throw err;

    console.log(method.charAt(0).toUpperCase() + method.slice(1) + "rypting file...");

    const result = {
        enc: () => encrypter.encrypt(data, key || 0),
        dec: () => encrypter.decrypt(data, key || 0)
    }[method]();

    const path = file.split(".")[0] + (method === "enc" ? ".enc" : "") + ".txt";

    console.log("Writing file...");

    fs.writeFile(`${process.cwd()}/${path}`, result, "utf-8", (err) => {
        if (err) throw err;

        console.log("Process complete.");
    })
});