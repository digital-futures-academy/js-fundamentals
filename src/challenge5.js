class Student {
    constructor(name) {
        this._name = name;
    }

    capitalisedName() {
        if (typeof this._name === 'string') {
            const captalisedName = this._name.charAt(0).toLocaleUpperCase() + this._name.slice(1);
            console.log(captalisedName);
        } else {
            console.log('Please enter a valid name surrounded by quotes.');
        }
    }
}

let student = new Student("asia");
student.capitalisedName();