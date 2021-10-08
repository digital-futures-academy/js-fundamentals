/* 
I want to be able to encrypt a string using letter-number substitution according to this [table of values](https://gist.github.com/dearshrewdwit/691c71616995ad2430ab309aa9998745)
```
"E" -> "32"
"d" -> "5"
"Ed" -> "325"
"Hi, Ed!" -> "351078132554"
```

Use your best judgment with your pair partner. If you want clarification, ask your coach.

*/

 
const encryptedWord = [
  "#","","a","b","c","d","e","f","g","h","i","j", "k","l", "m","n", "o","p", "q","r",
  "s","t","u","v", "w","x", "y","z", "A", "B","C","D", "E","F", "G", "H", "I", "J", "K",
  "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "@", "£", "$", "%", "^",
  "&","*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "'", '"', "/", "|", ",", ".", "<",
  ">","/","?", "`", "~", "§", "±", "1","2","3","4","5", "6", "7", "8", "9", "0",
];

class Encryption {
  constructor(message) {
    this.message = message;
  }
  theMessage() {
    let index = encryptedWord.indexOf(this.message);
    for (let i = 0; i < encryptedWord.length; i++) {
      return index;
    }
  }
}
let encryption = new Encryption("Hi, Ed!");
encryption.theMessage();
console.log(encryption.theMessage());

/* 
- The solution I am trying to come up with was to first use class syntax
- Then have the function loop through the array and return the index of all of the characters according to the string entered
- Wouldn't return the full string only when one character was entered would it return its correct index
- I added the hash key so that I could get the (space) to have an index of 1 as it was the zeroth index. 
Therefore when trying to use index of it would match the table given
- I at first tried to use 'getters and setter' however I wasn't able to return values only undefined.
*/
