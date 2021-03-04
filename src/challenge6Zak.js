// Read the text splitting the file for each line ('\r\n')

function importData(filepath) {
var fs  = require("fs");
let array = fs.readFileSync(filepath).toString().split('\r\n');

// Seperate the characters and values in the array
for (i = 0; i<array.length; i++) {
    array[i] = array[i].split(', ')
}
array = array.slice(0);

//Make an object containing all key value pairs
const charset = Object.fromEntries(array);
return charset
}

//Split String and empty string for value

function encrypt(string) {
    
//Calling upon import data function
const charset = importData('character_set.txt')

let val = '';
let chars = string.split('');
for (i = 0; i<chars.length;i++) {
    val += charset[chars[i]]
}
return val
}

val = encrypt('Hi, Ed!')
console.log(val)