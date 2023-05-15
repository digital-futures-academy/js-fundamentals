// load() function was initially in this file, 
// I refactored it in a new file when implementing challenge7
const substitutionDictLoader = require("./substitutionDictLoader");

function encript(string, substitutionDict) {
    let encripted_string = '';
    let characters = string.split('');
    characters.forEach(character => {
        encripted_string += substitutionDict[character];
    });
    return encripted_string;
}

substitutionDictLoader.load()
    .then((result) => {
        console.log(encript('E', result));
        console.log(encript('Ed', result));
        console.log(encript('Ed', result));
        console.log(encript('Hi, Ed!', result));
    });
