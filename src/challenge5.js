// #### Requirements
// Use class syntax to create a Student class that initializes with a name property and has a method
// that returns the capitalised name.

// ```js
// let student = new Student("asia")
// student.capitalisedName() // "Asia"
// ```

class Student {
  constructor(name) {
    this.name = name;
  }
  capitalisedName() {
    const str = this.name;
    const modStr = str[0].toUpperCase() + str.slice(1);
    return modStr;
  }
}

let student = new Student("asia");
console.log(student.name);
console.log(student.capitalisedName());
