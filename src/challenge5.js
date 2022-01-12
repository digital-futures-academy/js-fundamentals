// Use class syntax to create a Student class that initializes with a name property and has a method that returns the capitalised name.

class Student {
    constructor(name) {
        this.name = name
    };

    capitalisedName() {
        let capilatisedFirstLetter = (this.name.charAt(0)).toUpperCase();
        let lowerCaseLetters = this.name.slice(1);
        return this.name = capilatisedFirstLetter + lowerCaseLetters;
    };

}

let student = new Student("asia")
console.log(student.capitalisedName())// "Asia"


