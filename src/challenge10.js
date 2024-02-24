/*
### Requirements

We should be able to speed up encoding and decoding messages if we can run a program directly from the command line!

The command should take 3 arguments [cipher] [method] [file] and optionally take a [key]

##### Option 1
Running a script that will encrypt the text in `example.txt` using a letter-letter cipher might look like this:
```sh
$ ./cipher.js ll enc example.txt
```

##### Option 2
Using an executable command for a letter-number cipher might look like this:
```sh
$ cipher ln enc example.txt 104
```

### Acceptance Criteria

- The result of encryption for a file `example.txt` should create a new file named `example.txt.enc` with the ciphertext
- The result of decryption for a file `example.txt.enc` should create a new file named `example.txt` with the plaintext
*/

class LetterLetterCipher {
  encrypt(strParameter, offsetNum) {
    const letterLetterEncryptionTableArray = this.createEncryptionTableLL();
  
    let encryptedText = "";
    for (let str of strParameter) {
      let foundStr = letterLetterEncryptionTableArray.find(
        (item) => item.character == str
      );
      encryptedText += foundStr.value;
    }
    return encryptedText;
  }
  

  decrypt(strParameter, offsetNum) {
    const letterLetterEncryptionTableArray = this.createEncryptionTableLL();
  
    let plainText = "";
    for (let str of strParameter) {
      let foundCipherChar = letterLetterEncryptionTableArray.find(
        (item) => item.value == str
      );
      plainText += foundCipherChar.character;
    }
    return plainText;
  }
  

  createEncryptionTableLL() {
    const fs = require("fs");
  
    let keysOfLetterLetterEncryption = fs.readFileSync(
      "LLKeys.txt",
      "utf8",
      (err, data) => {
        if (err) throw err;
        return data;
      }
    );
    let valuesOfLetterLetterEncryption = fs.readFileSync(
      "LLValues.txt",
      "utf8",
      (err, data) => {
        if (err) throw err;
        return data;
      }
    );
    const letterLetterEncryptionTableArray = [];
  
    for (let i = 0; i < keysOfLetterLetterEncryption.length; i++) {
      letterLetterEncryptionTableArray.push({
        character: keysOfLetterLetterEncryption[i],
        value: valuesOfLetterLetterEncryption[i],
      });
    }
    return letterLetterEncryptionTableArray;
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
    for (let i = 0; i < strParameter.length - 1; i += 2) {
      let indOfValue = this.valuesInEncryptionTable.indexOf(
        strParameter[i] + strParameter[i + 1]
      );
      plainText += this.keysInEncryptionTable[indOfValue];
    }
    return plainText;
  }

  createEncryptionTable(num) {
    const fs = require("fs");

    this.keysInEncryptionTable = [];
    this.valuesInEncryptionTable = [];
    let count = num < 99 ? 1 + num : 1 + (num % 100);

    let textOfKeys = fs.readFileSync("./LLKeys.txt", "utf8", (err, data) => {
      if (err) throw err;
      return data;
    });

    for (const str of textOfKeys) {
      this.keysInEncryptionTable.push(str);
      this.valuesInEncryptionTable.push(count < 10 ? `0${count}` : `${count}`);
      count++;
      count = count >= 100 ? 0 : count;
    }

    count = 1;
  }
}

/*
Important for testing

let letterNumberCipher = new LetterNumberCipher();
let letterLetterCipher = new LetterLetterCipher();

/// Acceptance Criteria
let plaintext = "Look over there!";
let key = 31045;

// Letter Number test cases
console.log(letterNumberCipher.encrypt(plaintext, key)); // "84616157466168516446665451645199"
console.log(
  letterNumberCipher.decrypt("84616157466168516446665451645199", key)
); // 'Look over there!'

// Letter Letter test cases
console.log(letterLetterCipher.encrypt(plaintext)); // "B!!ym!9DAm2§DAD "
console.log(letterLetterCipher.decrypt("B!!ym!9DAm2§DAD ")); // 'Look over there!'

// another way to test your program
console.log(
  plaintext ===
    letterNumberCipher.decrypt(letterNumberCipher.encrypt(plaintext, key), key)
);
console.log(
  plaintext ===
    letterLetterCipher.decrypt(letterLetterCipher.encrypt(plaintext))
);
console.log("All Tests have been run and passed");
*/

//Handling command line arguments and reading writing files accordingly

const fs = require("fs");
const allArgs = process.argv;

let encObj;
let num = 0;
let textToProcess = '';
let result = '';


if (allArgs[2] == "ll") {
    encObj = new LetterLetterCipher();
}else if (allArgs[2] == "ln") {
    encObj = new LetterNumberCipher();
}else {
    console.log("Wrong Cipher Type! \nOrder arguments by: [CipherType] [Cipher Method] [Filename] [Key: Optional Integer] \nAcceptable Arguments for Cipher Type: \nll = Letter Letter Cipher \nln = Letter Number Cipher");
}


if (allArgs[4]){
    textToProcess = fs.readFileSync(allArgs[4], "utf8", (err, data) => {
        if (err) throw err;
        return data;
    });
}else {
    console.log("Wrong or no File found! \nOrder arguments by: [CipherType] [Cipher Method] [Filename] [Key: Optional Integer] \nAcceptable Arguments for File: required full path with file name e.g. c:/user/folder/file.txt");
}

if (allArgs[5]) {
    allArgs[5] = Math.floor(Number(allArgs[5]));
    
    num = allArgs[5] > 0 ? allArgs[5] : 0;
    console.log(typeof(allArgs[5]), num);
}

if (allArgs[3] == "enc") {
    result = encObj.encrypt(textToProcess, num);
    let fileName = allArgs[4].split('.')[0] + '.txt'+ '.enc'    
    fs.writeFile(fileName, result, err => {
        if (err) throw err;
    });
}else if (allArgs[3] == "dec") {
    result = encObj.decrypt(textToProcess, num);
    let fileName = allArgs[4].split('.')[0] + '.txt'    
    fs.writeFile(fileName, result, err => {
        if (err) throw err;
    });
}else {
    console.log("Wrong Cipher Method! \nOrder arguments by: [CipherType] [Cipher Method] [Filename] [Key: Optional Integer] \nAcceptable Arguments for Cipher Method: \nenc = encrypt(with plain text returns encrypted text) \ndec = decrypt (you have encrypted value you want converted back to original text)");
}