/*
### Acceptance Criteria
```js
letterNumber.decrypt("0681497203762572077292808186837291878577878677459172878672928772928081917275818880779025", 4771) // a human-readable sentence === "Hi, Ed! I think someone's on to this cipher!"
letterNumber.decrypt("21774590777279878686737286777776729287727587857772938872958192807273728677957287867750", 4771) // a human-readable sentence === "We're gonna need to come up with a new one."
letterNumber.decrypt("0772928081868372077280739477728293919272928077729280818679507299728477929277903584779292779072919374919281929392818786727581888077902572107792459172768772819225", 4771) // a human-readable sentence
==="I think I have just the thing. A letter-letter substitution cipher! Let's do it!"

Solution: Overall structure has been moved from objects to key and value separate lists to keep track of corresponding indexes.
UML style-Diagram 
class Name - LetterNumber:
                encrypt Method:
                            Parameters: startingString(strParameter) & number 
                            needed to offset base number allocation to encryption table.
                            call createEncryptionTable to create 
                            Encryption Table according with provided Values 
                            then take starting string to cipher value according 
                            to the encryption table returned ciphered Text.

                decrypt Method:
                            Parameters: startingString(strParameter) & number 
                            needed to make base number allocation to encryption table.
                            call createEncryptionTable to create Encryption Table with keys 
                            and values in separate arrays according to which we can find out index of provided values by combining every two values starting from index 0 will give us a value at single index of values array now just find out same index of keys array and we will have the character needed to de-cipher text.
                
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
      for (let i = 0; i < strParameter.length; i++) {
        let indOfKey = this.keysInEncryptionTable.indexOf(strParameter[i]);
        encryptedText += this.valuesInEncryptionTable[indOfKey];
      }
      return encryptedText;
    }

    decrypt(strParameter, offsetNum) {
        this.createEncryptionTable(offsetNum);        
        
        let plainText = "";
        for (let i = 0; i < strParameter.length-1; i+=2) {
          let indOfValue = this.valuesInEncryptionTable.indexOf(strParameter[i]+strParameter[i+1]);
          plainText += this.keysInEncryptionTable[indOfValue];
        }
        return plainText;
      }
  
    updateCounterAndEncryptionList(item){
      this.keysInEncryptionTable.push(item);
      this.valuesInEncryptionTable.push(this.count < 10 ? `0${this.count}` : `${this.count}`)
      this.count++;
      this.count = this.count >= 100 ? 0 : this.count;
    }
  
    createEncryptionTable(num){
        this.keysInEncryptionTable = [];
        this.valuesInEncryptionTable = [];
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

letterNumber.decrypt("0681497203762572077292808186837291878577878677459172878672928772928081917275818880779025", 4771) // output: "Hi, Ed! I think someone's on to this cipher!"

letterNumber.decrypt("21774590777279878686737286777776729287727587857772938872958192807273728677957287867750", 4771) // output: "We're gonna need to come up with a new one."

letterNumber.decrypt("0772928081868372077280739477728293919272928077729280818679507299728477929277903584779292779072919374919281929392818786727581888077902572107792459172768772819225", 4771) // output: "I think I have just the thing. A letter-letter substitution cipher! Let's do it!"