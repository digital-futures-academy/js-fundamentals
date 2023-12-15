
class LetterNumber {
    static LETTER_TO_LETTER_CYPHER = {
        " ": "m",
        "a": "X",
        "b": "p",
        "c": "M",
        "d": "*",
        "e": "D",
        "f": "3",
        "g": "£",
        "h": "§",
        "i": "t",
        "j": "Y",
        "k": "y",
        "l": "7",
        "m": ".",
        "n": "w",
        "o": "!",
        "p": "%",
        "q": "g",
        "r": "A",
        "s": "u",
        "t": "2",
        "u": "J",
        "v": "9",
        "w": "_",
        "x": "@",
        "y": "[",
        "z": "L",
        "A": "h",
        "B": "q",
        "C": "0",
        "D": "G",
        "E": "j",
        "F": "^",
        "G": "Z",
        "H": "]",
        "I": "I",
        "J": "|",
        "K": ">",
        "L": "B",
        "M": "c",
        "N": "i",
        "O": "e",
        "P": ";",
        "Q": "~",
        "R": ":",
        "S": "P",
        "T": "±",
        "U": "k",
        "V": "S",
        "W": "&",
        "X": "+",
        "Y": "l",
        "Z": "a",
        "!": " ",
        "@": "R",
        "£": ",",
        "$": "}",
        "%": "n",
        "^": "z",
        "&": "F",
        "*": "8",
        "(": "C",
        ")": "-",
        "-": "?",
        "_": "x",
        "=": "5",
        "+": "U",
        "[": "K",
        "]": "v",
        "{": "=",
        "}": "<",
        ";": "1",
        ":": "d",
        "'": "{",
        "\"": "N",
        "\\": "O",
        "|": "b",
        "\,": "$",
        ".": "Q",
        "<": "H",
        ">": "(",
        "/": "\\",
        "?": "4",
        "`": ")",
        "~": "s",
        "§": "6",
        "±": "V",
        "1": "o",
        "2": "W",
        "3": "\"",
        "4": "E",
        "5": "'",
        "6": "r",
        "7": "/",
        "8": "`",
        "9": "f",
        "0": "T"
    };

    static LETTER_TO_NUMBER_CYPHER = {
        " ": 1,
        "a": 2,
        "b": 3,
        "c": 4,
        "d": 5,
        "e": 6,
        "f": 7,
        "g": 8,
        "h": 9,
        "i": 10,
        "j": 11,
        "k": 12,
        "l": 13,
        "m": 14,
        "n": 15,
        "o": 16,
        "p": 17,
        "q": 18,
        "r": 19,
        "s": 20,
        "t": 21,
        "u": 22,
        "v": 23,
        "w": 24,
        "x": 25,
        "y": 26,
        "z": 27,
        "A": 28,
        "B": 29,
        "C": 30,
        "D": 31,
        "E": 32,
        "F": 33,
        "G": 34,
        "H": 35,
        "I": 36,
        "J": 37,
        "K": 38,
        "L": 39,
        "M": 40,
        "N": 41,
        "O": 42,
        "P": 43,
        "Q": 44,
        "R": 45,
        "S": 46,
        "T": 47,
        "U": 48,
        "V": 49,
        "W": 50,
        "X": 51,
        "Y": 52,
        "Z": 53,
        "!": 54,
        "@": 55,
        "£": 56,
        "$": 57,
        "%": 58,
        "^": 59,
        "&": 60,
        "*": 61,
        "(": 62,
        ")": 63,
        "-": 64,
        "_": 65,
        "=": 66,
        "+": 67,
        "[": 68,
        "]": 69,
        "{": 70,
        "}": 71,
        ";": 72,
        ":": 73,
        "\'": 74,
        "\"": 75,
        "\\": 76,
        "|": 77,
        ",": 78,
        ".": 79,
        "<": 80,
        ">": 81,
        "/": 82,
        "?": 83,
        "`": 84,
        "~": 85,
        "§": 86,
        "±": 87,
        "1": 88,
        "2": 89,
        "3": 90,
        "4": 91,
        "5": 92,
        "6": 93,
        "7": 94,
        "8": 95,
        "9": 96,
        "0": 97
    };

    static DEFAULT_SHIFT_LIMIT = 99;

    static getKeyByValue(dict, value) {
        for (let key in dict) {
            if (dict.hasOwnProperty(key)) {
                if (dict[key] === value) {
                    return key;
                }
            }
        }
    }

    constructor(cypherTable, shiftLimit) {
        this.shiftLimit = (shiftLimit) ? shiftLimit : LetterNumber.DEFAULT_SHIFT_LIMIT;
        this.cypherTable = (cypherTable != null) ? cypherTable : LetterNumber.LETTER_TO_NUMBER_CYPHER;
    }

    set shiftLimit(shiftLimit) {
        this._shiftLimit = shiftLimit;
    }

    get shiftLimit() {
        return (this._shiftLimit) ? this._shiftLimit : LetterNumber.DEFAULT_SHIFT_LIMIT;
    }

    set cypherTable(cypherTable) {
        this._cypherTable = cypherTable;
    }

    get cypherTable() {
        return (this._cypherTable) ? this._cypherTable : LetterNumber.LETTER_TO_NUMBER_CYPHER;
    }

    encrypt(plainText, shiftNumber) {
        if (shiftNumber) {
            this.cypherTable = LetterNumber.LETTER_TO_NUMBER_CYPHER;
            return this.encryptLetterToNumber(plainText, shiftNumber);
        }
        this.cypherTable = LetterNumber.LETTER_TO_LETTER_CYPHER;
        return this.encryptLetterToLetter(plainText);
    }

    decrypt(plainText, shiftNumber) {
        if (shiftNumber) {
            this.cypherTable = LetterNumber.LETTER_TO_NUMBER_CYPHER;
            return this.decryptNumberToLetter(plainText, shiftNumber)
        };
        this.cypherTable = LetterNumber.LETTER_TO_LETTER_CYPHER;
        return this.decryptLetterToLetter(plainText);
    }

    encryptLetterToLetter(plainText) {
        const plainTextArray = [...plainText];
        const encryptedArray = [];
        plainTextArray.forEach(letter => encryptedArray.push(this.cypherTable[letter]));
        return encryptedArray.join("");
    }

    decryptLetterToLetter(encryptedText) {
        const encryptedArray = [...encryptedText];

        const plainTextArray = [];
        encryptedArray.forEach(letter =>
            plainTextArray.push(LetterNumber.getKeyByValue(this.cypherTable, letter)));
        return plainTextArray.join("");
    }

    encryptLetterToNumber(plainText, shiftNumber) {
        let toEncodeArray = [...plainText];
        const encodedArray = [];
        toEncodeArray.forEach(element => {
            let num = this.shiftByNumber(element, shiftNumber);
            if (num < 10) num = "0" + num;
            encodedArray.push(num);
        });
        return encodedArray.join("");
    }

    decryptNumberToLetter(encryptedString, shiftNumber) {
        const encodingPattern = /(\d\d)/g;
        const decodedArray = [];
        let x;

        while ((x = encodingPattern.exec(encryptedString)) != null) {
            // "01-09" will fail to be parsed as wrongly formatted octal numbers which we don't want. Strip leading 0 to make it into a valid integer.
            let s = (x[0].startsWith("0")) ? x[0].substring(2, 1) : x[0];
            decodedArray.push(LetterNumber.getKeyByValue(this.cypherTable, this.shiftByNumber(+s, shiftNumber, false)));
        }

        return decodedArray.join("");
    }

    shiftByNumber(valueToShift, shiftNumber, direction = true) {
        let forward = direction;
        let originalNum;

        if (forward) {
            // In this case, we are dealing with a character and we need its number so we can 
            // shift the number by the encryption key.
            originalNum = this.cypherTable[valueToShift];
        } else {
            // In thie case, we are decrypting from numbers so we already have a number and 
            // don't need to look it up in the cypherTable.
            originalNum = valueToShift;
        }


        let result = originalNum;

        for (let i = 1; i <= shiftNumber; i++) {
            if (forward) {
                // encryption direction.
                result++;
                if (result > this.shiftLimit) result = 0;
            } else {
                // decryption direction.
                result--;
                if (result < 0) result = 99;
            }
        }

        return result;
    }
}

// Program logic.

const DEFAULT_ENCRYPTION_KEY = 4771;

const CyppherTypes = {
    ln: "Letter-to-number",
    ll: "Letter-to-letter"
}

const MethodTypes = {
    dec: "Decrypt",
    enc: "Encrypt"
}

function usage() {
    let s = `Usage: ${process.argv[0]}${process.argv[1]}: cypher method file [key]`;
}

// 'Main' program.

const fs = require('fs');
/**
 * Reads the UTF-8 encoded contents of a file and returns them converted 
 * to a string.
 * @param {*} fileName 
 * @returns 
 */
function readAFile(fileName) {
    if(!fs.existsSync(fileName)) throw new Error(`File ${fileName} does not exist.`);

    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            console.log(`Reading file ${fileName}`);

            if (err) {
                reject(`Failed to read data from ${fileName}`);
            } else {
                resolve(data.toString("utf-8"));
            }
        });
    });
}

/**
 * Writes a string to a file.
 * @param {*} file 
 * @param {*} contents 
 */
function writeAFile(file, contents) {
    fs.writeFile(file, contents, (err) => {
        if (err) throw err;
    });
}

function checkCommandLine(args) {
    if (!args || args.length < 3 || args.length > 4) {
        throw new Error(`Incorrect number of args. ${usage()}`);
    }

    const cipher = args[0];
    const method = args[1];
    const file = args[2];
    let key = args[3];

    if (!CyppherTypes[cipher] || !MethodTypes[method]) {
        throw new Error(`Invalid argument(s). ${usage()}`);
    }

    if (cipher === "ln" && !key) {
        key = args[3] ? args[3] : DEFAULT_ENCRYPTION_KEY;
        console.log(`WARNING: cipher type ln (${CyppherTypes["ln"]}) requested with no encryption key. Using default encryption key [${key}] instead.`);
    }

    console.log(`Using cypher=${cipher} and method=${method} to process file ${file} and encryption key [${key}].`);
    return args;
}

async function processFile(cipher, method, fileName, encryptionKey) {
    const letterNumber = new LetterNumber();

    let s;

    try{
        s = await readAFile(fileName);
    } catch (err) { 
        throw err 
    };

    console.log(`read data [${s}] from ${fileName}.`);
    if (!s) throw new Error(`Got no data from ${fileName}.`);

    let fileContents = "";

    if (cipher === "ll") {
        if (method === "enc") {
            console.log(`Encrypting data [${s}] using letter-to-letter encryption...`);
            fileContents = letterNumber.encrypt(s);
        }
        if (method === "dec") {
            console.log(`Decrypting data [${s}] using letter-to-letter decryption...`);
            fileContents = letterNumber.decrypt(s);
        }
    }

    if (cipher === "ln") {
        if (method === "enc") {
            console.log(`Encrypting data [${s}] using letter-to-number encryption...`);
            fileContents = letterNumber.encrypt(s, encryptionKey);
        }
        if (method === "dec") {
            console.log(`Decrypting data [${s}] using number-to-letter decryption...`);
            fileContents = letterNumber.decrypt(s, encryptionKey);
        }
    }

    if (method === "dec") fileName = fileName.replace(".enc", "");
    if (method === "enc") fileName = fileName + ".enc";
    writeAFile(fileName, fileContents);
}

// Check the command line. We must have at least three arguments and no more than 4.
const args = checkCommandLine(process.argv.slice(2));

const cipher = args[0];
const method = args[1];
const fileName = args[2];
const encryptionKey = args[3] ? args[3] : DEFAULT_ENCRYPTION_KEY;

processFile(cipher, method, fileName, encryptionKey);