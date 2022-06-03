
class Student {
    constructor(name) {
        this.name = name;
    }
    capitalisedName() {
        console.log(this.name.toUpperCase());
    }
}
let student = new Student("aroosa");
student.capitalisedName();
