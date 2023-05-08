// I want to be able to encrypt a string using letter-number substitution according to this [table of values](https://gist.github.com/dearshrewdwit/691c71616995ad2430ab309aa9998745)

// Use your best judgment with your pair partner. If you want clarification, ask your coach.

const tableOfValues = {
    " ": 1,
    "a": 2,
    "b": 3,
    "c": 4,
    "d": 5,
    // etc
};

function encryptString(str) {
    let result = " ";
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        let value = tableOfValues[char];
        if (value) {
            result += value;
        } else {
            result += char;
        }
    }
    return result;
}

let message = "Hi, Ed!";
let encrypted = encrypt(message);
console.log(encrypted);