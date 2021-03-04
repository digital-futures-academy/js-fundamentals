// Read the text splitting the file for each line ('\r\n')

function importData(filepath) {
var fs  = require("fs");
let array = fs.readFileSync(filepath).toString().split('\r\n');

// Seperate the characters and values in the array
for (i = 0; i<array.length; i++) {
    array[i] = array[i].split(', ')
}
array = array.slice(1);

//Make an object containing all key value pairs
const charset = Object.fromEntries(array);
return charset
}

//Calling upon import data function
const charset = importData('character_set.txt')

//Split String and empty string for value

function encrypt(string, charset) {
let val = '';
let chars = string.split('');
for (i = 0; i<chars.length;i++) {
    val += charset[chars[i]]
}
return val
}

val = encrypt('Hi, Ed!',charset)
console.log(val)

//}
//Decode
//console.log(decodeString('Ed'));