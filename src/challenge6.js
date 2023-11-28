/*#### Requirements
I want to be able to encrypt a string using letter-number substitution according to this[table of values](https://gist.github.com/dearshrewdwit/691c71616995ad2430ab309aa9998745)

"E" -> "32"
"d" -> "5"
"Ed" -> "325"
"Hi, Ed!" -> "351078132554"

    Use your best judgment with your pair partner.If you want clarification, ask your coach.
*/

//Stores the key-value pairs for encryption.
class Keys {
    constructor() {
        this._keys = new Array();
    }

    get keys() {
        return (this._keys)
    }

    //Assigns key-value pairs for encryption
    addKey(key_pair) {
        this._keys.push([key_pair[0], key_pair.slice(3)]);
    }
}

//Converts a character to a number.
function convert(char) {
    for (let i = 0; i < keys.keys.length; i++) {
        if (char === keys.keys[i][0]) {
            return (keys.keys[i][1]);
        }
    }
}

//Converts a string into the equivalent encrypted form.
function encryptString(string) {
    let encrypted_string = ''
    for (let i = 0; i < string.length; i++) {
        encrypted_string += convert(string[i])
    }
    return (encrypted_string);
}

//Initialise required packages and set up the keys for parsing.
const keys = new Keys()
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: fs.createReadStream('src\\challenge6.txt')
});

//Listens for events as rl reads the file.
rl.on('line', (line) => {
    if (line !== "character, value") {
        keys.addKey(line);
    }
})
    .on('close', function () {
        console.log(encryptString("Hi, Ed!"));
    })

