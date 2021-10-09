
class LetterNumber {
    constructor(){
        this._cipher = {};
    }

    set cipher(input) {
        this._cipher = input;
    }

    get cipher() {
        return this._cipher;
    }

    createCipher(sourceFile) {
        const fs = require('fs');
        var txtFile = fs.readFileSync(sourceFile).toString().split('\r\n');
        let textArray = txtFile.map(valuePair => {
            return valuePair.split(', ');
        })
        for(let i = 0; i < textArray.length; i++) {
            let number = parseInt(textArray[i][1]);
            textArray[i][1] = number;
        }
        let textObject = Object.fromEntries(textArray);
        this.cipher = textObject;
    }

    encrypt(string, offset) {
        if(typeof string !== 'string' || typeof offset !== 'number') console.log('Please enter valid inputs');
        else {
            let output = '';
            let cipherSheet = this.cipher;
            for (let i = 0; i < string.length; i++) {
                let charNum = cipherSheet[string[i]] + offset;
                // console.log(charNum);
                while(charNum > 99) {
                    charNum -= 99;
                }
                if(charNum < 10) charNum = '0' + charNum.toString();
                output += charNum.toString();
            }
            console.log(output);
        }
    }
}

let letterNumber = new LetterNumber();
letterNumber.createCipher('character_set.txt');
// let output = letterNumber.cipher;
// console.log(output);
letterNumber.encrypt('Hi, Ed!', 302);