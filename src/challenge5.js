

class Student{

  constructor(name) {
    this.name = name;
  }

  captilisedName() {

    return this.name.charAt(0).toUpperCase() + this.name.slice(1);

  }
}

let student = new Student('asia');

student.captilisedName();
