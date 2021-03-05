const { off } = require('process');

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

        console.log(output);
        return output;
    }
}

let letterNumber = new LetterNumber();
letterNumber.createCipher('character_set.txt');
// let output = letterNumber.cipher;
// console.log(output);
letterNumber.encrypt('Hi, Ed!', 302);
// 40158306371059
letterNumber.decrypt("40158306371059", 302);

letterNumber.decrypt("5429972051247320552040282934312039353325353425933920353420403520402829392023293628253873", 4771)
letterNumber.decrypt("69259338252027353434212034252524204035202335332520413620432940282021203425432035342598", 4771)
letterNumber.decrypt("5520402829343120552028214225203041394020402825204028293427982047203225404025388332254040253820394122394029404140293534202329362825387320582540933920243520294073", 4771)

let plaintext = "Any random string 8172<>{} asd"
let offsetTest = 5
console.log(plaintext === letterNumber.decrypt(letterNumber.encrypt(plaintext, offsetTest), offsetTest))