/*
#### Requirements

We have a new requirement! We need to build a letter-letter substitution cipher quickly so we can decrypt the next message that pops into our pocket mysteriously!

- NB: Use [characterSet1](https://gist.github.com/dearshrewdwit/691c71616995ad2430ab309aa9998745) for the Letter Number cipher and [characterSet2](https://gist.github.com/dearshrewdwit/5c4f0460066c16d14e512576a446403a) for the Letter Letter cipher
- NB: Ciphers should assume a valid character set
- NB: Create more test cases to help you develop your program and cover different code paths.
### Mysterious Message in Pocket

> ~JtMy m&DmwDD*mXm*tu2AXM2t!w mewMDm[!JmADX*m2§tum.DuuX£D$m3tw*m2§DmM!..Jwt2[mM§XwwD7mwX.D*mNAXw*!.Nm!wmGtuM!A*$mXw*mu§XADmXmAXw*!.m3XM2mAD£XA*tw£mXw[mtwuDM2m?mpJ2mt2m§Xum2!mpDmXp!J2mtwuDM2u m^tw£DAumMA!uuD*m2§tum_t77m*tu2AXM2mXw*mu7!_m*!_wm2§Dm%D!%7DmMAXMytw£m2§DuDmMt%§DAu 

decrypted text from above!!
K!Quick! We need a distraction! Once you read this message, find the community channel named "random" on Discord, and share a random fact regarding any insect - but it has to be about insects! Fingers crossed this will distract and slow down the people cracking these ciphers!  
*/

class LetterLetterCipher {
  encrypt(strParameter) {
    let letterLetterEncryptionTableArray = this.createEncryptionTable();

    let encryptedText = "";
    for (let str of strParameter) {
      let foundStr = letterLetterEncryptionTableArray.find(
        (item) => item.character == str
      );
      encryptedText += foundStr.value;
    }
    return encryptedText;
  }

  decrypt(strParameter) {
    let letterLetterEncryptionTableArray = this.createEncryptionTable();

    let plainText = "";
    for (let str of strParameter) {
      let foundCipherChar = letterLetterEncryptionTableArray.find(
        (item) => item.value == str
      );
      plainText += foundCipherChar.character;
    }
    return plainText;
  }

  createEncryptionTable() {
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
      this.valuesInEncryptionTable.push(
        count < 10 ? `0${count}` : `${count}`
      );
      count++;
      count = count >= 100 ? 0 : count;
    }

    count = 1;
  }
}

/*
#### Testing

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
console.log("All Tests have been run and passed"); */