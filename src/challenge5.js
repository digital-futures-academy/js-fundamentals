/* #### Requirements
Use class syntax to create a Student class that initializes with a name property and has a method that returns the capitalised name. */


/* creates Student class setting constructor with name parameter, then setting the instance of name with that parameter */
class Student {
    constructor(name) {
        this.name = name;
    }

    // function that returns the instance of the name in uppercase
    capitalisedName() {
        return this.name.toUpperCase();
    }
}

let student = new Student("asia");
student.capitalisedName(); // "Asia"
