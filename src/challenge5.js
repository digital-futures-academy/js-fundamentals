// Use class syntax to create a Student class that initializes with a name property and has a method that returns the capitalised name.

// Create the student class
class Student {
    // 
    constructor(name) {
        this.name = name;
    }

    // Create the capitalisedName method to take the letter at index 0 and capitalise with .toUpperClass. Then add shallow copy of the rest of the characters from the string with.slice() from index 1
    capitalisedName() {
        return this.name.charAt(0).toUpperCase() + this.name.slice(1);
    }
}

let student = new Student("asia")
student.capitalisedName() // "Asia"