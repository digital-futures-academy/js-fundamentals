class Student {
  constructor(name) {
    this._name = name;
    }
  capitalise(name) {
      return this._name.charAt(0).toUpperCase() + this._name.slice(1);
    }
  }

let student = new Student("john")
console.log(student.capitalise())
