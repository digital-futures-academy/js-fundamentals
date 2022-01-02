const fs = require("fs");
const path = require("path");

fs.readFile(path.resolve(process.cwd(), "data", "charSet1.txt"), "utf-8", (err, data) => {
    const charDict = data.split("\n").slice(1).reduce((acc, curr) => {
        const pairSplit = curr.split(", ");
        acc[pairSplit[0]] = pairSplit[1].replace("\r", "");
        return acc;
    }, {});
    
    const encrypt = (str) => str.split("").reduce((acc, curr) => acc + (charDict[curr] || ""), "");
    
    console.log(encrypt("E"));
    console.log(encrypt("d"));
    console.log(encrypt("Ed"));
    console.log(encrypt("Hi, Ed!"));
});