#### Requirements
Use class syntax to create a Student class that initializes with a name property and has a method that returns the capitalised name.


class Student{
    constructor(name){
        this._name = name
    }
    //get
    get name(){
        return this._name
    }
    capitalisedName(){
        return this._name[0].toUpperCase() + this._name.slice(1).toLowerCase()
    }
}

let student = new Student("asia")
const output = student.capitalisedName() 
console.log(output) // Output is  "Asia"
