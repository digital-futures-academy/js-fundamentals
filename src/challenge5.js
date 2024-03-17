class Student {
  constructor(name) {
    this.name = name;
  }
  //make first letter of the name uppercase
  capitalisedName() {
    return this.name.charAt(0).toUpperCase() + this.name.slice(1);
  }
}
let student = new Student("asia");
console.log(student.capitalisedName()); // "Asia"
