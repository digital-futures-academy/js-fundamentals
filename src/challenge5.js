class Student {
    constructor(name) {
        this.name = name;
    }
    capitalisedName() {
        return this.name[0].toUpperCase() + this.name.slice(1);
    }
}

const student1 = new Student("jake");
console.log(student1.capitalisedName());