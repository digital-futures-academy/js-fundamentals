const fs = require('fs');

class Encryptor {
  #encryptionKey;

  constructor() {
    this.#encryptionKey = this.createEncryption();
  }

  createEncryption() {
    const characterSet = fs.readFileSync('./files/character_set.txt').toString();
    const encryptionKey = characterSet.split('\n').map(str => {
      str = str.substring(1, str.length - 1).replace(' ', '');
      const [key, value] = str.split(',');

      if (value === undefined) {
        return { [key]: ' ' };
      }

      return { [key]: value };
    });

    encryptionKey[0] = { " ": '1' };
    
    return encryptionKey;
  }

  encrypt(str) {
    const requestedKeys = str.split('')
    const encryptedStr = [];

    requestedKeys.forEach(key => {
      if (this.#encryptionKey.some(obj => obj.hasOwnProperty(key))) {
        const result = this.#encryptionKey.find(obj => obj.hasOwnProperty(key))[key];
        encryptedStr.push(result);
      }
    });

    return encryptedStr.join('');
  }
}

let encryptor = new Encryptor();
let test = encryptor.encrypt('Devin');

console.log(test); //Returns 316231015