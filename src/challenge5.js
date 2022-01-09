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
        let firstLetterUppercase = this.name[0].toUpperCase();
        let restOfName = this.name.slice(1);
        return firstLetterUppercase + restOfName;

    }
}

let student = new Student("asia")
console.log(student.capitalisedName()) // "Asia"

