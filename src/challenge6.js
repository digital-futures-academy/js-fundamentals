`requirements:

I want to be able to encrypt a string using letter-number substitution according to this [table of values](https://gist.github.com/dearshrewdwit/691c71616995ad2430ab309aa9998745)

"E" -> "32"
"d" -> "5"
"Ed" -> "325"
"Hi, Ed!" -> "351078132554"
`

const character = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "@", "£", "$", "%", "^", "&", "*", "(", "0", "-", "_", "=", "+", "[", "]", "{", "}", ";", "'", '"', "\\", "|", ",", ".", "<", ">", "/", "?", "`", "~", "§", "±", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

function mapString(str) { // this function takes a str as an argument
    let mappedArray = []; // initialize the array which will later restore the result of the function
    for (let i = 0; i < str.length; i++) { //loop through the input (str)
        const char = str[i];
        const isIncluded = character.includes(char); // in order to make sure that the input appears in the character array
        if (isIncluded === true) {
            mappedArray.push(character.findIndex((c) => c === char) + 1); //value here starts at 1, not zero, so needed to add 1
        }
    }
    return mappedArray.join(""); //return the resulting array without the commas in between using the join method
}

//console.log(mapString("Hi, Ed!"))