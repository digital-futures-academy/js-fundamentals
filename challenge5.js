//first lifting a function to capitalise the first letter:

function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

//now initialise the student class with the name attribute and capitalisation method:

  class Student{
    constructor(name){this.name = name}
    capitalisedName() {console.log(capitaliseFirstLetter(this.name))}
}

//testing below:

let student = new Student('alfieri')
student.capitalisedName()