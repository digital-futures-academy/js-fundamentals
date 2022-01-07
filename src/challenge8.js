class LetterNumber {
    constructor() {
        const encryptionCharSet = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '!', '@', '£', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', "'", '"', "\\", '|', ',', '.', '<', '>', '/', '?', '`', '~', '§', '±', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
        this.encryptionCharSet = encryptionCharSet;
    }

    encrypt(message, offsetKey) {
        let encryptedText = ''; //Initialise with a string value
        for (let i = 0; i < message.length; i++) { //Loop through each character in the string
            encryptedText = encryptedText + this.findValue(message[i], offsetKey); //Find the value of the character, then add it to the encryptedText string
        }
        return encryptedText
    }

    findValue(value, offsetKey) {
        for (let i = 0; i < this.encryptionCharSet.length; i++) { //Loop through every character in the array to find the relevant one
            //console.log(encryptionCharSet[i] + ' ' + (i + 1));
            if (value === this.encryptionCharSet[i]) { //Compare the inserted value to a character in the array
                let answer = (offsetKey + i + 1) % 100; //+1 because the index of encrpytionCharSet starts at 0 instead of 1, and MOD 100 because it must always be 2 digits, even when above 100 it should start counting from 00 again
                if (answer < 10) {
                    answer = '0' + answer; //Make sure it's always two digits, even when below 10
                }
                return answer;
            }
        }
    }

    decrypt(message, decryptionKey) {
        let decryptedText = ''; //Initialise with a string value
        let twoChars = ''; //Initialise with a string value
        for (let i = 0; i < message.length; i += 2) { //Loop through the whole message, two at a time
            twoChars = message[i] + message[i + 1]; //Concatenate the two values that make up each character
            if (twoChars[0] === 0) { //If twoChars is less than 10, get rid of the beginning 0
                twoChars = message[i + 1]; //by changing twoChars to just be the second value
            }
            if (this.findDecryptedValue(twoChars, decryptionKey % 100)) { //Mod decryption key as it should always wrap around when going over 100
                decryptedText = decryptedText + this.findDecryptedValue(twoChars, decryptionKey % 100); //Send each character through to be decrypted, and add the result to the answer string
            }/* else {
                console.log(`undefined: ${twoChars}`);
            }*/
        }
        return decryptedText; //return the fully decrypted message
    }

    findDecryptedValue(value, decryptionKey) {
        for (let i = 0; i < this.encryptionCharSet.length; i++) { //Loop through all the possible characters
            if (value - decryptionKey - 1 < 0) { //if the value is less than 0, it must wrap back around by adding 100 to it
                value = parseInt(value); //Change it to an int so that adding 100 will be done mathematically, not by concatenating
                value += 100; //Should fix the value
            }
            if (value - decryptionKey - 1 === i) { //check if the value minus decryption key is equal to an index of a character
                let answer = this.encryptionCharSet[i]; //set the answer to the relevant character
                return answer; //return the individual character
            }
        }
    }
}

letterNumber = new LetterNumber();
console.log(letterNumber.encrypt("a", 1)); // "03"
console.log(letterNumber.encrypt("Ed", 4)); // "3609"
console.log(letterNumber.encrypt("Hi, Ed!", 302)); // "37128003340756"

console.log(letterNumber.decrypt("0681497203762572077292808186837291878577878677459172878672928772928081917275818880779025", 4771)); // a human-readable sentence
console.log(letterNumber.decrypt("21774590777279878686737286777776729287727587857772938872958192807273728677957287867750", 4771)); // a human-readable sentence
console.log(letterNumber.decrypt("0772928081868372077280739477728293919272928077729280818679507299728477929277903584779292779072919374919281929392818786727581888077902572107792459172768772819225", 4771)); // a human-readable sentence