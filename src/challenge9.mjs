import {
  characterSetPaths,
  getCharacterSet,
} from "./utils/getCharacterSet.mjs";
import Cypher from "./utils/Cypher.mjs";

//Get character Sets
const letterNumberCharacterSet = await getCharacterSet(
  characterSetPaths.letterNumber
);
const letterLetterCharacterSet = await getCharacterSet(
  characterSetPaths.letterLetter
);

//Initialise Cyphers
const letterNumberCypher = new Cypher(letterNumberCharacterSet, {
  padding: { length: 2, character: "0" },
});
const letterLetterCipher = new Cypher(letterLetterCharacterSet);

//Run Tests
let plaintext = "Look over there!";
let key = 31045;

const tests = [
  {
    cypher: letterNumberCypher,
    plaintext,
    encryptedText: "84616157466168516446665451645199",
    key,
  },
  {
    cypher: letterLetterCipher,
    plaintext,
    encryptedText: "B!!ym!9DAm2§DAD ",
  },
  {
    cypher: letterLetterCipher,
    plaintext: `Quick! We need a distraction! Once you read this message, find the community channel named "random" on Discord, and share a random fact regarding any insect - but it has to be about insects! Fingers crossed this will distract and slow down the people cracking these ciphers`,
    encryptedText:
      "~JtMy m&DmwDD*mXm*tu2AXM2t!w mewMDm[!JmADX*m2§tum.DuuX£D$m3tw*m2§DmM!..Jwt2[mM§XwwD7mwX.D*mNAXw*!.Nm!wmGtuM!A*$mXw*mu§XADmXmAXw*!.m3XM2mAD£XA*tw£mXw[mtwuDM2m?mpJ2mt2m§Xum2!mpDmXp!J2mtwuDM2u m^tw£DAumMA!uuD*m2§tum_t77m*tu2AXM2mXw*mu7!_m*!_wm2§Dm%D!%7DmMAXMytw£m2§DuDmMt%§DAu",
  },
];

tests.forEach((test, i) => {
  //Encryption Test
  const encryptedResult = test.cypher.encrypt(test.plaintext, test.key);
  console.log(
    `${i}a: ${test.plaintext}->${encryptedResult} ${
      encryptedResult === test.encryptedText
        ? "Pass"
        : `Fail (expected: ${test.encryptedText})`
    }`
  );
  //Decryption Test
  const plainTextResult = test.cypher.decrypt(test.encryptedText, test.key);
  console.log(
    `${i}b: ${test.encryptedText}->${plainTextResult} ${
      plainTextResult === test.plaintext
        ? "Pass"
        : `Fail (expected: ${test.plaintext})`
    }`
  );
});
