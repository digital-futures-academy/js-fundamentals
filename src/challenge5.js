function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  class Student{
    constructor(name){this.name = name}
    capitalisedName() {console.log(capitaliseFirstLetter(this.name))}
}

//test

let student = new Student('nico')
student.capitalisedName()