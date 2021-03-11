let letterEncrypt = {' ': 'm', 'a': 'X', 'b': 'p', 'c': 'M', 'd': '*', 'e': 'D',
'f': '3', 'g': '£', 'h': '§', 'i': 't', 'j': 'Y', 'k': 'y', 'l': '7', 'm': '.', 
'n': 'w', 'o': '!', 'p': '%', 'q': 'g', 'r': 'A', 's': 'u', 't': '2', 'u': 'J',
'v': '9', 'w': '_', 'x': '@', 'y': '[', 'z': 'L', 'A': 'h', 'B': 'q', 'C': '0', 
'D': 'G', 'E': 'j', 'F': '^', 'G': 'Z', 'H': ']', 'I': 'I', 'J': '|', 'K': '>',
'L': 'B', 'M': 'c', 'N': 'i', 'O': 'e', 'P': ';', 'Q': '~', 'R': ':', 'S': 'P', 
'T': '±', 'U': 'k', 'V': 'S', 'W': '&', 'X': '+', 'Y': 'l', 'Z': 'a', '!':' ',
'@': 'R', '£': ':', '$': '}', '%': 'n', '^': 'z', '&': 'F', '*': '8', '(': 'C',
')': '-', '-': '?', '_': 'x', '=': '5', '+': 'U', '[': 'K', ']': 'v', '{': '=',
'}': '<', ';': '1', ':': 'd', "'": '{', '"': 'N', '\\': 'O', '|': 'b', ',': '$',
'.': 'Q', '<': 'H', '>': '(', '/': '\\', '?': '4', '`': ')', '~': 's', '§': '6', 
'±': 'V', '1': 'o', '2': 'W', '3': '"', '4': 'E', '5': "'", '6': 'r', '7': '/',
'8': '`', '9': 'f', '0': 'T'};

let score = {' ': 1, 'a': 2, 'b': 3, 'c': 4, 'd': 5, 'e': 6, 'f': 7, 'g': 8, 'h': 9, 'i': 10, 'j': 11, 'k': 12, 'l': 13, 'm': 14, 'n': 15, 'o': 16, 'p': 17, 'q': 18, 'r': 19,
's': 20, 't': 21, 'u': 22, 'v': 23, 'w': 24, 'x': 25, 'y': 26, 'z': 27, 'A': 28, 'B': 29, 'C': 30, 'D': 31, 'E': 32, 'F': 33, 'G': 34, 'H': 35, 'I': 36, 'J': 37, 'K': 38,
'L': 39, 'M': 40, 'N': 41, 'O': 42, 'P': 43, 'Q': 44, 'R': 45, 'S': 46, 'T': 47, 'U': 48, 'V': 49, 'W': 50, 'X': 51, 'Y': 52, 'Z': 53, '!': 54, '@': 55, '£': 56, '$': 57,
'%': 58, '^': 59, '&': 60, '*': 61, '(': 62, ')': 63, '-': 64, '_': 65, '=': 66, '+': 67, '[': 68, ']': 69, '{': 70, '}': 71, ';': 72, ':': 73, "'": 74, '"': 75, '\\': 76, 
'|': 77, ',': 78, '.': 79, '<': 80, '>': 81, '/': 82, '?': 83, '`': 84, '~': 85, '§': 86, '±': 87, '1': 88, '2': 89, '3': 90, '4': 91, '5': 92, '6': 93, '7': 94, '8': 95,
'9': 96, '0': 97};

//have to module export at bottom make the methods and then take the arguments 
//ll i think finds it 
//also will have to read in the file
const fs = require('fs');

process.argv.forEach((val, index) => {
    if(index === 1){
        
    }
    console.log(`${index}: ${val}`);
  });

fs.readfile(fileName,'utf8', (err,data) => {
    if(err){
        console.error(err);
        return
    }
    return data;
})

fs.writeFile(filename, data, (err) => { 
    if (err){
        console.log(err);
        return
    } 
}) 

const numberEncrypt = (text, key) => {
    let sentence = fs.readfile(text)
    let ans = '';
    for(let i = 0; i<text.length; i++){
        let temp = score[text[i]] + key;
        temp = temp % 99;
        if(temp < 10){
            ans += '0';
            ans += temp;
        }
        else{
            ans += temp;
        }
    }
    return fs.writeFile(ans);
}

const numberDecrypt = (text, key) => {
    let sentence = fs.readfile(text);
    let ans = '';
    for(let i = 0; i < sentence.length; i += 2){
        let temp = parseInt(sentence.slice(i, i+2)) - key;
        if(temp >= 97){
            while(temp >= 97){
                temp -= 99;
            }
        }
        else if(temp <= 0){
            while(temp <= 0){
                temp += 99;
            }
        }
        ans += Object.keys(score).find(key => score[key] === temp);
    }
    return fs.writeFile(ans);
}

const letEncrypt = (text) => {
    let sentence = fs.readfile(text);
    let ans = '';
    for(let i = 0; i<sentence.length; i++){
        let temp = letterEncrypt[sentence[i]];
        ans += temp;
    }
    return fs.writeFile(ans);
}

const letterDecrypt = (text) => {
    let sentence = fs.readfile(text);
    let ans = '';
    for(let i = 0; i < sentence.length; i++){
        let temp = sentence[i];
        ans += Object.keys(letterEncrypt).find(key => letterEncrypt[key] === temp);
    }
    return fs.writeFile(ans);
}
 
//need process funciton
//need to check if encrypt or decrypt
//if encrypt should write file into filename + enc
//if decrypt should write file into filname - enc


