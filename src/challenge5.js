//Use class syntax to create a Student class that initializes with a name property and has a method that returns the capitalised name.

class Student{
    constructor(name) {
        this.name = name;
   }
    capitalisedName() {
        let firstPart = this.name.charAt(0).toUpperCase();
        let secondPart = this.name.slice(1);
        return firstPart + secondPart;
    }
}
