#### Requirements
I want to be able to encrypt a string using letter-number substitution according to this [table of values](https://gist.github.com/dearshrewdwit/691c71616995ad2430ab309aa9998745)
```
"E" -> "32"
"d" -> "5"
"Ed" -> "325"
"Hi, Ed!" -> "351078132554"
```

Use your best judgment with your pair partner. If you want clarification, ask your coach.




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