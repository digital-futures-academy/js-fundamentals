

var letterScore = {
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
    '&': 60,
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
    '|': 77,
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
    };

    class LetterNumber {
        decrypt(cyphterText, keyShift) {
            this.cyphterText = cyphterText;
            this.keyShift = keyShift;

            let plaintext = '';
            // Iterating every 2 values, only returning the first of the two. (We need both)
            for(let i = 0; i < this.cyphterText.length; i+=2){  
                
                // Cyphertext is a string and we need to convert it to an integer to find it in the dictionary. We then use the slice method because we need both integers of 
                // each iteration. We then subtract the key because to encrypyt we added the key (we want to do the oppsoite).
                let temp = parseInt(this.cyphterText.slice(i, i+2)) - this.keyShift; 
                
                //If subtracting the key is out of range, make it so the result is in range.
                while(temp > 97) {
                    temp -= 99;
                }
                while(temp < 0){
                    temp += 99;
                }
                // If our value after subtracting the key is within the dictionary range, find the key of the value searched.
                plaintext += Object.keys(letterScore).find(key => letterScore[key] === temp);
                
            }
            return plaintext;
        }
    }
    let letternumber = new LetterNumber();
    console.log(letternumber.decrypt("5429972051247320552040282934312039353325353425933920353420403520402829392023293628253873", 4771)); // a human-readable sentence
//letterNumber.decrypt("69259338252027353434212034252524204035202335332520413620432940282021203425432035342598", 4771) // a human-readable sentence
//letterNumber.decrypt("5520402829343120552028214225203041394020402825204028293427982047203225404025388332254040253820394122394029404140293534202329362825387320582540933920243520294073", 4771) // a human-readable sentence

// another way to test your program
//let plaintext = "hello, world"
//let key = 5
//console.log(plaintext === letterNumber.decrypt(letterNumber.encrypt(plaintext, key), key))