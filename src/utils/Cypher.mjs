export default class Cypher {
  #characterSet;
  constructor(charMap, options) {
    this.#characterSet = charMap;
    this._padToLength = options?.padding?.length;
    this._paddingCharacter = options?.padding?.character || "?";
  }

  encrypt(str, key) {
    let encryptedText = "";
    for (let i = 0; i < str.length; i++) {
      const character = str[i];
      let encryptedChar = this.#characterSet.getValueByCharacter(character);

      if (key !== undefined) encryptedChar = `${(+encryptedChar + key) % 100}`;

      if (this._padToLength)
        encryptedChar = encryptedChar.padStart(
          this._padToLength,
          this._paddingCharacter
        );
      encryptedText += encryptedChar;
    }
    return encryptedText;
  }

  decrypt(str, key) {
    let plainText = "";
    for (let i = 0; i < str.length; i += this._padToLength ?? 1) {
      let encryptedChar = str.slice(i, i + (this._padToLength || 1));

      if (key) encryptedChar = (((+encryptedChar - key) % 100) + 100) % 100;

      const decryptedChar = this.#characterSet.getCharacterByValue(
        `${encryptedChar}`
      );
      plainText += decryptedChar;
    }

    return plainText;
  }
}
