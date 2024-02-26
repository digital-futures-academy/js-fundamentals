class Student {
    constructor(name) {
        this.name = name;
    }

    capitalisedName() {
        return this.name.charAt(0).toUpperCase() + this.name.slice(1).toLowerCase();
    }
}


let student = new Student("asia");
console.log(student.capitalisedName())
