/*
#### Requirements
I want to be able to encrypt a string using letter-number substitution according to this [table of values](https://gist.github.com/dearshrewdwit/691c71616995ad2430ab309aa9998745)
```
"E" -> "32"
"d" -> "5"
"Ed" -> "325"
"Hi, Ed!" -> "351078132554"
```

Use your best judgment with your pair partner. If you want clarification, ask your coach.
*/
/* use code below to print out 97 character.set statements and then input each character into the first ''.

for (i = 0; i < 98; i++) {
console.log("character.set('', " + i + ")")
}; 
*/

const str = 'bad'

//let code = "";

for (i = 0; i < str.length; i++) {
    let char = str.charAt(i);

    const character = new Map();


    character.set(' ', 1)
    character.set('a', 2)
    character.set('b', 3)
    character.set('c', 4)
    character.set('d', 5)
    character.set('e', 6)
    character.set('f', 7)
    character.set('g', 8)
    character.set('h', 9)
    character.set('i', 10)
    character.set('j', 11)
    character.set('k', 12)
    character.set('l', 13)
    character.set('m', 14)
    character.set('n', 15)
    character.set('o', 16)
    character.set('p', 17)
    character.set('q', 18)
    character.set('r', 19)
    character.set('s', 20)
    character.set('t', 21)
    character.set('u', 22)
    character.set('v', 23)
    character.set('w', 24)
    character.set('x', 25)
    character.set('y', 26)
    character.set('z', 27)
    character.set('A', 28)
    character.set('B', 29)
    character.set('C', 30)
    character.set('D', 31)
    character.set('E', 32)
    character.set('F', 33)
    character.set('G', 34)
    character.set('H', 35)
    character.set('I', 36)
    character.set('J', 37)
    character.set('K', 38)
    character.set('L', 39)
    character.set('M', 40)
    character.set('N', 41)
    character.set('O', 42)
    character.set('P', 43)
    character.set('Q', 44)
    character.set('R', 45)
    character.set('S', 46)
    character.set('T', 47)
    character.set('U', 48)
    character.set('V', 49)
    character.set('W', 50)
    character.set('X', 51)
    character.set('Y', 52)
    character.set('Z', 53)
    character.set('!', 54)
    character.set('@', 55)
    character.set('£', 56)
    character.set('$', 57)
    character.set('%', 58)
    character.set('^', 59)
    character.set('&', 60)
    character.set('*', 61)
    character.set('(', 62)
    character.set(')', 63)
    character.set('-', 64)
    character.set('_', 65)
    character.set('=', 66)
    character.set('+', 67)
    character.set('[', 68)
    character.set(']', 69)
    character.set('{', 70)
    character.set('}', 71)
    character.set(';', 72)
    character.set(':', 73)
    character.set("'", 74)
    character.set('"', 75)
    character.set('\\', 76)
    character.set('|', 77)
    character.set(',', 78)
    character.set('.', 79)
    character.set('<', 80)
    character.set('>', 81)
    character.set('/', 82)
    character.set('?', 83)
    character.set('`', 84)
    character.set('~', 85)
    character.set('#', 86)
    character.set('¬', 87)
    character.set('1', 88)
    character.set('2', 89)
    character.set('3', 90)
    character.set('4', 91)
    character.set('5', 92)
    character.set('6', 93)
    character.set('7', 94)
    character.set('8', 95)
    character.set('9', 96)
    character.set('0', 97)


    console.log(character.get(char))

}


//console.log(char)
