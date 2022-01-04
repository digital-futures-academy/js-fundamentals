//List of all characters involved. The relevant value is just the index + 1, due to indexes starting at 0 and the char set starting at 1.
const encryptionCharSet = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '!', '@', '£', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', "'", '"', "\\", '|', ',', '.', '<', '>', '/', '?', '`', '~', '§', '±', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

let unencryptedText = "Hi, Ed!"; //Should become equal to "351078132554"

const encrypt = stringToEncrypt => {
    let encryptedText = ''; //Initialise with a string value
    for (let i = 0; i < stringToEncrypt.length; i++) { //Loop through each character in the string
        encryptedText = encryptedText + findValue(stringToEncrypt[i]); //Find the value of the character, then add it to the encryptedText string
    }
    return encryptedText
}

const findValue = value => {
    for (let i = 0; i < encryptionCharSet.length; i++) { //Loop through every character in the array to find the relevant one
        //console.log(encryptionCharSet[i] + ' ' + (i + 1));
        if (value === encryptionCharSet[i]) //Compare the inserted value to a character in the array
        {
            return i + 1; //+1 because the index of encrpytionCharSet starts at 0 instead of 1
        }
    }
}

console.log(encrypt(unencryptedText)); //Call (and log) the function