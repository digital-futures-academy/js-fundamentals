
// Use class syntax to create a Student class that initializes with a name property, and a method that returns the capitalised name.

// let student = new Student("asia")
// student.capitalisedName() // "Asia"


    class Student {
        constructor(name){
            this.name = name
    
        }
        capitalisedName(){
            return this.name[0].toUpperCase()+ this.name.slice(1)
        }
    }
    
    const student = new Student("asia")
    console.log(student.capitalisedName())
