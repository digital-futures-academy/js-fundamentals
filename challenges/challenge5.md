#### Requirements
Use class syntax to create a Student class that initializes with a name property and has a method that returns the capitalised name.

class Student{
    constructor(name){
        this.name = name;
    }
    capitalisedName(){
      let temp = this.name.replace(this.name[0], this.name[0].toUpperCase());
      return temp;
    }
}

let student = new Student("asia")
student.capitalisedName() // "Asia"

