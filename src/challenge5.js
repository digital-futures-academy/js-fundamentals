class Student {
  constructor(name) {
    this.name = name;
  }
  capitalisedName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
}

let student = new Student("asia");
student.capitalisedName(); // "Asia"
