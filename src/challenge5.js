// Create a Student class
// Give it a name property and a method to capitalise it
// Call the class to create a new student object and call its method

class Student {
  constructor(name) {
    this.name = name;
  }

  capitalisedName() {
    this.name = this.name[0].toUpperCase() + this.name.slice(1);
    return this.name;
  }
}

let student = new Student('anacleto');
console.log(student.capitalisedName());
