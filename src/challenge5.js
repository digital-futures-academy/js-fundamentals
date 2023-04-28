class Student {
    constructor (name) {
        this.name = name;
    };
    capitalisedName() {
        return this.name.charAt(0).toUpperCase() + this.name.substring(1, this.name.length);
    }
}

