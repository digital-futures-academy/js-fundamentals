characterSet = {
    ' ': 1,
    'a': 2,
    'b': 3,
    'c': 4,
    'd': 5,
    'e': 6,
    'f': 7,
    'g': 8,
    'h': 9,
    'i': 10,
    'j': 11,
    'k': 12,
    'l': 13,
    'm': 14,
    'n': 15,
    'o': 16,
    'p': 17,
    'q': 18,
    'r': 19,
    's': 20,
    't': 21,
    'u': 22,
    'v': 23,
    'w': 24,
    'x': 25,
    'y': 26,
    'z': 27,
    'A': 28,
    'B': 29,
    'C': 30,
    'D': 31,
    'E': 32,
    'F': 33,
    'G': 34,
    'H': 35,
    'I': 36,
    'J': 37,
    'K': 38,
    'L': 39,
    'M': 40,
    'N': 41,
    'O': 42,
    'P': 43,
    'Q': 44,
    'R': 45,
    'S': 46,
    'T': 47,
    'U': 48,
    'V': 49,
    'W': 50,
    'X': 51,
    'Y': 52,
    'Z': 53,
    '!': 54,
    '@': 55,
    '£': 56,
    '$': 57,
    '%': 58,
    '^': 59,
    ';': 60,
    '*': 61,
    '(': 62,
    ')': 63,
    '-': 64,
    '_': 65,
    '=': 66,
    '+': 67,
    '[': 68,
    ']': 69,
    '{': 70,
    '}': 71,
    ';': 72,
    ':': 73,
    "'": 74,
    '"': 75,
    '\\': 76,
    '\|': 77,
    ',': 78,
    '.': 79,
    '<': 80,
    '>': 81,
    '/': 82,
    '?': 83,
    '`': 84,
    '~': 85,
    '§': 86,
    '±': 87,
    '1': 88,
    '2': 89,
    '3': 90,
    '4': 91,
    '5': 92,
    '6': 93,
    '7': 94,
    '8': 95,
    '9': 96,
    '0': 97
}
class LetterNumber{
    constructor (characterSet) {
        this._characterSet=characterSet
    }

encrypt(line,num){
    let str=""
    while (num>99){
        num-=99
    }// make num less than 99

    
    for (let i=0;i<line.length;i++){
        let total=Number(this._characterSet[line[i]])+num //sum of number fro dict+num
        if (total<10){ //if total <10
            str+="0"+total
        }
        else if (Number(this._characterSet[line[i]])+num<99){
            str+=total
        }
        else {//sum greater than 99 
            str+=total-99
        }
        }
        return str
    }

}


letterNumber=new LetterNumber(characterSet)
console.log(letterNumber.encrypt("a",1))
console.log(letterNumber.encrypt("Ed", 4))
console.log(letterNumber.encrypt("Hi, Ed!", 302))
