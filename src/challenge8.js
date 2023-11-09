const substitutionDictLoader = require("./substitutionDictLoader");

class LetterNumber {
  constructor(substitutionDict) {
    this.substitutionDict = substitutionDict;
  }

  decrypt(encrypted_string, key) {
    let decrypted_string = ''
    const encrypted_characters = encrypted_string.match(/.{1,2}/g);

    encrypted_characters.forEach(character_couple => {
      console.log(character_couple)
      const first_character = character_couple[0]
      const second_character = character_couple[1]
      if (first_character == 0) {
        const int_encripted_value = this.substitutionDict[second_character]
        console.log(`when the first digit is 0: ${int_encripted_value}`)
      } else {
        const int_encripted_value = this.substitutionDict[character_couple]
        console.log(`when there are 2 digits: ${int_encripted_value}`)
      }
      
      const number_to_subtract = key % 100
    });
  }
}

substitutionDictLoader.load()
  .then((result) => {
    let letter_number = new LetterNumber(result);
    console.log(letter_number.decrypt(
      "0681497203762572077292808186837291878577878677459172878672928772928081917275818880779025", 4771
      ))
    // console.log(letter_number.decrypt(
    //   "21774590777279878686737286777776729287727587857772938872958192807273728677957287867750", 4771
    //   ))
    // console.log(letter_number.decrypt(
    //   "0772928081868372077280739477728293919272928077729280818679507299728477929277903584779292779072919374919281929392818786727581888077902572107792459172768772819225", 4771
    //   ))
  })

// console.log(4771 % 100)



class Scrabble {
  constructor(word) {
    this.word = word;
    this.points = {
      'A': 1,
      'B': 3,
      'C': 3,
      'D': 2,
      'E': 1,
      'F': 4,
      'G': 2,
      'H': 4,
      'I': 1,
      'J': 8,
      'K': 5,
      'L': 1,
      'M': 3,
      'N': 1,
      'O': 1,
      'P': 3,
      'Q': 10,
      'R': 1,
      'S': 1,
      'T': 1,
      'U': 1,
      'V': 4,
      'W': 4,
      'X': 8,
      'Y': 4,
      'Z': 10,
    }
  }

  score() {
    let score = 0

    if (this.word === '') {
      return score
    }

    const letters = this.word.split('')
    letters.forEach(letter => {
      if (this.isALetter(letter)) {
        score += this.points[letter.toUpperCase()]
      } else {
        return 0
      }
    });
    return score
  }

  isALetter(character) {
    return character.toUpperCase !== character.toLowerCase()
  }
}

let scrabble = new Scrabble('quirky')
console.log(scrabble.score())

export default Scrabble;
