const fs = require('fs');
var file = fs.readFileSync("character_set.txt");
file = file.toString().split('\n').slice(2);
var characters = {}
characters[' '] = '1';
for (var line in file){
    var codes = file[line].split(',');
    if (codes[0] == ''){
        characters[','] = '78';
    }
    else{
        characters[codes[0].trim()] = codes[1].trim(); 
    }
}

console.log(characters);

function convert(character){
    return characters[character];
}

function convertString(string){
    var newString = ""; 
    for (var char in string){
        newString = newString + convert(string[char]); 
    }
    return newString; 
}
