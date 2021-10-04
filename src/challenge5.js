// Use class syntax to create a Student class that initializes with a name property and has a method that returns the capitalised name.

// ```js
// let student = new Student("asia")
// student.capitalisedName() // "Asia"
// ```

class Student {
    constructor(name) {
        this.name = name;
    }

    capitalisedName() {
        const firstCharacter = this.name.charAt(0);
        const restOfString = this.name.slice(1);
        return firstCharacter.toUpperCase() + restOfString;
    }
}


let student = new Student("asia")
student.capitalisedName() // "Asia"
console.log(student.capitalisedName());