// I want to be able to encrypt a string using letter-number substitution according to this [table of values](https://gist.github.com/dearshrewdwit/691c71616995ad2430ab309aa9998745)

const fs = require("fs")
const readline = require("readline")

var myDict = {};
// Create a readable stream from charcter_set.txt file
const myFile = readline.createInterface({
    input: fs.createReadStream("./src/character_set.txt"),
    output: process.stdout,
});

myFile.on("line", (line) => {
    if (!line.includes("character")) {
        myDict[line[0]] = line.slice(3);
    }
    console.log(myDict);
});


function encryptString(string) {
    let encryptedNumber = "";
    for (let i = 0; i < string.length; i++){
        if (string[i] in myDict) {
            encryptedNumber.concat(myDict[string]);
        }
    }
    return encryptedNumber
}
