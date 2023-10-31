//Use class syntax to create a Student class that initializes with a name property
// and has a method that returns the capitalised name.

class Student {
  constructor(name) {
    this.name = name;
  }
  capitalisedName() {
    let fixedName = this.name[0].toUpperCase() + this.name.substr(1);
    return fixedName;
  }
}

let student = new Student('asia');

student.capitalisedName(); // "Asia"
