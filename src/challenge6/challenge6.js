function change(oldchar, newchar, oldstr) {
    for (var i = 0; i < oldstr.length; i++) {
        console.log[oldstr.length];
        for (var j = 0; j < newchar.length - 1; j++) {
            if (oldstr[i] == oldchar[j]) {
                newstr += newchar[j];
            } else {
                continue
            }
        }
    }
    return newstr;
}


const oldstr = "Hi, Ed!"; //message that needs encrypting
var newstr = "";
var oldchar = [];
var newchar = [];


const fs = require('fs');

const allFileContents = fs.readFileSync('supporting-files\\character_set.txt', 'utf-8');
allFileContents.split(/\r?\n/).forEach(line => {
    var temp = line.split(",");
    oldchar.push(temp[0]);
    newchar.push(temp[1]);
});

console.log(change(oldchar, newchar, oldstr));