import("node-fetch");

const url = 'https://gist.githubusercontent.com/dearshrewdwit/691c71616995ad2430ab309aa9998745/raw/78624a6c9499e049fd294ddb8302d93e6f675a0d/character_set.txt'
const substitutionDict = {};

async function loadSubstitutionDict() {
    const response = await fetch(url);
    const tableOfValues = await response.text();
    tableOfValues.split("\n").forEach(line => {
        const [key, value] = line.split(', ');
        substitutionDict[key] = value;
    });
}

function encript(string) {
    encripted_string = '';
    characters = string.split('');
    characters.forEach(character => {
        encripted_string += substitutionDict[character];
    });
    return encripted_string;
}

loadSubstitutionDict()
    .then(() => {
        console.log(encript('E'));
        console.log(encript('Ed'));
        console.log(encript('Ed'));
        console.log(encript('Hi, Ed!'));
    });
