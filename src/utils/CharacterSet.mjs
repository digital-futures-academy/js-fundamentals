export default class CharacterSet {
  #charValueMap;
  #valueCharMap;
  constructor(charValueCsvs) {
    this.#charValueMap = {};
    this.#valueCharMap = {};
    charValueCsvs.forEach((charValueCsv) => {
      const char = charValueCsv[0];
      const value = charValueCsv.slice(3);
      this.#charValueMap[char] = value;
      this.#valueCharMap[value] = char;
    });
  }

  getValueByCharacter(char) {
    return this.#charValueMap[char];
  }
  getCharacterByValue(value) {
    return this.#valueCharMap[value];
  }
}
