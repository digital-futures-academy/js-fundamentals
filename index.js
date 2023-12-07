#!/usr/bin/env node
const { LetterLetter, LetterNumber } = require("./src/challenge9.js");
const fs = require("fs").promises;

const cipherType = process.argv[2];
const job = process.argv[3];
const fileName = process.argv[4];
const key=Math.floor(process.argv[5])||0


if (cipherType != "ll" && cipherType != "ln") {
  console.log("Invalid cipher type use ll or ln");
  console.log("Usage $cipher [cipherType] [job] [path/to/file] [optional key]");
  return;
}
if (job != "enc" && job != "dec") {
  console.log("Invalid jobtype use enc or dec");
  console.log("Usage $cipher [cipherType] [job] [path/to/file] [optional key]");
  return;
}
if (!fileName.endsWith(".txt") && !fileName.endsWith(".txt.enc")) {
  console.log("Invalid output fileName use .txt or .txt.enc");
  console.log("Usage $cipher [cipherType] [job] [path/to/file] [optional key]");
  return;
}
//?????????????????????????????WOT??
if(typeof(key)!=Number && key<0){
    console.log("Invalid key, key must be a positive integer")
    console.log("Usage $cipher [cipherType] [job] [path/to/file] [optional key]");
    return
}
//////////////////////////////////////////
if (job === "enc") {
  return fs
    .readFile(`${__dirname}/${fileName}`, "UTF-8")
    .then((plaintext) => {
      if (cipherType === "ll") {
        const letterLetter = new LetterLetter();
        return letterLetter.encryptAsync(plaintext).then((encodedText) => {
          console.log(encodedText);
          fs.writeFile(`${__dirname}/${fileName}.enc`, encodedText, "UTF-8")
            .then(() => {
              console.log(`encoded file ${fileName}.enc created`);
              return;
            })
            .catch((err) => {
              console.log(err);
              return;
            });
        });
      }
      if(cipherType==="ln"){
        const letterNumber=new LetterNumber();
        return letterNumber.encryptAsync(plaintext,key).then((encodedText)=>{
            console.log(encodedText);
            fs.writeFile(`${__dirname}/${fileName}.enc`,encodedText,"UTF-8")
            .then(()=>{
                console.log(`encoded file ${fileName}.enc created, key: ${key}`)
                return
            })
        })
      }
    });
}
if(job==="dec"){
    return fs
    .readFile(`${__dirname}/${fileName}`, "UTF-8")
    .then((plaintext) => {
      if (cipherType === "ll") {
        const letterLetter = new LetterLetter();
        return letterLetter.decryptAsync(plaintext).then((decodedText) => {
          console.log(decodedText);
          fs.writeFile(`${__dirname}/${fileName.substring(0,fileName.indexOf(".enc"))}`, decodedText, "UTF-8")
            .then(() => {
              console.log(`decoded file ${fileName.substring(0,fileName.indexOf(".enc"))} created`);
              return;
            })
            .catch((err) => {
              console.log(err);
              return;
            });
        });
      }
      if(cipherType==="ln"){
        const letterNumber=new LetterNumber();
        return letterNumber.decryptAsync(plaintext,key).then((decodedText)=>{
            console.log(decodedText);
            fs.writeFile(`${__dirname}/${fileName.substring(0,fileName.indexOf(".enc"))}.enc`,decodedText,"UTF-8")
            .then(()=>{
                console.log(`encoded file ${fileName.substring(0,fileName.indexOf(".enc"))} created, key: ${key}`)
                return
            })
        })
      }
    });
}


