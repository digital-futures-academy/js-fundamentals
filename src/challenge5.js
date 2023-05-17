//challenge 5
class Student {
    constructor(name) {
        this._name = name;
    }
    capitalisedName() {
        this._name = this._name.slice(0, 1).toUpperCase() + this._name.slice(1);
    }
}