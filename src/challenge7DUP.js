
// letter-number substitution table creation
let letterNumberSubTable = new Object();

const letNumArr = [' ', 1, 'a', 2,
  'b', 3, 'c', 4, 'd', 5, 'e', 6, 'f', 7, 'g', 8, 'h', 9, 'i', 10, 'j', 11,
  'k', 12, 'l', 13, 'm', 14, 'n', 15, 'o', 16, 'p', 17, 'q', 18, 'r', 19,
  's', 20,
  't', 21, 'u', 22, 'v', 23, 'w', 24, 'x', 25, 'y', 26, 'z', 27, 'A', 28,
  'B', 29,
  'C', 30, 'D', 31, 'E', 32, 'F', 33, 'G', 34, 'H', 35, 'I', 36, 'J', 37,
  'K', 38,
  'L', 39, 'M', 40, 'N', 41, 'O', 42, 'P', 43, 'Q', 44, 'R', 45, 'S', 46,
  'T', 47,
  'U', 48, 'V', 49, 'W', 50, 'X', 51, 'Y', 52, 'Z', 53, '\!', 54, '@', 55,
  '£', 56, '$', 57, '\%', 58, '\^', 59, '\&', 60, '\*', 61, '\(', 62, '\)', 63,
  '\-', 64, '\_', 65, '\=', 66, '\+', 67, '\[', 68, ']', 69, '\{', 70, '\}', 71,
  ';', 72, ':', 73, '\'', 74, '\"', 75, '\\', 76, '\|', 77, '\,', 78, '.', 79,
  '\<', 80, '\>', 81, '\/', 82, '\?', 83, '`', 84, '~', 85, '§', 86, '±', 87,
  '1', 88, '2', 89, '3', 90, '4', 91, '5', 92, '6', 93, '7', 94, '8', 95,
  '9', 96, '0', 97];

function createSubTable(arr, dictObj) {

  for (let i = 0; i < arr.length; i++) {

    let j = i + 1;

    dictObj[arr[i]] = arr[j];
  }

  return dictObj;

}

letterNumberSubTable = createSubTable(letNumArr, letterNumberSubTable);

//create letter number class
class LetterNumber {

  constructor(subTable) {
    this.subTable = subTable;
  }

  encrypt(stringToEncrypt, cipherKey) {

    let encodedMessage = '';

    for (let i = 0; i < stringToEncrypt.length; i++) {

      // convert string to integer
      let keyValue = parseInt(this.subTable[stringToEncrypt.charAt(i)]);

      // shift value of the letter by the amount in the cipherKey
      // if keyValue + cipherKey is over 99, reset value and add remainder
      if (keyValue + cipherKey <= 99) {

        keyValue += cipherKey;

      } else if ((keyValue + cipherKey) > 99) {

        let x = 0;

        if (keyValue > cipherKey) {

          x = keyValue - cipherKey;

        }
      }

      // convert integer back to string
      let backToString = String(keyValue);

      if (backToString.length === 1) {

        backToString = '0' + backToString;
      }

      encodedMessage = encodedMessage.concat(backToString);
    }
    return encodedMessage;
  }
}

const letNum = new LetterNumber(letterNumberSubTable);

console.log((letNum.encrypt('Hi, Ed!', 3)));
