/*#### Requirements
I want to be able to encrypt a string using letter-number substitution according to this [table of values](https://gist.github.com/dearshrewdwit/691c71616995ad2430ab309aa9998745)
```
"E" -> "32"
"d" -> "5"
"Ed" -> "325"
"Hi, Ed!" -> "351078132554"
```

Use your best judgment with your pair partner. If you want clarification, ask your coach.
*/

const encryptionTable = {
    " ": "1"
}

let count = 2;

for (let item of "abcdefghijklmnopqrstuvwxyz") {
    encryptionTable[item] = count;
    count++;    
}

for (let item of "abcdefghijklmnopqrstuvwxyz".toUpperCase()) {
    encryptionTable[item] = count;
    count++;    
}
    
    
const specialChar = ["!", "@", "£", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=",
"+", "[", "]", "{", "}", ";", ":", "'", '"', "\\", "|", ",", ".",
"<", ">", "/", "?", "`", "~", "§", "±"]

for (let item of specialChar) {
    encryptionTable[item] = count;
    count++;    
}

for (let item of "1234567890") {
    encryptionTable[item] = count;
    count++;    
}

function letsEncrypt(str) {
    let encryptedText = "";
    for (let char of str) {
        encryptedText += encryptionTable[char];     
    }
    return encryptedText;
}

letsEncrypt("Hi, Ed!"); // output '351078132554'