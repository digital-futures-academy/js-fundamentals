
class LetterNumber {
    static DEFAULT_LETTER_TO_LETTER_CYPHER = {
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

    static DEFAULT_CYPHER_TABLE = {
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

    constructor(cypherTable, shiftLimit, cypherType) {
        this.shiftLimit = (shiftLimit) ? shiftLimit : LetterNumber.DEFAULT_SHIFT_LIMIT;
        this.cypherTable = (cypherTable != null) ? cypherTable : LetterNumber.DEFAULT_CYPHER_TABLE;
        this.cypherType = (cypherType) ? cypherType : LetterNumber.DEFAULT_CYPHER_TYPE;
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
        return (this._cypherTable) ? this._cypherTable : LetterNumber.DEFAULT_CYPHER_TABLE;
    }

    encrypt(plainText,shiftNumber){
        if(shiftNumber) return this.encryptLetterToNumber(plainText,shiftNumber);
        return this.encryptLetterToLetter(plainText);
    }

    decrypt(plainText,shiftNumber){
        if(shiftNumber) return this.decryptNumberToLetter(plainText,shiftNumber);
        return this.decryptLetterToLetter(plainText);
    }

    encryptLetterToLetter(plainText){
        const plainTextArray = [...plainText];
        const encryptedArray = [];
        plainTextArray.forEach(letter => encryptedArray.push(LetterNumber.DEFAULT_LETTER_TO_LETTER_CYPHER[letter]));
        return encryptedArray.join("");
    }

    decryptLetterToLetter(encryptedText){
        const encryptedArray = [...encryptedText];
        
        const plainTextArray = [];
        encryptedArray.forEach(letter => 
            plainTextArray.push(LetterNumber.getKeyByValue(LetterNumber.DEFAULT_LETTER_TO_LETTER_CYPHER,letter)));
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

    decryptNumberToLetter(encryptedString,shiftNumber){
        const encodingPattern = /(\d\d)/g;
        const decodedArray = [];
        let x;

        while ((x = encodingPattern.exec(encryptedString))!=null){
            // "01-09" will fail to be parsed as wrongly formatted octal numbers which we don't want. Strip leading 0 to make it into a valid integer.
            let s = (x[0].startsWith("0")) ? x[0].substring(2,1) : x[0];
            decodedArray.push(LetterNumber.getKeyByValue(this.cypherTable,this.shiftByNumber(+s,shiftNumber,false)));
        }
        
        return decodedArray.join("");
    }

    shiftByNumber(valueToShift, shiftNumber, direction=true) {
        let forward = direction;
        let originalNum;
        
        if(forward) {
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
            if(forward) {
                // encryption direction.
                result++;
                if (result > this.shiftLimit) result = 0;
            } else {
                // decryption direction.
                result --;
                if(result < 0) result = 99;
            }
        }
        
        return result;
    }
}

let letterNumber = new LetterNumber();
console.log(`"0681497203762572077292808186837291878577878677459172878672928772928081917275818880779025" decrypted: ${letterNumber.decrypt("0681497203762572077292808186837291878577878677459172878672928772928081917275818880779025",4771)}`);
console.log(`"21774590777279878686737286777776729287727587857772938872958192807273728677957287867750" decrypted: ${letterNumber.decrypt("21774590777279878686737286777776729287727587857772938872958192807273728677957287867750",4771)}`); 
console.log(`"0772928081868372077280739477728293919272928077729280818679507299728477929277903584779292779072919374919281929392818786727581888077902572107792459172768772819225" decrypted: ${letterNumber.decrypt("0772928081868372077280739477728293919272928077729280818679507299728477929277903584779292779072919374919281929392818786727581888077902572107792459172768772819225",4771)}`); 

// Test per exercise:
let plaintext = "hello, world"
let key = 5
console.log(plaintext === letterNumber.decrypt(letterNumber.encrypt(plaintext, key), key));

let mysteriousMessageInPocket="> ~JtMy m&DmwDD*mXm*tu2AXM2t!w mewMDm[!JmADX*m2§tum.DuuX£D$m3tw*m2§DmM!..Jwt2[mM§XwwD7mwX.D*mNAXw*!.Nm!wmGtuM!A*$mXw*mu§XADmXmAXw*!.m3XM2mAD£XA*tw£mXw[mtwuDM2m?mpJ2mt2m§Xum2!mpDmXp!J2mtwuDM2u m^tw£DAumMA!uuD*m2§tum_t77m*tu2AXM2mXw*mu7!_m*!_wm2§Dm%D!%7DmMAXMytw£m2§DuDmMt%§DAu";

console.log(`Mysterious message decrypted = [${letterNumber.decrypt(mysteriousMessageInPocket)}]`);

// Assignment acceptance criterial...
plaintext = 'Look over there!'
key = 31045

// Letter Number test cases
console.log(letterNumber.encrypt(plaintext, key)) // "84616157466168516446665451645199"
console.log(letterNumber.decrypt("84616157466168516446665451645199", key)) // 'Look over there!'

// Letter Letter test cases
console.log(letterNumber.encrypt(plaintext)) // "B!!ym!9DAm2§DAD "
console.log(letterNumber.decrypt("B!!ym!9DAm2§DAD ")) // 'Look over there!'

// another way to test your program
console.log(plaintext === letterNumber.decrypt(letterNumber.encrypt(plaintext, key), key))
console.log(plaintext === letterNumber.decrypt(letterNumber.encrypt(plaintext)))
