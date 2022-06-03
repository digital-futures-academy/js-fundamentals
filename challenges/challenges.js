/*
//challenge1
function greet() {
    console.log('Hi!, Ed!');
}

greet()

//challenge 2
function greet(name) {
    return `Hi, ${name}`;
}
console.log('test')
greet(name);


//challenge 5

let studentName = "shaf"
console.log(studentName[0].toUpperCase() + studentName.substring(1));

let student = function capitalisedName() {
    console.log(studentName[0].toUpperCase() + studentName.substring(1))
}

capitalisedName("shaf")

class Person {

    name;

    constructor(name) {
        this.name = name;
    }

    introduceSelf() {
        console.log(`Hi! I'm ${this.name}`);
    }

}

const shaf = new Person('Shaf');
shaf.introduceSelf();

class Professor extends Person {
    teaches;

    constructor(name, teaches) {
        super(name);
        this.teaches = teaches;

    }

    introduceSelf() {
        console.log(`My name is ${this.name}, and I will be your ${this.teaches} professor.`);
    }

    grade(paper) {
        const grade = Math.floor(Math.random() * (5 - 1) + 1);
        console.log(grade)
    }
}

const tom = new Professor('Tom', 'Chemistry');
tom.introduceSelf();
tom.grade('my paper')

*/

//challenge 6

const str = 'this is a str';
const encryptString = (str = '', num = 1) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    str = str.toLowerCase();
    let res = "";
    for (let i = 0; i < str.length; i++) {
        const letter = str[i];
        if (alphabet.indexOf(letter) === -1) {
            res += letter;
            continue;
        }
        let index = alphabet.indexOf(letter) + num % 26;
        if (index > 25) {
            index -= 26;
        };
        if (index < 0) {
            index += 26;
        };
        if (str[i] === str[i].toUpperCase()) {
            res += alphabet[index].toUpperCase();
        } else {
            res += alphabet[index];
        };
    }
    return res;
};
console.log(encryptString(str, 4));

" , 1
a, 2
b, 3
c, 4
d, 5
e, 6
f, 7
g, 8
h, 9
i, 10
j, 11
k, 12
l, 13
m, 14
n, 15
o, 16
p, 17
q, 18
r, 19
s, 20
t, 21
u, 22
v, 23
w, 24
x, 25
y, 26
z, 27
A, 28
B, 29
C, 30
D, 31
E, 32
F, 33
G, 34
H, 35
I, 36
J, 37
K, 38
L, 39
M, 40
N, 41
O, 42
P, 43
Q, 44
R, 45
S, 46
T, 47
U, 48
V, 49
W, 50
X, 51
Y, 52
Z, 53
!, 54
@, 55
£, 56
$, 57
    %, 58
    ^, 59
    &, 60
    *, 61
        (, 62
        ), 63
    -, 64
_, 65
    =, 66
    +, 67
    [, 68
    ], 69
{, 70
}, 71
    ;, 72
:, 73
', 74
", 75
\, 76
    |, 77
    ,, 78
        ., 79
    <, 80
    >, 81
    /, 82
        ?, 83
        `, 84
~, 85
§, 86
±, 87
1, 88
2, 89
3, 90
4, 91
5, 92
6, 93
7, 94
8, 95
9, 96
0, 97"