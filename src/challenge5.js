/*Use class syntax to create a Student class that initializes with a name property and has a method that returns the capitalised name.

let student = new Student("asia")
student.capitalisedName() // "Asia"
*/

class Student {

    constructor(name) {
        this.name = name;
    }

    capitalisedName() {
        const len = (this.name).length;
        const upper = ((this.name).charAt(0).toUpperCase()) + (this.name).slice(1);
        return upper;

    }
}

let student = new Student("asia");
console.log(student.capitalisedName());

