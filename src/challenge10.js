const fs = require("fs");
const path = require("path");

class EncrypterBase {
    constructor(charSet) {
        this.charDict = EncrypterBase.parseCharSet(charSet);
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
}

class LetterNumber extends EncrypterBase {
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

class LetterLetter extends EncrypterBase {
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

(async () => {
    const charSet1 = await fs.promises.readFile(path.resolve(process.cwd(), "data", "charSet1.txt"), "utf-8");
    const charSet2 = await fs.promises.readFile(path.resolve(process.cwd(), "data", "charSet2.txt"), "utf-8");

    const encrypter = {
        ln: () => new LetterNumber(charSet1),
        ll: () => new LetterLetter(charSet2)
    }[cipher]();

    console.log("Reading file...");

    const data = await (async () => {
        try {
            return await fs.promises.readFile(path.resolve(process.cwd(), file), "utf-8");
        } catch (err) {
            throw err;
        }
    })();

    console.log(method.charAt(0).toUpperCase() + method.slice(1) + "rypting file...");

    const result = {
        enc: () => encrypter.encrypt(data, key || 0),
        dec: () => encrypter.decrypt(data, key || 0)
    }[method]();

    console.log("Writing file...");

    const dest = file.split(".")[0] + (method === "enc" ? ".enc" : "") + ".txt";

    try {
        await fs.promises.writeFile(path.resolve(process.cwd(), dest), result, "utf-8");
        console.log("Process complete.");
    } catch (err) {
        throw err;
    }
})();