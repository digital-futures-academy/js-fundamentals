import letterNumberMap from "./utils/letterNumberMap.mjs";

class LetterNumber {
  constructor(charMap) {
    this._charMap = charMap;
  }

  encrypt(str, offSet) {
    return str
      .split("")
      .map((char) => {
        if (!this._charMap.hasOwnProperty(char)) return "";
        return `${(this._charMap[char] + offSet) % 100}`.padStart(2, "0");
      })
      .join("");
  }
}

const tests = [
  {
    args: ["a", 1],
    expected: "03",
  },
  {
    args: ["Ed", 4],
    expected: "3609",
  },
  {
    args: ["Hi, Ed!", 302],
    expected: "37128003340756",
  },
];

function runTests(fn, tests) {
  const didPass = tests.every((test) => fn(...test.args) === test.expected);
  console.log(didPass ? "All tests passed" : "Fail");
}

runTests(
  (str, key) => new LetterNumber(letterNumberMap).encrypt(str, key),
  tests
);
