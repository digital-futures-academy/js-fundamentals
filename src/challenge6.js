/*I want to be able to encrypt a string using letter - number substitution according to this table of values

"E" -> "32"
"d" -> "5"
"Ed" -> "325"
"Hi, Ed!" -> "351078132554"
*/

function letterToNumber(fileName) {
    let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    let file = new XMLHttpRequest();
    let substitution = {};
    file.open("GET", fileName, false);
    file.onreadystatechange = function () {
        if (file.readyState === 4) {
            if (file.status === 200 || file.status == 0) {
                let fileContent = file.responseText;
                let lineArr = fileContent.split('\n');
                for (let i = 1; i < lineArr.length; i++) {
                    let line = lineArr[i].split(', ');
                    let firstParam = line[0];
                    let secondParam = line[1].trim();
                    substitution[firstParam] = secondParam;
                }
            }
        }
    }
    file.send(null);
    return substitution;
}

const encryptString = (file, text) => {
    let encrypted = '';
    let letterToNumberMapping;
    for (let i = 0; i < text.length; i++) {
        let c = text[i];
        letterToNumberMapping = letterToNumber(file);
        encrypted += letterToNumberMapping[c];
    }
    console.log("Mapping of letter - number substitution is: \n", letterToNumberMapping);
    console.log("Encrypted string for " + text + " is: " + encrypted);

};

encryptString("file:///Users/mitchellchaudhary/Desktop/character_set.txt", "Hi, Ed!");