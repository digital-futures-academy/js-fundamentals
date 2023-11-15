class Student {
    constructor(name) {
        this.name = name;
    }

    capitalizeName() {
        return this.name.charAt(0).toUpperCase() + this.name.slice(1);
    }
}

let studentName = new Student("james");
console.log(studentName.capitalizeName());

