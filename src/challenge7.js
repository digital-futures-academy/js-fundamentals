const fs = require('fs')
let alphabet


try {
    alphabet= fs.readFileSync('../character_set.txt', 'utf8')
   } catch(e){
    console.log(e)
}


const array=alphabet.split('\n')
let dict = {}

for (let x=1; x<=array.length-1; x++){
    dict[array[x].split(', ')[0]]=array[x].split(', ')[1]
}


class LetterNumber{
    encrypt(string, offset){
        let ans = ''
        for (let i = 0; i < string.length; i++) {
            let value = (parseInt(dict[string[i]])+offset)
            if (value>99) {
                value=value%99
            }
            if (value < 10) {
            ans += `0${value}`
            }
            else {ans += value}
        }
        console.log(ans)
    }
}

let inst=new LetterNumber()
inst.encrypt('Hi, Ed!', 302)

