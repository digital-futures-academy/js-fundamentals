class Student {
  constructor(name) {
    this.name = name;
  }

  capitalisedName = () => this.name.toUpperCase();
}

let student = new Student("Devin")
console.log(student.capitalisedName())