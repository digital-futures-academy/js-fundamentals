let plaintext = 'Look over there!'
let key = 31045

class LetterNumberCipher {
    constructor(){
        const fs = require('fs')
        this.characters

    try {
    this.characters = fs.readFileSync('/Users/sarah2/Documents/DigitalFutures/DigitalFutures/js-fundamentals/src/charachterset.txt', 'utf8');
    } catch (err) {
    console.error(err)
  }

    this.array = this.characters.split('\n');

    this.dic = {}

    }
   
    encrypt(plaintext, key){
        let str="";
        for (let x=1; x<=this.array.length-1; x++){
            this.dic[this.array[x].split(', ')[0]]=this.array[x].split(', ')[1]
        }
        while (key > 99){
            key-=100
        }

        for (let i=0;i<plaintext.length;i++){
            let code = +this.dic[plaintext[i]] + +key;
            if(code<=9){
                str+=`0${code}`;
            } else if(code<=99){
                    str+=code;
            }else {
                str+=code - 100
            }
        }
            return str
    }

    decrypt(message, key){
        let str="";
        for (let x=1; x<=this.array.length-1; x++){
            this.dic[this.array[x].split(', ')[1]] = [this.array[x].split(', ')[0]]
        }
        while (key > 99){
            key-=100
        }
        for (let i=0;i<message.length;i+=2){
            let enc = +[message[i] + message[i+1]] - +key;
            if(enc>0){
                str+= this.dic[enc];
            } else {
                    str+= this.dic[+enc + 100];
            }
        }
            return str
    }
}

class LetterLetterCipher{
    constructor(){
        const fs = require('fs')
        this.characters

    try {
    this.characters = fs.readFileSync('/Users/sarah2/Documents/DigitalFutures/DigitalFutures/js-fundamentals/src/characterset2.txt', 'utf8');
    } catch (err) {
    console.error(err)
  }

    this.array = this.characters.split('\n');

    this.dic = {}
    }
   
    encrypt(plaintext){
        let str="";
        for (let x=1; x<=this.array.length-1; x++){
            this.dic[this.array[x].split(', ')[0]]=this.array[x].split(', ')[1]
        }

        for (let i=0;i<plaintext.length;i++){
            str+= this.dic[plaintext[i]]
        }
        return str
    }

    decrypt(message){
        let str="";
        for (let x=1; x<=this.array.length-1; x++){
            this.dic[this.array[x].split(', ')[1]] = [this.array[x].split(', ')[0]]
        }
       
        for (let i=0;i<message.length;i++){
                str+= this.dic[message[i]];
            }
            return str
    }
}  

letterNumberCipher = new LetterNumberCipher
letterLetterCipher = new LetterLetterCipher
console.log(letterNumberCipher.encrypt(plaintext, key));
console.log(letterNumberCipher.decrypt("84616157466168516446665451645199", key))
console.log(letterLetterCipher.encrypt(plaintext))
console.log(letterLetterCipher.decrypt("B!!ym!9DAm2§DAD "))

console.log(plaintext === letterNumberCipher.decrypt(letterNumberCipher.encrypt(plaintext, key), key))
console.log(plaintext === letterLetterCipher.decrypt(letterLetterCipher.encrypt(plaintext)))