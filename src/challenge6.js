// #### Requirements
// I want to be able to encrypt a string using letter - number substitution according to this[table of values](https://gist.github.com/dearshrewdwit/691c71616995ad2430ab309aa9998745)
//     ```
// "E" -> "32"
// "d" -> "5"
// "Ed" -> "325"
// "Hi, Ed!" -> "351078132554"
// ```

//     Use your best judgment with your pair partner.If you want clarification, ask your coach.

const fs = require('fs');
let path = require('path');
let normalPath = path.normalize(__dirname + '/encodings.txt');

let fileContent = fs.readFileSync(normalPath, 'utf8');

let encodings = new Map();

// a, 22
// b, 1
let lines = fileContent.split("\r\n");
lines.forEach(element =>
{
    encodings.set(element[0], element.substring(3));

});

function encrypt(text)
{
    let encryptedText = '';

    for (let i = 0; i < text.length; i++)
    {
        let current = text[i];
        encryptedText += encodings.get(current);
    }

    return encryptedText;
}

console.log(encrypt("Hi, Ed!"));