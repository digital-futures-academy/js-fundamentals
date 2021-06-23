//Requirements
//Use class syntax to create a Student class that initializes with a name property and has a method that returns the capitalised name.

class Student {
	constructor(name) {
		this._name = name;
	}
	capitalisedName() {
		const capName = this._name[0].toUpperCase() + this._name.substring(1);
		return capName
  }
}

let student = new Student("asia")
student.capitalisedName() // "Asia"
console.log(student.capitalisedName())