const substitutionDictLoader = require("./substitutionDictLoader");

class LetterNumber {
  constructor(substitutionDict) {
    this.substitutionDict = substitutionDict;
  }

  encrypt(string, key) {
    let encrypted_string = '';
    const characters = string.split('');

    characters.forEach(character => {
      const int_encripted_value = parseInt(this.substitutionDict[character]);
      const number_to_add = key % 100;
      const new_encripted_value = (int_encripted_value + number_to_add) % 100;

      if (this.isSingleDigit(new_encripted_value)) {
        encrypted_string += `0${new_encripted_value}`;
      } else {
        encrypted_string += `${new_encripted_value}`;
      }
    });

    return encrypted_string;
  }

  isSingleDigit(number) {
    return String(number).length === 1;
  }
}

substitutionDictLoader.load()
  .then((result) => {
    let letter_number = new LetterNumber(result);
    console.log(letter_number.encrypt("a", 1)) // "03"
    console.log(letter_number.encrypt("Ed", 4)) // "3609"
    console.log(letter_number.encrypt("0", 3)) // "00"
    console.log(letter_number.encrypt("0", 5)) // "02"
    console.log(letter_number.encrypt("H", 302)) // "37"
    console.log(letter_number.encrypt("Hi", 302)) // "3712"
    console.log(letter_number.encrypt("Hi, Ed!", 302)) // "37128003340756"
  })
