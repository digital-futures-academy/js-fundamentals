characters = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '!', '@', '£', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', '\'', '"', '\\', '|', ',', '.', '<', '>', '/', '?', '`', '~', '§', '±', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

function encryptString(string) {
    let encryptedString = '';
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < characters.length; j++) {
            if (string[i] === characters[j]) {
                encryptedString += String(characters.indexOf(string[i]) + 1);
            }
        }
    }
    return encryptedString;
}