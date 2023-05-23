class Student {
    constructor(name) {
        this.name = name;
    }

    capitalisedName() {
        var capName = this.name;
        return capName.charAt(0).toUpperCase() + capName.slice(1);
    }
}
