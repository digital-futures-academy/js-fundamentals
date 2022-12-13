class Student   {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name
    }

    capitalisedName() {
        return this._name.charAt(0).toUpperCase() + this._name.slice(1);
    }
}