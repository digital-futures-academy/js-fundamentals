class LetterNumberCipher {
    characters = ` abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@£$%^&*()-_=+[]{};:\'"\\|,.<>/?\`~§±1234567890`;
    twoDigit(number) {
        const modulo = number % 100;
        return modulo.toString().padStart(2, '0');
    }
    encrypt(str, n) {
        let encryptedStr = '';
        for (let i = 0; i < str.length; ++i) {
            encryptedStr += this.twoDigit(this.characters.indexOf(str[i]) + 1 + n);
        }
        return encryptedStr;
    }
    splitStringIntoPairs(inputString) {
        return inputString.toString().match(/.{1,2}/g);
    }
    decrypt(encryption, key) {
        const modulo = key % 100;
        const byTwos = this.splitStringIntoPairs(encryption);
        let decryption = '';
        for (let i = 0; i < byTwos.length; ++i) {
            decryption += this.characters[(100 + (byTwos[i] - modulo - 1)) % 100];
        }
        return decryption;
    }
};
class LetterLetterCipher {
    characters = [
        ' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
        'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C',
        'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W',
        'X', 'Y', 'Z', '!', '@', '£', '$', '%', '^', '&',
        '*', '(', ')', '-', '_', '=', '+', '[', ']', '{',
        '}', ';', ':', "'", '"', '\\', '|', ',', '.', '<',
        '>', '/', '?', '`', '~', '§', '±', '1', '2', '3',
        '4', '5', '6', '7', '8', '9', '0',
    ];
    returnChar = [
        'm', 'X', 'p', 'M', '*', 'D', '3', '£', '§', 't',
        'Y', 'y', '7', '.', 'w', '!', '%', 'g', 'A', 'u',
        '2', 'J', '9', '_', '@', '[', 'L', 'h', 'q', '0',
        'G', 'j', '^', 'Z', ']', 'I', '|', '>', 'B', 'c',
        'i', 'e', ';', '~', ':', 'P', '±', 'k', 'S', '&',
        '+', 'l', 'a', ' ', 'R', ':', '}', 'n', 'z', 'F',
        '8', 'C', '-', '?', 'x', '5', 'U', 'K', 'v', '=',
        '<', '1', 'd', '{', 'N', 'O', 'b', '$', 'Q', 'H',
        '(', '\\', '4', ')', 's', '6', 'V', 'o', 'W', '"',
        'E', "'", 'r', '/', '`', 'f', 'T',
    ];
    encrypt(str) {
        let result = '';
        for (let i = 0; i < str.length; i++) {
            result += this.returnChar[this.characters.indexOf(str.charAt(i))];
        }
        return result;
    }
    decrypt(str) {
        let result = '';
        for (let i = 0; i < str.length; i++) {
            result += this.characters[this.returnChar.indexOf(str.charAt(i))];
        }
        return result;
    }
}
const letterNumberCipher = new LetterNumberCipher();
const letterLetterCipher = new LetterLetterCipher();
let plaintext = 'Look over there!'
let key = 31045

// Letter Number test cases
console.log(letterNumberCipher.encrypt(plaintext, key)) // "84616157466168516446665451645199"
console.log(letterNumberCipher.decrypt("84616157466168516446665451645199", key)) // 'Look over there!'

// Letter Letter test cases
console.log(letterLetterCipher.encrypt(plaintext)) // "B!!ym!9DAm2§DAD "
console.log(letterLetterCipher.decrypt("B!!ym!9DAm2§DAD ")) // 'Look over there!'

// another way to test your program
console.log(plaintext === letterNumberCipher.decrypt(letterNumberCipher.encrypt(plaintext, key), key))
console.log(plaintext === letterLetterCipher.decrypt(letterLetterCipher.encrypt(plaintext)))

console.log(letterLetterCipher.decrypt('~JtMy m&DmwDD*mXm*tu2AXM2t!w mewMDm[!JmADX*m2§tum.DuuX£D$m3tw*m2§DmM!..Jwt2[mM§XwwD7mwX.D*mNAXw*!.Nm!wmGtuM!A*$mXw*mu§XADmXmAXw*!.m3XM2mAD£XA*tw£mXw[mtwuDM2m?mpJ2mt2m§Xum2!mpDmXp!J2mtwuDM2u m^tw£DAumMA!uuD*m2§tum_t77m*tu2AXM2mXw*mu7!_m*!_wm2§Dm%D!%7DmMAXMytw£m2§DuDmMt%§DAu'));