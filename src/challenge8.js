class LetterNumber {
    constructor(charValueMap) {
      this.charValueMap = charValueMap;
    }
  
    encrypt(plaintext, key) {
      let encryptedResult = "";
      for (let char of plaintext) {
        if (this.charValueMap[char] !== undefined) {
          const charValue = this.charValueMap[char];
          let encryptedValue = charValue + key;
  
          // Reset to 1 if encrypted value is greater than 97
          encryptedValue = encryptedValue > 97 ? 1 : encryptedValue;
  
          encryptedResult += encryptedValue;
        } else {
          // For non-alphabetic characters, append them unchanged
          encryptedResult += char;
        }
      }
  
      return encryptedResult;
    }
  
    decrypt(ciphertext, key) {
      let decryptedResult = "";
      for (let char of ciphertext) {
        if (this.charValueMap[char] !== undefined) {
          const charValue = this.charValueMap[char];
          let decryptedValue = charValue - key;
  
          // Wrap around to 97 if decrypted value is less than 1
          decryptedValue = decryptedValue < 1 ? 97 : decryptedValue;
  
          decryptedResult += String(decryptedValue);
        } else {
          // For non-alphabetic characters, append them unchanged
          decryptedResult += char;
        }
      }
  
      return decryptedResult;
    }
  }
  
  // Character set mapping
  const charValueMap = {
    " ": 1, "a": 2, "b": 3, "c": 4, "d": 5, "e": 6, "f": 7, "g": 8, "h": 9,
    "i": 10, "j": 11, "k": 12, "l": 13, "m": 14, "n": 15, "o": 16, "p": 17, "q": 18,
    "r": 19, "s": 20, "t": 21, "u": 22, "v": 23, "w": 24, "x": 25, "y": 26, "z": 27,
    "A": 28, "B": 29, "C": 30, "D": 31, "E": 32, "F": 33, "G": 34, "H": 35, "I": 36,
    "J": 37, "K": 38, "L": 39, "M": 40, "N": 41, "O": 42, "P": 43, "Q": 44, "R": 45,
    "S": 46, "T": 47, "U": 48, "V": 49, "W": 50, "X": 51, "Y": 52, "Z": 53, "!": 54,
    "@": 55, "£": 56, "$": 57, "%": 58, "^": 59, "&": 60, "*": 61, "(": 62, ")": 63,
    "-": 64, "_": 65, "=": 66, "+": 67, "[": 68, "]": 69, "{": 70, "}": 71, ";": 72,
    ":": 73, "'": 74, "\"": 75, "\\": 76, "|": 77, ",": 78, ".": 79, "<": 80, ">": 81,
    "/": 82, "?": 83, "`": 84, "~": 85, "§": 86, "±": 87, "1": 88, "2": 89, "3": 90,
    "4": 91, "5": 92, "6": 93, "7": 94, "8": 95, "9": 96, "0": 97
  };
  
  // Test cases
  const letterNumber = new LetterNumber(charValueMap);
  console.log(letterNumber.decrypt("0681497203762572077292808186837291878577878677459172878672928772928081917275818880779025", 4771));  // a human-readable sentence
  console.log(letterNumber.decrypt("21774590777279878686737286777776729287727587857772938872958192807273728677957287867750", 4771)); // a human-readable sentence
  console.log(letterNumber.decrypt("0772928081868372077280739477728293919272928077729280818679507299728477929277903584779292779072919374919281929392818786727581888077902572107792459172768772819225", 4771)); // a human-readable sentence
  
  // Additional test
  let plaintext = "hello, world";
  let key = 5;
  console.log(plaintext === letterNumber.decrypt(letterNumber.encrypt(plaintext, key), key));
  