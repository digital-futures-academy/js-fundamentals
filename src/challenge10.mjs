import fs from "fs/promises";
import {
  characterSetPaths,
  getCharacterSet,
} from "./utils/getCharacterSet.mjs";
import Cypher from "./utils/Cypher.mjs";

//Read command line arguments
const [selectedCypher, method, sourceFileName, key] = process.argv.slice(2);

if (method !== "enc" && method !== "decr") {
  throw new Error(
    `Invalid method (${method}): Please select either "enc" or "decr"`
  );
}

//Initialise Cypher
let characterSet;
let paddingOptions;
switch (selectedCypher) {
  case "ll":
    characterSet = await getCharacterSet(characterSetPaths.letterLetter);
    break;
  case "ln":
    characterSet = await getCharacterSet(characterSetPaths.letterNumber);
    paddingOptions = {
      padding: { length: 2, character: "0" },
    };
    break;
  default:
    throw new Error(
      `Invalid cypher (${selectedCypher}). Select either "ll" or "ln"`
    );
}
const cypher = new Cypher(characterSet, paddingOptions);

//Read file passed by user
const textFileRepositoryPath = "./text";
const sourceTextFilePath = `${textFileRepositoryPath}/${sourceFileName}`;
const encoding = "utf-8";
const sourceFileContent = await fs.readFile(sourceTextFilePath, encoding);

//Write to file
console.log(sourceFileContent);
if (method === "enc") {
  const encryptedText = cypher.encrypt(sourceFileContent, key);
  const newFilePath = `${sourceTextFilePath}.enc`;
  await fs.writeFile(newFilePath, encryptedText, encoding);
}

if (method === "decr") {
  const decryptedText = cypher.decrypt(sourceFileContent, key);
  await fs.writeFile(
    sourceTextFilePath.replace(".enc", ""),
    decryptedText,
    encoding
  );
}
