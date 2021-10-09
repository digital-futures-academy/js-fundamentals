class Cipher {
    constructor(sourceFile, sourceFile2) {
        this._numberCipher = this.createNumberCipher(sourceFile);
        this._letterCipherToNumber = {};
        this._letterCipherToLetter = this.createLetterCipher(sourceFile2);
    }

    set numberCipher(input) {
        this._numberCipher = input;
    }

    get numberCipher() {
        return this._numberCipher;
    }

    set letterCipherToNumber (input) {
        this._letterCipherToNumber = input;
    }

    get letterCipherToNumber() {
        return this._letterCipherToNumber;
    }

    set letterCipherToLetter (input) {
        this._letterCipherToLetter = input;
    }

    get letterCipherToLetter() {
        return this._letterCipherToLetter;
    }

    splitCipherToArray(sourceFile) {
        const fs = require('fs');
        let txtFile = fs.readFileSync(sourceFile).toString().split('\r\n');
        let textArray = txtFile.map(valuePair => {
            return valuePair.split(', ');
        })
        return textArray;
    }

    createNumberCipher(sourceFile) {
        let textArray = this.splitCipherToArray(sourceFile);
        for(let i = 0; i < textArray.length; i++) {
            let number = parseInt(textArray[i][1]);
            textArray[i][1] = number;
        }
        let textObject = Object.fromEntries(textArray);
        return textObject;
    }

    createLetterCipher(sourceFile) {
        let arrLetterToNum = this.splitCipherToArray(sourceFile);
        let arrNumToLetter = [];
        for(let i = 0; i < arrLetterToNum.length; i++) {
            let number = i + 1;
            let rightLetter = arrLetterToNum [i][1];
            arrNumToLetter.push([number, rightLetter]);
            arrLetterToNum[i][1] = number;
        }
        let NumToLetterObject = Object.fromEntries(arrNumToLetter);
        let LetterToNumObject = Object.fromEntries(arrLetterToNum);
        this.letterCipherToNumber = LetterToNumObject;
        return NumToLetterObject;
    }

    encrypt(string, offset = null) {
        if(typeof offset === null) {
            
        }
    }


}

let LetterLetterCipher = new Cipher('character_set.txt', 'character_set2.txt');
console.log(LetterLetterCipher.letterCipherToLetter);
console.log(LetterLetterCipher._letterCipherToNumber);