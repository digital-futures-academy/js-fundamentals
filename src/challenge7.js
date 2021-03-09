const fs = require('fs')
let characters

try {
    characters = fs.readFileSync('/Users/sarah2/Documents/DigitalFutures/DigitalFutures/js-fundamentals/src/charachterset.txt', 'utf8');
  } catch (err) {
    console.error(err)
  }

const array = characters.split('\n');




class LetterNumber {
    constructor(){
        this.dic = {}
        for (let x=1; x<=array.length-1; x++){
            this.dic[array[x].split(', ')[0]]=array[x].split(', ')[1]
        }
    }
   
    encrypt(line, number){
        let str="";
        while (number > 99){
            number-=99
        }

        for (let i=0;i<line.length;i++){
            let code = +this.dic[line[i]] + +number;
            if(code<=9){
                str+=`0${code}`;
            } else if(code<=99){
                    str+=code;
            }else {
                str+=code - 99
            }
        }
            return str
    }
}
        
  

letterNumber = new LetterNumber
console.log(letterNumber.encrypt("Hi, Ed!", 302));