// load() function was initially in this file, 
// I refactored it in a new file when implementing challenge7
const substitutionDictLoader = require("./substitutionDictLoader");

function encript(string, substitutionDict) {
    let encrypted_string = '';
    let characters = string.split('');
    characters.forEach(character => {
        encrypted_string += substitutionDict[character];
    });
    return encrypted_string;
}

substitutionDictLoader.load()
    .then((result) => {
        console.log(encript('E', result));
        console.log(encript('Ed', result));
        console.log(encript('Ed', result));
        console.log(encript('Hi, Ed!', result));
    });
