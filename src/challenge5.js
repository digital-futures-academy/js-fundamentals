//#### Requirements
//Use class syntax to create a Student class that initializes with a name property
// and has a method that returns the capitalised name.

class Student {
	constructor(name) {
		this.name = name.charAt(0).toUpperCase() + name.slice(1); 
	}
}
let student = new Student('asia'); 
console.log(student); 

// Or
// Can try concatenation, since the function toUpperCase() displays all letters 
//in capitals

class Student{
    constructor(name) {

        this.name = Username;

    }

}
let Username = 'asia';
let capname = Username[0].toUpperCase();
let nextname = Username.slice(1);
let newname = capname+nextname;


console.log(newname);


