class LetterNumber {
    constructor(charset) {
      this.charset = charset;
    }
  
    encrypt(plaintext, key) {
      let encryptedResult = "";
      for (let char of plaintext) {
        if (this.charset.includes(char)) {
          const charIndex = this.charset.indexOf(char);
          let encryptedValue = charIndex + key;
  
          // Reset to 0 if encrypted value is greater than 99
          encryptedValue %= 100;
  
          // Ensure each encrypted value is two characters
          encryptedResult += String(encryptedValue).padStart(2, "0");
        } else {
          // For non-alphabetic characters, append them unchanged
          encryptedResult += char;
        }
      }
  
      return encryptedResult;
    }
  }
  
  // Test cases
  const letterNumber = new LetterNumber("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:'\",.<>/?`~ ");
  console.log(letterNumber.encrypt("a", 1));          // "03"
  console.log(letterNumber.encrypt("Ed", 4));         // "3609"
  console.log(letterNumber.encrypt("Hi, Ed!", 302));  // "37128003340756"
  