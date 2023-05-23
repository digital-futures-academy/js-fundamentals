class LetterNumber {
  constructor(characterSet) {
    this.characterSet = characterSet;
  }
  csvToArray() {
    let charactersArray = this.characterSet.split("\n");
    charactersArray.shift();
    charactersArray = charactersArray.map((characterPair) => {
      characterPair = characterPair.split(', ');
      return characterPair;
    });
    return charactersArray;
  }

  csvToObject(offset) {
    const charactersArray = this.csvToArray();
    const encodingPairs = charactersArray.reduce((acc, currVal) => {
      return {
        ...acc, 
        [currVal[0]]:  this.applyOffset(currVal[1], offset)
        };
      }, {}
    );
    return encodingPairs;
  }

  applyOffset(value, offset) {
    let newValue = parseInt(value) + offset
    if (newValue > 99) {
      newValue = this.resetFromZero(newValue);
    };
    newValue = newValue.toString();
    if (newValue.length === 1) {
      newValue = '0' + newValue;
    }
    return newValue;
  }

  resetFromZero(value) {
    let stringValue = value.toString()
    if(stringValue.length > 2) {
      stringValue = stringValue.slice(-2)
    }
    return parseInt(stringValue); 
  }

  encrypt(stringToEncrypt, offset) {
    const charsArr = stringToEncrypt.split('');
    const characterSet = this.csvToObject(offset);
    let ciphertext = ''
    for (let i = 0; i < charsArr.length; i++) {
      for (let char in characterSet) {
          if (charsArr[i] === char) {
            ciphertext += characterSet[char];
          }
      } 
    }
    return ciphertext;
  }
}

async function getRawKeys() {
  const response = await fetch('https://gist.githubusercontent.com/dearshrewdwit/691c71616995ad2430ab309aa9998745/raw/78624a6c9499e049fd294ddb8302d93e6f675a0d/character_set.txt');
  const text = response.text();
  return text;
}

const encodeHiEd = async () => {
  const characterSetRaw = await getRawKeys();
  const letterNumber = new LetterNumber(characterSetRaw);
  console.log("Ciphertext for 'Hi, Ed!':",letterNumber.encrypt("Hi, Ed!", 302))
}

encodeHiEd()