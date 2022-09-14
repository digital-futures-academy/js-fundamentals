class Student {
  constructor(name) {
    this.name = name;
  }
  capitalisedName() {
    return this.name.toUpperCase();
  }
}
let student = new Student("asia");
student.capitalisedName();
console.log(student.capitalisedName());
