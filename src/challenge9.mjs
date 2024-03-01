import letterLetterMap from "./utils/letterLetterMap.mjs";
import letterNumberMap from "./utils/letterNumberMap.mjs";

class Cypher {
  constructor(charMap, options) {
    this._charValueMap = charMap;
    this._valueCharMap = {};
    for (const [char, value] of Object.entries(charMap)) {
      this._valueCharMap[value] = char;
    }
    this._padToLength = options?.padding?.paddToLength;
    this._paddingChar = options?.padding?.paddingChar || "?";
  }

  encrypt(str, key) {
    let encryptedText = "";
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (!this._charValueMap.hasOwnProperty(char)) continue;

      //get current char
      let encryptedChar = this._charValueMap[char];
      //Apply key where applicable
      if (key !== undefined) encryptedChar = `${(+encryptedChar + key) % 100}`;
      //Apply padding where applicable
      if (this._padToLength)
        encryptedChar = encryptedChar.padStart(
          this._padToLength,
          this._paddingChar
        );
      //Add encrypted char to return string
      encryptedText += encryptedChar;
    }
    return encryptedText;
  }

  decrypt(str, key) {
    let plainText = "";

    for (let i = 0; i < str.length; i += this._padToLength ?? 1) {
      //get current char/chars
      let encryptedChar = str.slice(i, i + (this._padToLength || 1));
      //Apply key where applicable
      if (key) encryptedChar = (((encryptedChar - key) % 100) + 100) % 100;

      if (!this._valueCharMap.hasOwnProperty(encryptedChar)) continue;

      const decryptedChar = this._valueCharMap[encryptedChar];
      plainText += decryptedChar;
    }

    return plainText;
  }
}

let plaintext = "Look over there!";
let mysteriousText = `~JtMy m&DmwDD*mXm*tu2AXM2t!w mewMDm[!JmADX*m2§tum.DuuX£D$m3tw*m2§DmM!..Jwt2[mM§XwwD7mwX.D*mNAXw*!.Nm!wmGtuM!A*$mXw*mu§XADmXmAXw*!.m3XM2mAD£XA*tw£mXw[mtwuDM2m?mpJ2mt2m§Xum2!mpDmXp!J2mtwuDM2u m^tw£DAumMA!uuD*m2§tum_t77m*tu2AXM2mXw*mu7!\_m*!\_wm2§Dm%D!%7DmMAXMytw£m2§DuDmMt%§DAu`;
let key = 31045;

const letterLetterCipher = new Cypher(letterLetterMap);
const letterNumberCipher = new Cypher(letterNumberMap, {
  padding: { paddToLength: 2, paddingChar: "0" },
});

console.log(letterLetterCipher.decrypt(mysteriousText)); //Quick! We need a distraction! Once you read this message, find the community channel named "random" on Discord, and share a random fact regarding any insect - but it has to be about insects! Fingers crossed this will distract and slow down the people cracking these ciphers

console.log(
  plaintext ===
    letterNumberCipher.decrypt(letterNumberCipher.encrypt(plaintext, key), key)
    ? "Pass"
    : "Fail"
);
console.log(
  plaintext ===
    letterLetterCipher.decrypt(letterLetterCipher.encrypt(plaintext))
    ? "Pass"
    : "Fail"
);
