class Student {
    constructor(name) {
        this._name = name;
    }
    capitalisedName(name) {
        return this._name.toUpperCase()
    }
}
const barbie = new Student('barbie');
console.log(barbie.capitalisedName());