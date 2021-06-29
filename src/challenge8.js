const table = {

    ' ': '1',
    'a': '2',
    'b': '3',
    'c': '4',
    'd': '5',
    'e': '6',
    'f': '7',
    'g': '8',
    'h': '9',
    'i': '10',
    'j': '11',
    'k': '12',
    'l': '13',
    'm': '14',
    'n': '15',
    'o': '16',
    'p': '17',
    'q': '18',
    'r': '19',
    's': '20',
    't': '21',
    'u': '22',
    'v': '23',
    'w': '24',
    'x': '25',
    'y': '26',
    'z': '27',
    'A': '28',
    'B': '29',
    'C': '30',
    'D': '31',
    'E': '32',
    'F': '33',
    'G': '34',
    'H': '35',
    'I': '36',
    'J': '37',
    'K': '38',
    'L': '39',
    'M': '40',
    'N': '41',
    'O': '42',
    'P': '43',
    'Q': '44',
    'R': '45',
    'S': '46',
    'T': '47',
    'U': '48',
    'V': '49',
    'W': '50',
    'X': '51',
    'Y': '52',
    'Z': '53',
    '!': '54',
    '@': '55',
    '£': '56',
    '$': '57',
    '%': '58',
    '^': '59',
    '&': '60',
    '*': '61',
    '(': '62',
    ')': '63',
    '-': '64',
    '_': '65',
    '=': '66',
    '+': '67',
    '[': '68',
    ']': '69',
    '{': '70',
    '}': '71',
    ';': '72',
    ':': '73',
    "'": '74',
    '"': '75',
    '|': '77',
    ',': '78',
    '.': '79',
    '<': '80',
    '>': '81',
    '/': '82',
    '?': '83',
    '`': '84',
    '~': '85',
    '§': '86',
    '±': '87',
    '1': '88',
    '2': '89',
    '3': '90',
    '4': '91',
    '5': '92',
    '6': '93',
    '7': '94',
    '8': '95',
    '9': '96',
    '0': '97',
  };


  class LetterNumber{
    constructor(name, offset, table)  {
      this.name = name; 
      this.offset = offset;
      this.table = table;
      // Create a reverse table
     this.reverse_table = {};
     
     map(this.table.values(),this.table.keys(),)
      
    }
    //Encryption Method
    encrypt() {

       let encryptedMessage = '';
       let curNumber = 0;

     for (var i = 0; i < this.name.length; i++) {

       curNumber = (parseInt(this.table[this.name[i]]) + this.offset)% 100

        if (curNumber < 10){
            encryptedMessage = encryptedMessage + '0' + `${curNumber}`;
        }
        else{
            encryptedMessage = encryptedMessage + `${curNumber}`;
        }   
    
    }
    return encryptedMessage

  }
    //Decryption Method
      decrypt() {
          //Use this.name for now 
          //Split the encrypted string into chunks of size 2 assuming that the string has been correctly formatted, so all entries are of length two. 


          let strLength = this.name.length
          let encryptArray = [];

          // For loop to chunk the string to be decrypted. 
          for (let i = 0; i < strLength; i +=2) {
              encryptArray.push(this.name.slice(i, i + 2))
          }

          // Look up the unencrypted value in the reverse cipher table. 
          strArray.forEach(str => this.reverseTable[str])

          // Need to either reverse the cipher table so that the values and keys interchange roles or find a way to get a key given a value in an object literal.



          return strArray.join()
      }

  }

const letterNumber = new LetterNumber("020304", 0, table);

console.log(letterNumber.decrypt());
/*letterNumber.encrypt("a", 1) // "03"
letterNumber.encrypt("Ed", 4) // "3609"
letterNumber.encrypt("Hi, Ed!", 302)   "37128003340756"
/*




 /* function message (word) {
    
    let encryptedMessage = '';
  
     for (var i = 0; i < word.length; i++) {
    
        encryptedMessage = encryptedMessage + letterCode(word[i]);
  
    }
    return encryptedMessage;
  
  }
  console.log(message('Hello, User123!'));*/
