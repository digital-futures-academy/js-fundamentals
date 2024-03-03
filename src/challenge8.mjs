import {
  characterSetPaths,
  getCharacterSet,
} from "./utils/getCharacterSet.mjs";
import Cypher from "./utils/Cypher.mjs";

//Get character Set
const letterNumberCharacterSet = await getCharacterSet(
  characterSetPaths.letterNumber
);

//Initialise Cypher
const letterNumberCypher = new Cypher(letterNumberCharacterSet, {
  padding: { length: 2, character: "0" },
});

//Run Tests
const tests = [
  {
    encryptedText:
      "0681497203762572077292808186837291878577878677459172878672928772928081917275818880779025",
    key: 4771,
  },
  {
    encryptedText:
      "21774590777279878686737286777776729287727587857772938872958192807273728677957287867750",
    key: 4771,
  },
  {
    encryptedText:
      "0772928081868372077280739477728293919272928077729280818679507299728477929277903584779292779072919374919281929392818786727581888077902572107792459172768772819225",
    key: 4771,
  },
];
const expectedResults = [
  "Hi, Ed! I think someone's on to this cipher!",
  "We're gonna need to come up with a new one.",
  "I think I have just the thing. A letter-letter substitution cipher! Let's do it!",
];

tests.forEach((test, i) => {
  const expectedResult = expectedResults[i];
  const result = letterNumberCypher.decrypt(test.encryptedText, test.key);
  console.log(
    `${i + 1}: ${result} ${
      result === expectedResult ? "Pass" : `Fail (expected: ${expectedResult})`
    }`
  );
});
