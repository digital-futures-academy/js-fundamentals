const fs = require('fs')
let characters

try {
    characters = fs.readFileSync('/Users/sarah2/Documents/DigitalFutures/DigitalFutures/js-fundamentals/src/charachterset.txt', 'utf8');
  } catch (err) {
    console.error(err)
  }

const array = characters.split('\n');
let dic = {}

for (let x=1; x<=array.length-1; x++){
    dic[array[x].split(', ')[0]]=array[x].split(', ')[1]
}

function encrypt(line){
    let str=""
    for (let i=0;i<line.length;i++){
        str+=dic[line[i]]
    }
    return str
}

console.log(encrypt("Hi, Ed!"));