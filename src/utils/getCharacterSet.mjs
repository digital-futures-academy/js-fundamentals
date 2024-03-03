import readLines from "./readLines.mjs";
import CharacterSet from "./CharacterSet.mjs";

export const characterSetPaths = {
  letterNumber: `C:\\Users\\Ben\\Desktop\\Courses\\Digital Futures\\js-fundamentals\\src\\utils\\character_set1.txt`,
  letterLetter: `C:\\Users\\Ben\\Desktop\\Courses\\Digital Futures\\js-fundamentals\\src\\utils\\character_set2.txt`,
};

export async function getCharacterSet(textFilePath) {
  const charSet1TxtFileLines = await readLines(textFilePath);
  return new CharacterSet(charSet1TxtFileLines);
}
