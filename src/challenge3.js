/* Requirements
Same as Challenge 2 - this time use an arrow function */

const greet = name => {
    console.log(`Hello, ${name}!`);
};

greet("shaf")


const str = 'bad'

let code = "";
for (i = 0; i < str.length; i++) {
    let char = str.charAt(i);


    const character = new Map();


    character.set(' ', 1)
    character.set('a', 2)
    character.set('b', 3)
    character.set('c', 4)
    character.set('d', 5)

    console.log(character.get(char))
}