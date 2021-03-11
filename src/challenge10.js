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

const fs = require('fs');

let request = [];

process.argv.forEach((val) => {
    request.push(val);
  });

const check = (func) =>{
    if(func === 'numberEncrypt'){
        numberEncrypt(request[3], request[4]);
    }
    else if(func === 'numberDecrypt'){
        numberDecrypt(request[3], request[4]);
    }
    else if(func === 'letEncrypt'){
        letEncrypt(request[3]);
    }
    else if(func === 'letterDecrypt'){
        letterDecrypt(request[3]);
    }
    else{
        throw new Error('Please choose a method');
    }
}


const numberEncrypt = (text, key = 1) => {
    let sentence = fs.readFileSync(text).toString();
    let ans = '';
    for(let i = 0; i<sentence.length; i++){
        let temp = score[sentence[i]] + key;
        temp = temp % 99;
        if(temp < 10){
            ans += '0';
            ans += temp;
        }
        else{
            ans += temp;
        }
    }
    fs.writeFile((`${text}.enc`), ans, (err) => {
        if(err){
            console.log(err);
            return;
        }
    })
}

const numberDecrypt = (text, key = 1) => {
    let sentence = fs.readFileSync(text).toString();
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
    fs.writeFile((text.slice(0, text.length -4)), ans, (err) => {
        if(err){
            console.log(err);
            return;
        }
    })
}

const letEncrypt = (text) => {
    let sentence = fs.readFileSync(text).toString();
    let ans = '';
    for(let i = 0; i<sentence.length; i++){
        let temp = letterEncrypt[sentence[i]];
        ans += temp;
    }
    return fs.writeFile((text + '.enc'), ans);
}

const letterDecrypt = (text) => {
    let sentence = fs.readFileSync(text).toString();
    let ans = '';
    for(let i = 0; i < sentence.length; i++){
        let temp = sentence[i];
        ans += Object.keys(letterEncrypt).find(key => letterEncrypt[key] === temp);
    }
    fs.writeFile((text.slice(0, text.length -4)), ans, (err) => {
        if(err){
            console.log(err);
            return;
        }
    })
}
 

check(request[2]);




