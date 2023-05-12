// Use class syntax to create a Student class that initializes 
// with a name property and has a method that returns the capitalised name.

class Student {
  constructor(name) {
    this.name = name;
  }

  capitalisedName() {
    const first_letter = this.name.charAt(0);
    const rest_of_letters = this.name.slice(1);
    const capitalised_letter = first_letter.toUpperCase();
    return capitalised_letter + rest_of_letters;
  }
}

let student = new Student("asia");
console.log(student.capitalisedName());
// >> "Asia"