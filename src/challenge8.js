const fs = require('fs')
let alphabet


try {
    alphabet= fs.readFileSync('../character_set.txt', 'utf8')
   } catch(e){
    console.log(e)
}


const array=alphabet.split('\n')
let dict = {}
let reversedDict = {}



for (let x=1; x<=array.length-1; x++){
    dict[array[x].split(', ')[0]]=array[x].split(', ')[1]
    reversedDict[array[x].split(', ')[1]]=array[x].split(', ')[0]
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
        return ans
    }
    decrypt(string, offset){
        let ans=''
        for (let i=0; i<string.length; i+=2){
            let value=parseInt(string.slice(i,i+2))-offset
            if (value<1){
                while (value<1){
                    value+=99
                    }
                }
            ans += reversedDict[value]
            }
        return ans
    }

}



let inst= new LetterNumber()
console.log(inst.decrypt('5520402829343120552028214225203041394020402825204028293427982047203225404025388332254040253820394122394029404140293534202329362825387320582540933920243520294073', 4771))