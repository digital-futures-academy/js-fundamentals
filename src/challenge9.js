/*
#### Requirements

We have a new requirement! We need to build a letter-letter substitution cipher quickly so we can decrypt the next message that pops into our pocket mysteriously!

- NB: Use [characterSet1](https://gist.github.com/dearshrewdwit/691c71616995ad2430ab309aa9998745) for the Letter Number cipher and [characterSet2](https://gist.github.com/dearshrewdwit/5c4f0460066c16d14e512576a446403a) for the Letter Letter cipher
- NB: Ciphers should assume a valid character set
- NB: Create more test cases to help you develop your program and cover different code paths.

### Acceptance Criteria
```js
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
```

### Mysterious Message in Pocket

> ~JtMy m&DmwDD*mXm*tu2AXM2t!w mewMDm[!JmADX*m2§tum.DuuX£D$m3tw*m2§DmM!..Jwt2[mM§XwwD7mwX.D*mNAXw*!.Nm!wmGtuM!A*$mXw*mu§XADmXmAXw*!.m3XM2mAD£XA*tw£mXw[mtwuDM2m?mpJ2mt2m§Xum2!mpDmXp!J2mtwuDM2u m^tw£DAumMA!uuD*m2§tum_t77m*tu2AXM2mXw*mu7!_m*!_wm2§Dm%D!%7DmMAXMytw£m2§DuDmMt%§DAu 

decrypted text from above!!
K!Quick! We need a distraction! Once you read this message, find the community channel named "random" on Discord, and share a random fact regarding any insect - but it has to be about insects! Fingers crossed this will distract and slow down the people cracking these ciphers!  
*/

const letterLetterEncryptionTableArray = [
    { character: ' ', 'value': 'm' },
    { character: 'a', 'value': 'X' },
    { character: 'b', 'value': 'p' },
    { character: 'c', 'value': 'M' },
    { character: 'd', 'value': '*' },
    { character: 'e', 'value': 'D' },
    { character: 'f', 'value': '3' },
    { character: 'g', 'value': '£' },
    { character: 'h', 'value': '§' },
    { character: 'i', 'value': 't' },
    { character: 'j', 'value': 'Y' },
    { character: 'k', 'value': 'y' },
    { character: 'l', 'value': '7' },
    { character: 'm', 'value': '.' },
    { character: 'n', 'value': 'w' },
    { character: 'o', 'value': '!' },
    { character: 'p', 'value': '%' },
    { character: 'q', 'value': 'g' },
    { character: 'r', 'value': 'A' },
    { character: 's', 'value': 'u' },
    { character: 't', 'value': '2' },
    { character: 'u', 'value': 'J' },
    { character: 'v', 'value': '9' },
    { character: 'w', 'value': '_' },
    { character: 'x', 'value': '@' },
    { character: 'y', 'value': '[' },
    { character: 'z', 'value': 'L' },
    { character: 'A', 'value': 'h' },
    { character: 'B', 'value': 'q' },
    { character: 'C', 'value': '0' },
    { character: 'D', 'value': 'G' },
    { character: 'E', 'value': 'j' },
    { character: 'F', 'value': '^' },
    { character: 'G', 'value': 'Z' },
    { character: 'H', 'value': ']' },
    { character: 'I', 'value': 'I' },
    { character: 'J', 'value': '|' },
    { character: 'K', 'value': '>' },
    { character: 'L', 'value': 'B' },
    { character: 'M', 'value': 'c' },
    { character: 'N', 'value': 'i' },
    { character: 'O', 'value': 'e' },
    { character: 'P', 'value': ';' },
    { character: 'Q', 'value': '~' },
    { character: 'R', 'value': ':' },
    { character: 'S', 'value': 'P' },
    { character: 'T', 'value': '±' },
    { character: 'U', 'value': 'k' },
    { character: 'V', 'value': 'S' },
    { character: 'W', 'value': '&' },
    { character: 'X', 'value': '+' },
    { character: 'Y', 'value': 'l' },
    { character: 'Z', 'value': 'a' },
    { character: '!', 'value': ' ' },
    { character: '@', 'value': 'R' },
    { character: '£', 'value': ',' },
    { character: '$', 'value': '}' },
    { character: '%', 'value': 'n' },
    { character: '^', 'value': 'z' },
    { character: '&', 'value': 'F' },
    { character: '*', 'value': '8' },
    { character: '(', 'value': 'C' },
    { character: ')', 'value': '-' },
    { character: '-', 'value': '?' },
    { character: '_', 'value': 'x' },
    { character: '=', 'value': '5' },
    { character: '+', 'value': 'U' },
    { character: '[', 'value': 'K' },
    { character: ']', 'value': 'v' },
    { character: '{', 'value': '=' },
    { character: '}', 'value': '<' },
    { character: ';', 'value': '1' },
    { character: ':', 'value': 'd' },
    { character: "'", 'value': '{' },
    { character: `"`, 'value': 'N' },
    { character: '\\', 'value': 'O' },
    { character: `|`, 'value': 'b' },
    { character: `,`, 'value': '$' },
    { character: `.`, 'value': 'Q' },
    { character: `<`, 'value': 'H' },
    { character: `>`, 'value': '(' },
    { character: `/`, 'value': '\\' },
    { character: `?`, 'value': '4' },
    { character: `\``, 'value': ')' },
    { character: `~`, 'value': 's' },
    { character: `§`, 'value': '6' },
    { character: `±`, 'value': 'V' },
    { character: `1`, 'value': 'o' },
    { character: `2`, 'value': 'W' },
    { character: `3`, 'value': '"' },
    { character: '4', 'value': 'E' },
    { character: '5', 'value': "'" },
    { character: '6', 'value': 'r' },
    { character: '7', 'value': '/' },
    { character: '8', 'value': '`' },
    { character: '9', 'value': 'f' },
    { character: '0', 'value': 'T' }
]

class LetterLetterCipher {
    encrypt(strParameter) {               
        let encryptedText = "";
        for (let str of strParameter) {
          let foundStr = letterLetterEncryptionTableArray.find(item => item.character == str);
          encryptedText += foundStr.value;
        }
        return encryptedText;
      }
  
      decrypt(strParameter) {
          let plainText = "";
          for (let str of strParameter) {
            let foundCipherChar = letterLetterEncryptionTableArray.find(item => item.value == str);
            plainText += foundCipherChar.character;
          }
          return plainText;
        }
}


class LetterNumberCipher {

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

/*
let letterNumberCipher = new LetterNumberCipher();
let letterLetterCipher = new LetterLetterCipher();
/// Acceptance Criteria
let plaintext = 'Look over there!'
let key = 31045

// Letter Number test cases
console.log(letterNumberCipher.encrypt(plaintext, key)); // "84616157466168516446665451645199"
console.log(letterNumberCipher.decrypt("84616157466168516446665451645199", key)); // 'Look over there!'

// Letter Letter test cases
console.log(letterLetterCipher.encrypt(plaintext)); // "B!!ym!9DAm2§DAD "
console.log(letterLetterCipher.decrypt("B!!ym!9DAm2§DAD ")); // 'Look over there!'

// another way to test your program
console.log(plaintext === letterNumberCipher.decrypt(letterNumberCipher.encrypt(plaintext, key), key));
console.log(plaintext === letterLetterCipher.decrypt(letterLetterCipher.encrypt(plaintext)));
console.log("All Tests have been run and passed"); 
*/