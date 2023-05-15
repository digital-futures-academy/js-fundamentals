//Use class syntax to create a Student class that initializes with a name property and has a method that returns the capitalised name.
class Student {
    constructor(name) {
        if (typeof name === "string")
            this.name = name;
        else
            this.name = "";
    }

    capitalisedName() {

        let currName = this.name;
        let first = currName.charAt(0);

        currName = currName.slice(1);

        first = first.toUpperCase();

        const newName = first + currName;

        return newName;
    }
};

var student = new Student("asia");
console.log(student.capitalisedName());
