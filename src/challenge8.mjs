import letterNumberMap from "./utils/letterNumberMap.mjs";

class LetterNumber {
  constructor(charValueMap) {
    this._charValueMap = charValueMap;
    this._valueCharMap = {};
    for (const [char, value] of Object.entries(charValueMap)) {
      this._valueCharMap[value] = char;
    }
  }

  decrypt(str, key) {
    let plainText = "";
    for (let i = 0; i < str.length; i += 2) {
      const encryptedChar = Number(`${str[i]}${str[i + 1]}`);
      const value = (((encryptedChar - key) % 100) + 100) % 100;
      const decryptedChar = this._valueCharMap.hasOwnProperty(value)
        ? this._valueCharMap[value]
        : "";
      plainText += decryptedChar;
    }
    return plainText;
  }
}

const key = 4771;
const tests = [
  {
    args: [
      "0681497203762572077292808186837291878577878677459172878672928772928081917275818880779025",
      key,
    ],
    expected: "Hi, Ed! I think someone's on to this cipher!",
  },
  {
    args: [
      "21774590777279878686737286777776729287727587857772938872958192807273728677957287867750",
      key,
    ],
    expected: "We're gonna need to come up with a new one.",
  },
  {
    args: [
      "0772928081868372077280739477728293919272928077729280818679507299728477929277903584779292779072919374919281929392818786727581888077902572107792459172768772819225",
      key,
    ],
    expected:
      "I think I have just the thing. A letter-letter substitution cipher! Let's do it!",
  },
];

function runTests(fn, tests) {
  const didPass = tests.every((test) => fn(...test.args) === test.expected);
  console.log(didPass ? "All tests passed" : "Fail");
}

runTests(
  (str, key) => new LetterNumber(letterNumberMap).decrypt(str, key),
  tests
);
