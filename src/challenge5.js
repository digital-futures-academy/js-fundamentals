class Student {
    constructor(name) {
        this.name = name;
    }
    capitalisedName() {
        const editName = this.name[0].toUpperCase() + this.name.slice(1);
        return editName;
    }
};

//Test 
let student = new Student("asia");
console.log(student.capitalisedName()); // "Asia"