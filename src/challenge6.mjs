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
const letterNumberCypher = new Cypher(letterNumberCharacterSet);

//Run Tests
const plainTextTests = ["E", "d", "Ed", "Hi, Ed!"];
const expectedResults = ["32", "5", "325", "351078132554"];

plainTextTests.forEach((plainText, i) => {
  const expectedResult = expectedResults[i];
  const result = letterNumberCypher.encrypt(plainText);
  console.log(
    `${i + 1}: ${plainText} -> ${result} ${
      result === expectedResult ? "Pass" : `Fail (expected: ${expectedResult})`
    }`
  );
});
