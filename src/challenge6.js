var fs = require('fs');
var content = fs.readFileSync('character_set.txt', 'utf8');

let getNumFromChar = (letter) => {
    let c = letter.charCodeAt(0);
    let test;
    //[A - Z] = [65 - 90] [a - z] : [97 - 122]
    if (((c > 64 && c < 91) || (c > 96 && c < 123))) {
        test = new RegExp(`(${letter},\\s\\d+)`, "g");
    } else {
        test = new RegExp(`(\\${letter},\\s\\d+)`, "g");
    }

    return content.match(test).toString().match(/(\s\d+)/g).toString().trim("");
};

let encryptStringToNum = (str) => {
    return str.split("").map(x => getNumFromChar(x)).join("");
};

//Test
console.log(encryptStringToNum("Hi, Ed!"));
// Expected output "351078132554"

