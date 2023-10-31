class Student {
    constructor(name) {
        this._name = name;
    }
    capitalizedName(name) {
        return this._name.charAt(0).toUpperCase() + this._name.slice(1);
    }
}