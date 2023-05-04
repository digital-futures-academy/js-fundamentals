
// Use class syntax to create a Student class that initializes with a name property and has a method that returns the capitalised name.

class Student {
  constructor(name) {
    this._name = name;
  }

  capitalisedName() {
    // takes the first letter of _name instance variable at index 0 and capitalizes it then concatenates a slice taken at index 1
    return this._name.charAt(0).toUpperCase() + this._name.slice(1);
  }
}



let student = new Student("asia");
student.capitalisedName(); // "Asia"
