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
            this.dic[array[x].split(', ')[1]] = [array[x].split(', ')[0]]
        }
    }

    decrypt(message, number){
        let str="";
        while (number > 99){
            number-=99
        }
        for (let i=0;i<message.length;i+=2){
            let enc = +[message[i] + message[i+1]] - +number;
            if(enc>0){
                str+= this.dic[enc];
            } else {
                    str+= this.dic[+enc + 99];
            }
        }
            return str
    }

}
        
  

letterNumber = new LetterNumber
console.log(letterNumber.decrypt("5520402829343120552028214225203041394020402825204028293427982047203225404025388332254040253820394122394029404140293534202329362825387320582540933920243520294073", 4771))