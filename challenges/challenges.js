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

*/
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