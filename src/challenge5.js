//Use class syntax to create a Student class that initializes with a name property and has a method that returns the capitalised name.

class Student {
    constructor(firstName) {
        this.firstName = firstName;
    }
    capitalisedName() {
        return this.firstName[0].toUpperCase() + this.firstName.slice(1);
    }
}
//let student = new Student("Tina");

let student = new Student("asia");
student.capitalisedName();

