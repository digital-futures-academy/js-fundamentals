//Use class syntax to create a Student class that initializes with a name property and has a method that returns the capitalised name.

class Student {
    constructor(name){
        // Remove any extra whitespace from the name. 
        this._name = name.trim();
    }

    capitalisedName(){
        return this._name[0].toUpperCase() + this._name.slice(1);
    }

}

// Further extensions: 
// Check if argument passed to name contains invalid characters.

// Check if code works
let student1 = new Student("asia")
console.log( student1.capitalisedName() ) // "Asia"

let student2 = new Student("India")
console.log(student2.capitalisedName()) // "India"
