
// Use class syntax to create a Student class that initializes with a name property and has a method that returns the capitalised name.

class Student {
    constructor(name) {
        this.name = name;
    }
    capName() {
        console.log(this.name.charAt(0).toUppercase()+this.name.slice(1));
        //string = studentCap.charAt(0).toUpperCase();
        //return string;
    }          

}
let studentCap = new Student("asia");
studentCap.capName();