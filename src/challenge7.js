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
            if (value === this.encryptionCharSet[i]) //Compare the inserted value to a character in the array
            {
                let answer = (offsetKey + i + 1) % 100; //+1 because the index of encrpytionCharSet starts at 0 instead of 1, and MOD 100 because it must always be 2 digits, even when above 100 it should start counting from 00 again
                if (answer < 10) {
                    answer = '0' + answer; //Make sure it's always two digits, even when below 10
                }
                return answer;
            }
        }
    }
}

letterNumber = new LetterNumber();
console.log(letterNumber.encrypt("a", 1)); // "03"
console.log(letterNumber.encrypt("Ed", 4)); // "3609"
console.log(letterNumber.encrypt("Hi, Ed!", 302)); // "37128003340756"