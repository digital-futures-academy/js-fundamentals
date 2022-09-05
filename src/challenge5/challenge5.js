class Student {
    constructor(name) {
        this.name = name;
    }
    capitalisedName() {
        let temp = this.name.replace(this.name[0], this.name[0].toUpperCase());
        return temp;
    }
}

let student = new Student("asia");
student.capitalisedName();// "Asia"