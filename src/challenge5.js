class Student {
  constructor(name) {
    this.name = name;
  }
  capitalisedName() {
    let titleName = "";
    for (let i = 0; i < this.name.length; i++) {
      if (i === 0) {
        titleName += this.name[i].toUpperCase();
      } else {
        titleName += this.name[i];
      }
    }
    return (this.name = titleName);
  }
}

let student = new Student("asia");
student.capitalisedName();
console.log(student);
