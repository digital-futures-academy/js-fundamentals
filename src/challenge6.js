const { charSet1 } = require("../data/charSets");

const charDict = charSet1.split("\n").reduce((acc, curr) => {
    const pairSplit = curr.split(", ");
    acc[pairSplit[0]] = pairSplit[1];
    return acc;
}, {});

const encrypt = (str) => str.split("").reduce((acc, curr) => acc + (charDict[curr] || ""), "");

console.log(encrypt("E"));
console.log(encrypt("d"));
console.log(encrypt("Ed"));
console.log(encrypt("Hi, Ed!"));