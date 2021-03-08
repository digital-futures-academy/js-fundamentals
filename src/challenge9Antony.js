const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');

class LetterNumber {
    constructor(sourceFile){
        this._cipher = this.createNumberCipher(sourceFile);
    }

    get cipher() {
        return this._cipher;
    }

    createNumberCipher(sourceFile) {
        const fs = require('fs');
        let txtFile = fs.readFileSync(sourceFile).toString().split('\r\n');
        let textArray = txtFile.map(valuePair => {
            return valuePair.split(', ');
        })
        for(let i = 0; i < textArray.length; i++) {
            let number = parseInt(textArray[i][1]);
            textArray[i][1] = number;
        }
        let textObject = Object.fromEntries(textArray);
        return textObject;
    }

    encrypt(string, offset) {
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
        // console.log(output);
        return output;
    }

    decrypt(string, offset) {
        let swappedCipher = {};                 //  Create a new object for swapped key value pairs
        let originalCipher = this.cipher;       
        for(let key in originalCipher) {
            swappedCipher[originalCipher[key]] = key;       //  swap the key value pairs for the new object
        }

        let output = '';
        let twoDigitArray = [];
        for(let i = 0; i < string.length - 1; i += 2) {         //  perform action on every other index
            let twoDigits = parseInt(string.slice(i, i + 2));   //  slice the original string into 2 digit piece
            while(twoDigits < offset) {
                twoDigits += 99;
            }
            twoDigits -= offset;                                //  Convert input string digits into the actual key value pair numbers
            twoDigitArray.push(twoDigits.toString());           //  Add these digits to array
        }
        
        twoDigitArray.forEach(element => {
            output += swappedCipher[element];
        })

        // console.log(output);
        return output;
    }
}


let plaintext = 'Look over there!'
let testKey = 31045

let letterNumberCipher = new LetterNumber('character_set.txt');

// Letter Number test cases
console.log(letterNumberCipher.encrypt(plaintext, testKey)) // "97747470597481647759796764776413"
console.log(letterNumberCipher.decrypt("97747470597481647759796764776413", testKey)) // 'Look over there!'




class LetterLetter {
    constructor(sourceFile) {
        this._letterCipher = this.createLetterCipher(sourceFile);
    }

    get letterCipher() {
        return this._letterCipher;
    }

    createLetterCipher(sourceFile) {
        const fs = require('fs');
        let txtFile = fs.readFileSync(sourceFile).toString().split('\r\n');
        let textArray = txtFile.map(valuePair => {
            return valuePair.split(', ');
        })
        let textObject = Object.fromEntries(textArray);
        return textObject;
    }

    encrypt(string) {
        let output = '';
        let cipherSheet = this.letterCipher;
        for (let i = 0; i < string.length; i++) {
            let inputLetter = string[i];
            let outputLetter = cipherSheet[inputLetter];
            output += outputLetter;
        }
        // console.log(output);
        return output;
    }

    decrypt(string) {
        let swappedCipher = {};
        let originalCipher = this.letterCipher;
        for(let key in originalCipher) {
            swappedCipher[originalCipher[key]] = key;
        }

        let output = '';
        for (let i = 0; i< string.length; i++) {
            let inputLetter = string[i];
            let outputLetter = swappedCipher[inputLetter];
            output += outputLetter;
        }
        // console.log(output);
        return output;
    }
}

let letterLetterCipher = new LetterLetter('character_set2.txt');
console.log(letterLetterCipher.encrypt(plaintext))

console.log(letterLetterCipher.decrypt("B!!ym!9DAm2§DAD "))

console.log(letterLetterCipher.decrypt('~JtMy m&DmwDD*mXm*tu2AXM2t!w mewMDm[!JmADX*m2§tum.DuuX£D$m3tw*m2§DmM!..Jwt2[mM§XwwD7mwX.D*mNAXw*!.Nm!wmGtuM!A*$mXw*mu§XADmXmAXw*!.m3XM2mAD£XA*tw£mXw[mtwuDM2m?mpJ2mt2m§Xum2!mpDmXp!J2mtwuDM2u m^tw£DAumMA!uuD*m2§tum_t77m*tu2AXM2mXw*mu7!_m*!_wm2§Dm%D!%7DmMAXMytw£m2§DuDmMt%§DAu'));
