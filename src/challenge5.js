

// Use class syntax to create a Student class that initializes with a name property, and a method that returns the capitalised name.

// let student = new Student("asia")
// student.capitalisedName()  "Asia"

// create class, initialise with name property
class Student {
    constructor(name) {
        this.name = name;
    }



    // method returns capitalised
    capitaliseName() {
    this.name = this.name[0].toUpperCase() + this.name.slice(1);
    console.log(this.name);
}

}

let student = new Student('antony');
student.capitaliseName();