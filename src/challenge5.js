class Student {
    constructor(name) {
        this._name = name;
    }

    capitalisedName() {
        this._name = this._name[0].toUpperCase() + this._name.slice(1);
    }
}


let student = new Student('jack');

console.log(student._name);

student.capitalisedName();

console.log(student._name);