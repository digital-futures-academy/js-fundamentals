/*
#### Requirements
I want to be able to add a simple key to my encryption that offsets the table 
value by the given amount.

### Acceptance Criteria
```js
letterNumber.encrypt("a", 1) // "03"
letterNumber.encrypt("Ed", 4) // "3609"
letterNumber.encrypt("Hi, Ed!", 302) // "37128003340756"
```
Solution: 
UML style-Diagram 
class Name - LetterNumber:
                encrypt Method:
                            Parameters: startingString(strParameter) & number 
                            needed to offset base number allocation to encryption table.
                            call createEncryptionTable to create 
                            Encryption Table according with provided Values 
                            then take starting string to cipher value according 
                            to the encryption table returned ciphered Text.
                
                updateCounterAndEncryptionList Method:
                            Parameter: item (string/char)
                            just to take away repetative work. make our code DRY
                            on each itertion it updates encryption table and count
                            variable accordingly.

                createEncryptionTable:
                            Parameter: num it's number need to offset from count variable.
                            creates encryptiontable Object. populate it with the help of
                            variable count and updateCounterAndEncryptionList method 
                            according to the given key provided as parameter (num).
*/



class LetterNumber {

  encrypt(strParameter, offsetNum) {
    this.createEncryptionTable(offsetNum);
    
    let encryptedText = "";
    for (let char of strParameter) {
      encryptedText += this.encryptionTable[char];
    }
    return encryptedText;
  }

  updateCounterAndEncryptionList(item){
    this.encryptionTable[item] = this.count < 10 ? `0${this.count}` : `${this.count}`;
    this.count++;
    this.count = this.count >= 100 ? 0 : this.count;
  }

  createEncryptionTable(num){
      this.encryptionTable = {};
      this.count = num < 99 ? 1 + num : 1 + num % 100;

    for (let item of " abcdefghijklmnopqrstuvwxyz") {
        this.updateCounterAndEncryptionList(item);
    }

    for (let item of "abcdefghijklmnopqrstuvwxyz".toUpperCase()) {
        this.updateCounterAndEncryptionList(item);
    }

    const specialChar = [
      "!",
      "@",
      "£",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      "-",
      "_",
      "=",
      "+",
      "[",
      "]",
      "{",
      "}",
      ";",
      ":",
      "'",
      '"',
      "\\",
      "|",
      ",",
      ".",
      "<",
      ">",
      "/",
      "?",
      "`",
      "~",
      "§",
      "±",
    ];

    for (let item of specialChar) {
        this.updateCounterAndEncryptionList(item);
    }

    for (let item of "1234567890") {
        this.updateCounterAndEncryptionList(item);
    }
    this.count = 1
  }
}

let letterNumber = new LetterNumber();
letterNumber.encrypt("a", 1); // "03"
letterNumber.encrypt("Ed", 4); // "3609"
letterNumber.encrypt("Hi, Ed!", 302); // "37128003340756"
