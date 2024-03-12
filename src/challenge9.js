// Letter Number cipher
class LetterNumber {
  constructor() {
    this.characterSet = {
      ' ': '1',
      a: '2',
      b: '3',
      c: '4',
      d: '5',
      e: '6',
      f: '7',
      g: '8',
      h: '9',
      i: '10',
      j: '11',
      k: '12',
      l: '13',
      m: '14',
      n: '15',
      o: '16',
      p: '17',
      q: '18',
      r: '19',
      s: '20',
      t: '21',
      u: '22',
      v: '23',
      w: '24',
      x: '25',
      y: '26',
      z: '27',
      A: '28',
      B: '29',
      C: '30',
      D: '31',
      E: '32',
      F: '33',
      G: '34',
      H: '35',
      I: '36',
      J: '37',
      K: '38',
      L: '39',
      M: '40',
      N: '41',
      O: '42',
      P: '43',
      Q: '44',
      R: '45',
      S: '46',
      T: '47',
      U: '48',
      V: '49',
      W: '50',
      X: '51',
      Y: '52',
      Z: '53',
      '!': '54',
      '@': '55',
      '£': '56',
      $: '57',
      '%': '58',
      '^': '59',
      '&': '60',
      '*': '61',
      '(': '62',
      ')': '63',
      '-': '64',
      _: '65',
      '=': '66',
      '+': '67',
      '[': '68',
      ']': '69',
      '{': '70',
      '}': '71',
      ';': '72',
      ':': '73',
      "'": '74',
      '"': '75',
      '\\': '76',
      '|': '77',
      ',': '78',
      '.': '79',
      '<': '80',
      '>': '81',
      '/': '82',
      '?': '83',
      '`': '84',
      '~': '85',
      '§': '86',
      '±': '87',
      1: '88',
      2: '89',
      3: '90',
      4: '91',
      5: '92',
      6: '93',
      7: '94',
      8: '95',
      9: '96',
      0: '97',
    };
  }

  encrypt(plaintext, key) {
    let ciphertext = '';
    for (let char of plaintext) {
      if (Object.hasOwn(this.characterSet, char)) {
        let temp = Number(this.characterSet[char]) + key;
        while (temp > 99) {
          temp -= 100;
        }
        if (temp < 10) {
          temp = '0' + temp.toString();
          ciphertext += temp;
        } else ciphertext += temp.toString();
      }
    }

    return ciphertext;
  }
  decrypt(ciphertext, key) {
    let decrypted = '';
    for (let i = 0; i < ciphertext.length; i += 2) {
      let num = ciphertext.slice(i, i + 2);
      while (key > 99) {
        key -= 100;
      }
      num = Number(num) - key;

      function getKeyByValue(object, value) {
        return Object.keys(object).find((k) => object[k] === value);
      }
      let char = getKeyByValue(this.characterSet, num.toString());
      decrypted += char;
    }
    return decrypted;
  }
}

// Letter Letter cipher
class LetterLetter {
  constructor() {
    this.characterSet = {
      ' ': 'm',
      a: 'X',
      b: 'p',
      c: 'M',
      d: '*',
      e: 'D',
      f: '3',
      g: '£',
      h: '§',
      i: 't',
      j: 'Y',
      k: 'y',
      l: '7',
      m: '.',
      n: 'w',
      o: '!',
      p: '%',
      q: 'g',
      r: 'A',
      s: 'u',
      t: '2',
      u: 'J',
      v: '9',
      w: '_',
      x: '@',
      y: '[',
      z: 'L',
      A: 'h',
      B: 'q',
      C: '0',
      D: 'G',
      E: 'j',
      F: '^',
      G: 'Z',
      H: ']',
      I: 'I',
      J: '|',
      K: '>',
      L: 'B',
      M: 'c',
      N: 'i',
      O: 'e',
      P: ';',
      Q: '~',
      R: ':',
      S: 'P',
      T: '±',
      U: 'k',
      V: 'S',
      W: '&',
      X: '+',
      Y: 'l',
      Z: 'a',
      '!': ' ',
      '@': 'R',
      '£': ',',
      $: '}',
      '%': 'n',
      '^': 'z',
      '&': 'F',
      '*': '8',
      '(': 'C',
      ')': '-',
      '-': '?',
      _: 'x',
      '=': '5',
      '+': 'U',
      '[': 'K',
      ']': 'v',
      '{': '=',
      '}': '<',
      ';': '1',
      ':': 'd',
      "'": '{',
      '"': 'N',
      '\\': 'O',
      '|': 'b',
      ',': '$',
      '.': 'Q',
      '<': 'H',
      '>': ')',
      '/': '\\',
      '?': '4',
      '`': ')',
      '~': 's',
      '§': '6',
      '±': 'V',
      1: 'o',
      2: 'W',
      3: '"',
      4: 'E',
      5: "'",
      6: 'r',
      7: '/',
      8: '`',
      9: 'f',
      0: 'T',
    };
  }

  encrypt(plaintext) {
    let ciphertext = '';
    for (let char of plaintext) {
      if (Object.hasOwn(this.characterSet, char)) {
        ciphertext += this.characterSet[char];
      }
    }

    return ciphertext;
  }
  decrypt(ciphertext) {
    let decrypted = '';
    for (let code of ciphertext) {
      function getKeyByValue(object, value) {
        return Object.keys(object).find((k) => object[k] === value);
      }
      let char = getKeyByValue(this.characterSet, code);
      if (char) {
        decrypted += char;
      }
    }
    return decrypted;
  }
}

// Test cases
let letterNumberCipher = new LetterNumber();
let letterLetterCipher = new LetterLetter();
let plaintext = 'Look over there!';
let key = 31045;

// Letter Number test cases
console.log(letterNumberCipher.encrypt(plaintext, key)); // "84616157466168516446665451645199"
console.log(letterNumberCipher.decrypt('84616157466168516446665451645199', key)); // 'Look over there!'

// Letter Letter test cases
console.log(letterLetterCipher.encrypt(plaintext)); // "B!!ym!9DAm2§DAD "
console.log(letterLetterCipher.decrypt('B!!ym!9DAm2§DAD ')); // 'Look over there!'
