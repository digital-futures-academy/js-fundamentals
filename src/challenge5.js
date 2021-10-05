class Student {
    constructor(name) {
        this.name = name;
    }
    capitalisedName() {
        return this.name[0].toUpperCase() + this.name.slice(1);
    }
};

//Test 
let student = new Student("asia");
console.log(student.capitalisedName()); // "Asia"