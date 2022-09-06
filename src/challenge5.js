//Use class syntax to create a Student class that initializes with a name property and has a method that returns the capitalised name.

class Student {
    constructor(name) {
        this.name = name
    }
    capitalisedName() {
        return this.name[0].toUpperCase()+ this.name.slice(1)
    }
}


//test
let student = new Student("tanvir")
console.log(student.capitalisedName());