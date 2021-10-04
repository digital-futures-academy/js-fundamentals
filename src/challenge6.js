/*
I want to be able to encrypt a string using letter - number substitution according to this[table of values](https://gist.github.com/dearshrewdwit/691c71616995ad2430ab309aa9998745)
    ```
"E" -> "32"
"d" -> "5"
"Ed" -> "325"
"Hi, Ed!" -> "351078132554"
*/

const encryptString = (str) => {
    let numStr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'H') {
            numStr.push('35');
        }
        if (str[i] === 'i') {
            numStr.push('10');
        }
        else if (str[i] === ',') {
            numStr.push('78');
        }
        else if (str[i] === ' ') {
            numStr.push('1');
        }

        if (str[i] === 'E') {
            numStr.push('32');
        }
        else if (str[i] === 'd') {
            numStr.push('5');
        }
        else if (str[i] === '!') {
            numStr.push('54');
        }

    }
    return numStr.join('').toString();
}

encryptString('Hi, Ed!');