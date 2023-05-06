/* Challenge 6: I want to be able to encrypt a string using letter - number substitution.
"E" -> "32"
"d" -> "5"
"Ed" -> "325"
"Hi, Ed!" -> "351078132554"
*/
const characterSet = {
    'H': '35',
    'i': '10',
    ',': '78',
    ' ': '1',
    'E': '32',
    'd': '5',
    '!': '54'
};

function encrypt(str) {
    let output = ""; // Variable to store the encrypted string
    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i); // To represent the current char being processed
        if (characterSet[char]) {
            output += characterSet[char]; // To add the value associated with the current char in characterSet.
        } else {
            output += char;
        }
    }
    return output;
}

const str = "Hi, Ed!";
const encrypted = encrypt(str);
console.log(encrypted); // Output: 351078132554