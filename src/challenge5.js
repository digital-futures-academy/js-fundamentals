class Student {
    constructor(name) {
        this.name = name;
    }
    capitalisedName() {
        return this.name[0].toUpperCase() + this.name.slice(1);
    }
}
let jack = new Student();
jack.name = 'jack'

jack.capitalisedName();

console.log(jack.capitalisedName());



