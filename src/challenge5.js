//Use class syntax to create a Student class that initializes with a name property, and a method that returns the capitalised name.

//let student = new Student("asia")
//student.capitalisedName() // "Asia"

class student {
    constructor(name) {
        this._name = name;
    }
    capitalise() {
       return this._name[0].toUpperCase() + this._name.slice(1)
    }
}
const matthew = new student('matthew') 
console.log(matthew.capitalise())

const hanna = new student('hanna')
console.log(hanna.capitalise())