/**
 * #### Requirements
I want to be able to encrypt a string using letter-number substitution according to this [table of values](https://gist.github.com/dearshrewdwit/691c71616995ad2430ab309aa9998745)
```
"E" -> "32"
"d" -> "5"
"Ed" -> "325"
"Hi, Ed!" -> "351078132554"
```
 */
function encryptString(string) {
    // Use of \ to be able to include special characters in this string
    const characters = ` abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@£$%^&*()-_=+[]{};:'"\\|,.<>/?\`~§±1234567890`;
    let encryptedString = "";
    for (let i = 0; i < string.length; i++) {
        // +1 as index one should be a space character and subsuequent chars index are 1 less than 
        // what they should be when compared to the table
        encryptedString += characters.indexOf(string[i]) + 1;
    }
    return encryptedString;
}

console.log(encryptString("Hi, Ed!"));

// TODO: Attempt this using a map




